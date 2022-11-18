import { Router } from 'express';

import test from './test';
import auth from './auth';
import user from './user';
import profile from './profile';

const router = Router();

router.use('/', test);
router.use('/', auth);
router.use('/', user);
router.use('/', profile);

export default router;
