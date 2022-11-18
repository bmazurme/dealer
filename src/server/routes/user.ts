import { Router } from 'express';

import { validateUserData } from '../utils/validator';
import { getCurrentUser } from '../controllers/user';

const router = Router();

router.get('/users/me', getCurrentUser);
router.patch('/users/me', validateUserData, getCurrentUser);

export default router;
