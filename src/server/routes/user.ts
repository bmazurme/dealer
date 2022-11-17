import { Router } from 'express';

import { validateUserData } from '../utils/validator';
import { getCurrentUser } from '../controllers/user';

const router = Router();

router.get('/api/users/me', getCurrentUser);
router.patch('/api/users/me', validateUserData, getCurrentUser);

export default router;
