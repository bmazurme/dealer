import { Request, Response } from 'express';

const auth = (_req: Request, res: Response) => res.status(201).send({ message: 'auth' });

export default auth;
