import { Router } from 'express';
import auth from '../controllers/auth';

const router = Router();

router.get('/api/auth', auth);

export default router;
