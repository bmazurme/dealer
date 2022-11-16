import { Request, Response } from 'express';

const user = (_req: Request, res: Response) => res.status(201).send({ message: 'user' });
 
export default user;
