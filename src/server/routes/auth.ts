import { Router } from 'express';

import { login, createUser } from '../controllers/auth';
import { validateLoginData, validateRegistrData } from '../utils/validator';

const router = Router();

router.post('/api/signin', validateLoginData, login);
router.post('/api/signup', validateRegistrData, createUser);
router.post('/api/signout', login);
router.post('/api/confirm/:code', login);

export default router;
