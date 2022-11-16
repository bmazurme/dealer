import { Router } from 'express';
import profile from '../controllers/profile';

const router = Router();

router.get('/api/profile', profile);
router.patch('/api/users/password', profile);
router.post('/api/reset/password', profile);
router.patch('/api/reset/password', profile);

export default router;
