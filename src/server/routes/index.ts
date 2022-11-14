import { Router } from 'express';

import test from './test';
import auth from './auth';
import profile from './profile';
import user from './user';

const router = Router();

router.use('/', test);
router.use('/', auth);
router.use('/', profile);
router.use('/', user);

export default router;
