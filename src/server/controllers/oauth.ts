/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
import { NextFunction, Request, Response } from 'express';

import axios from 'axios';
import jwt from 'jsonwebtoken';
import { config as dotEnvConfig } from 'dotenv';

import { ObjectId } from 'mongoose';

import User, { IUser } from '../models/user';
import DEV_JWT_SECRET from '../utils/dev-config';
import { UnauthorizedError, NotFoundError } from '../errors';

dotEnvConfig();

const oauthYaSigninController = (req: Request, res: Response, next: NextFunction) => {
  const { token } = req.body;
  const config = {
    method: 'get',
    url: 'https://login.yandex.ru/info',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  axios(config)
    .then((response) => {
      const { default_email } = response.data;

      return User.findOne({ email: default_email })
        .then((user: (IUser & { _id: ObjectId; }) | null) => {
          if (!user) {
            return next(new NotFoundError('USER_NOT_FOUND'));
          }

          if (user?.status !== 'Active') {
            return next(new UnauthorizedError('PENDING_ACCAUNT'));
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
        .catch(() => next(new UnauthorizedError('ANY_ERROR')));
    })
    .catch((err) => {
      next(err);
    });
};

export { oauthYaSigninController };
