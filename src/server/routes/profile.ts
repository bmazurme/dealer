import { Router } from 'express';
import profile from '../controllers/profile';

const router = Router();

router.get('/api/profile', profile);

export default router;
