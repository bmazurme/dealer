import { Router } from 'express';

import authRoute from './auth';
import userRoute from './user';
import passRoute from './password';

import authMiddleware from '../middlewares/auth';

const router = Router();

router.use('/', authRoute);
router.use('/', authMiddleware, userRoute);
router.use('/', authMiddleware, passRoute);

export default router;
