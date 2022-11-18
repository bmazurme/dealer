import { NextFunction, Request, Response } from 'express';

import User from '../models/user';

import NotFoundError from '../errors/NotFoundError';
import BadRequestError from '../errors/BadRequestError';

const getCurrentUser = (req: Request, res: Response, next: NextFunction) => {
  // eslint-disable-next-line no-underscore-dangle
  User.findById(req.body.user._id)
    .then((user) => {
      if (!user) {
        next(new NotFoundError('пользователь не найден'));
      }

      return res.send(user);
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        next(new BadRequestError());
      }

      next(err);
    });
};

export { getCurrentUser };
