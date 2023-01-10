/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
import { NextFunction, Request, Response } from 'express';

import axios from 'axios';
import jwt from 'jsonwebtoken';
import { config as dotEnvConfig } from 'dotenv';

import { ObjectId } from 'mongoose';

import User, { IUser } from '../models/user';
import DEV_JWT_SECRET from '../utils/devConfig';
import { UnauthorizedError } from '../errors';

dotEnvConfig();

const oauthController = (req: Request, res: Response, next: NextFunction) => {
  const { token } = req.body;
  const config = {
    method: 'get',
    url: 'https://login.yandex.ru/info',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  // 1 response not found email
  // 2 user status pending or blocked
  // 3
  axios(config)
    .then((response) => {
      const { default_email } = response.data;

      return User.findOne({ email: default_email })
        .then((user: (IUser & { _id: ObjectId; }) | null) => {
          if (user?.status !== 'Active') {
            return next(new UnauthorizedError('PENDING_ACCAUNT_RU'));
          }

          const { JWT_SECRET, NODE_ENV } = process.env;
          const tokenNew = jwt.sign(
            { _id: user._id },
            NODE_ENV! === 'production' ? JWT_SECRET! : DEV_JWT_SECRET,
            { expiresIn: '7d' },
          );

          return res.cookie('token', tokenNew, {
            maxAge: 3600000 * 24 * 7,
            httpOnly: true,
            sameSite: true,
          })
            .send({ message: 'Успешная авторизация' });
        })
        .catch(() => next(new UnauthorizedError('---error---')));

      // return res.send(response.data);
    })
    .catch((err) => {
      next(err);
    });
};

export { oauthController };
