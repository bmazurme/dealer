import { Router } from 'express';
import auth from '../controllers/auth';

import {
  validateLoginData,
  validateRegistrData,
} from '../utils/validator';

const router = Router();

router.get('/api/auth', auth);
router.post('/api/signin', validateLoginData, auth);
router.post('/api/signup', validateRegistrData, auth);
router.post('/api/signout', auth);
router.post('/api/confirm/:code', auth);

export default router;
