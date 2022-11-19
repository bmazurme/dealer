import { Router } from 'express';

import { validateUserData, validateUserAvatar } from '../utils/validator';
import { getCurrentUser, updateUser, updateUserAvatar } from '../controllers/user';
import { UrlsApi } from '../utils/routers';

const router = Router();

router.get(UrlsApi.USER.ME, getCurrentUser);
router.patch(UrlsApi.USER.UPDATE.INFO, validateUserData, updateUser);
router.put(UrlsApi.USER.UPDATE.INFO, validateUserAvatar, updateUserAvatar);

export default router;
