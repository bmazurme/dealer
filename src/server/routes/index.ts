import { Router } from 'express';

import authRoute from './auth';
import userRoute from './user';
import profileRoute from './profile';

import authMiddleware from '../middlewares/auth';

const router = Router();

router.use('/', authRoute);
router.use('/', authMiddleware, userRoute);
router.use('/', profileRoute);

export default router;
