/* eslint-disable arrow-body-style */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Response } from 'express';

import User from '../models/user';
import { NotFoundError, BadRequestError, ConflictError } from '../errors';

const getCurrentUser = (req: any, res: Response, next: NextFunction) => {
  // eslint-disable-next-line no-underscore-dangle
  User.findById(req.user._id)
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

const updateUser = (req: any, res: Response, next: NextFunction) => {
  const {
    firstName,
    secondName,
    login,
    email,
    phone,
  } = req.body;

  User.findByIdAndUpdate(
    // eslint-disable-next-line no-underscore-dangle
    req.user._id,
    {
      firstName,
      secondName,
      login,
      email,
      phone,
    },
    {
      new: true,
      runValidators: true,
    },
  )
    .then((data) => {
      if (!data) {
        return next(new NotFoundError('USER_NOT_FOUND_RU'));
      }

      return res.send(data);
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        return next(new BadRequestError());
      }

      if (err.code === 11000) {
        return next(new ConflictError('USER_CONFLICT_RU'));
      }

      return next(err);
    });
};

const updateUserAvatar = (req: any, res: Response, next: NextFunction) => {
  const { avatar } = req.body;

  User.findByIdAndUpdate(
    // eslint-disable-next-line no-underscore-dangle
    req.user._id,
    { avatar },
    {
      new: true,
      runValidators: true,
    },
  )
    .then((data) => {
      if (!data) {
        return next(new NotFoundError('USER_NOT_FOUND_RU'));
      }

      return res.send(data);
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        return next(new BadRequestError());
      }

      if (err.code === 11000) {
        return next(new ConflictError('USER_CONFLICT_RU'));
      }

      return next(err);
    });
};

const logout = (req: Request, res: Response) => res.clearCookie('token', { path: '/' }).send('logout');

export {
  getCurrentUser,
  updateUser,
  updateUserAvatar,
  logout,
};
