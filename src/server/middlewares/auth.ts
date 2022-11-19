import { Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

import { IUser } from '../models/user';
import { UnauthorizedError } from '../errors';
import DEV_JWT_SECRET from '../utils/devConfig';

const auth = (req: any, _res: Response, next: NextFunction) => {
  const { authorization } = req.headers as unknown as Record<string, string>;
  const { JWT_SECRET, NODE_ENV } = process.env;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    throw new UnauthorizedError();
  }

  const token = authorization.replace('Bearer ', '');
  let payload;

  try {
    payload = jwt.verify(token, NODE_ENV! === 'production' ? JWT_SECRET! : DEV_JWT_SECRET);
  } catch (err) {
    throw new UnauthorizedError();
  }

  req.user = payload as IUser;

  next();
};

export default auth;
