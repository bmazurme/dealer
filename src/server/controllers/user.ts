/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express';
import bcrypt from 'bcryptjs';

import User, { IUser } from '../models/user';

import { NotFoundError, BadRequestError, ConflictError } from '../errors';

// eslint-disable-next-line max-len
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

const updatePassword = (req: Request, res: Response, next: NextFunction) => {
  const { password, newPassword, email } = req.body;

  User.findUserByCredentials(email, password)
    .then((user: IUser | undefined) => {
      bcrypt.hash(newPassword, 10)
        .then((hash: string) => {
          (user as IUser).password = hash;
          user?.save();

          const { name, _id } = user!;
          res.send({ email, name, id: _id });
        });
    })
    .catch((err) => {
      next(err);
    });
};

const updateUser = (req: any, res: Response, next: NextFunction) => {
  const { name, email } = req.body;

  User.findByIdAndUpdate(
    // eslint-disable-next-line no-underscore-dangle
    req.user._id,
    {
      name,
      email,
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

const confirmEmail = (req: any, res: Response, next: NextFunction) => {
  User.findOne({ confirmationCode: req.params.confirmationCode })
    .then((user: any) => {
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

export {
  getCurrentUser,
  updatePassword,
  updateUser,
  confirmEmail,
};
