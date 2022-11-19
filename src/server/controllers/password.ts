/* eslint-disable no-param-reassign */
import { NextFunction, Request, Response } from 'express';
import bcrypt from 'bcryptjs';

import User, { IUser } from '../models/user';

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

export { updatePassword };
