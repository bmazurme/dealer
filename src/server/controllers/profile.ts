import { Request, Response } from 'express';

const profile = (_req: Request, res: Response) => res.status(201).send({ message: 'profile' });

export default profile;
