import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { config as dotEnvConfig } from 'dotenv';

import User, { IUser } from '../models/user';

import UnauthorizedError from '../errors/UnauthorizedError';
import BadRequestError from '../errors/BadRequestError';
import ConflictError from '../errors/ConflictError';

dotEnvConfig();

const createUser = (req: Request, res: Response, next: NextFunction) => {
  const {
    name,
    about,
    avatar,
    email,
    password,
  } = req.body;

  bcrypt.hash(password, 10)
    .then((hash: string) => User.create({
      name,
      about,
      avatar,
      email,
      password: hash,
    }))
    .then((user: IUser | undefined) => res.send({
      // eslint-disable-next-line no-underscore-dangle
      _id: user?._id,
      name,
      about,
      avatar,
      email,
    }))
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
      const token = jwt.sign(
        // eslint-disable-next-line no-underscore-dangle
        { _id: user?._id },
        'super-strong-secret',
        { expiresIn: '7d' },
      );

      res.send({ token });
    })
    .catch(() => next(new UnauthorizedError('авторизация с несуществующими email и password')));
};

export { createUser, login };
