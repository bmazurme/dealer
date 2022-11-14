import { Router } from 'express';
import test from '../controllers/test';

const router = Router();

router.get('/api/test', test);

export default router;
