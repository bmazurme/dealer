import { Response, NextFunction } from 'express';

import jwt from 'jsonwebtoken';
import { UnauthorizedError } from '../errors';
// import DEV_JWT_SECRET from '../utils/devConfig';

const DEV_JWT_SECRET: any = {};

// eslint-disable-next-line max-len
const auth = (req: any, _res: Response, next: NextFunction) => {
  const { authorization } = req.headers as unknown as Record<string, string>;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    throw new UnauthorizedError();
  }

  const token = authorization.replace('Bearer ', '');
  let payload;

  try {
    payload = jwt.verify(token, process.env.NODE_ENV === 'production'
      ? process.env.JWT_SECRET
      : DEV_JWT_SECRET.DEV_JWT_SECRET);
  } catch (err) {
    throw new UnauthorizedError();
  }

  req.user = payload;

  next();
};

export default auth;
