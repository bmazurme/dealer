import { Router } from 'express';

import { updatePassword } from '../controllers';
import { validatePassword } from '../utils/validator';
import { UrlsApi } from '../utils/routers';

const router = Router();

router.patch(UrlsApi.PASS.UPDATE, validatePassword, updatePassword);
router.patch(UrlsApi.PASS.RESET, updatePassword);

export default router;
