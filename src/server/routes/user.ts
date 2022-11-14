import { Router } from 'express';
import user from '../controllers/user';

const router = Router();

router.get('/api/user', user);

export default router;
