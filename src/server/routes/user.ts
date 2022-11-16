import { Router } from 'express';
import user from '../controllers/user';
import { validateUserData } from '../utils/validator';

const router = Router();

router.get('api/users/me', user);
router.patch('api/users/me', validateUserData, user);

export default router;
