/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { config as dotEnvConfig } from 'dotenv';

import { ObjectId } from 'mongoose';
import sendMail from './sendMail';
import User, { IUser } from '../models/user';
import DEV_JWT_SECRET from '../utils/devConfig';
import {
  UnauthorizedError,
  BadRequestError,
  ConflictError,
  NotFoundError,
} from '../errors';

dotEnvConfig();

const CONFIRM = 1;
const CHARACTERS = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

const createUser = (req: Request, res: Response, next: NextFunction) => {
  const {
    firstName,
    secondName,
    login,
    email,
    phone,
    avatar,
    password,
  } = req.body;

  let token = '';

  for (let i = 0; i < 25; i += 1) {
    token += CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
  }

  bcrypt.hash(password, 10)
    .then((hash: string) => User.create({
      firstName,
      secondName,
      login,
      email,
      phone,
      avatar,
      password: hash,
    }))
    .then((user: IUser | undefined) => {
      sendMail(email, token, login, CONFIRM);

      res.send({
        // eslint-disable-next-line no-underscore-dangle
        _id: user?._id,
        firstName,
        secondName,
        login,
        email,
        phone,
        avatar,
      });
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new BadRequestError());
      }

      if (err.code === 11000) {
        next(new ConflictError('добавление пользователя с существующим email'));
      }

      next(err);
    });
};

const login = (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;

  return User.findUserByCredentials(email, password)
    .then((user: IUser | undefined) => {
      if (user?.status !== 'Active') {
        return next(new UnauthorizedError('PENDING_ACCAUNT_RU'));
      }
      const { JWT_SECRET, NODE_ENV } = process.env;
      const token = jwt.sign(
        { _id: user._id },
        NODE_ENV! === 'production' ? JWT_SECRET! : DEV_JWT_SECRET,
        { expiresIn: '7d' },
      );

      return res.cookie('token', token, {
        maxAge: 3600000 * 24 * 7,
        httpOnly: true,
        sameSite: true,
      })
        .send({ message: 'Успешная авторизация' });
      // return res.send({ token });
    })
    .catch(() => next(new UnauthorizedError('авторизация с несуществующими email и password')));
};

const confirmEmail = (req: Request, res: Response, next: NextFunction) => {
  User.findOne({ confirmationCode: req.params.confirmationCode })
    .then((user: (IUser & { _id: ObjectId; }) | null) => {
      if (!user) {
        return next(new NotFoundError('USER_NOT_FOUND_RU'));
      }

      if (user.status === 'Pending') {
        user.status = 'Active';
        user.save();

        return res.send('ok'); // ???
      }

      return res.status(409).send('xxx'); // ???
    })
    .catch((err) => {
      next(err);
    });
};

export { createUser, confirmEmail, login };
