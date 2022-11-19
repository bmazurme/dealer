/* eslint-disable @typescript-eslint/no-explicit-any */
import { Router } from 'express';

import { validateUserData, validateUserAvatar } from '../utils/validator';
import {
  logoutController,
  updateUserController,
  getCurrentUserController,
  updateUserAvatarController,
} from '../controllers';

import { UrlsApi } from '../utils/routers';

const router = Router();

router.get(UrlsApi.USER.ME, getCurrentUserController);
router.patch(UrlsApi.USER.UPDATE.INFO, validateUserData, updateUserController);
router.put(UrlsApi.USER.UPDATE.INFO, validateUserAvatar, updateUserAvatarController);
router.post(UrlsApi.SIGN.OUT, logoutController as unknown as any);

export default router;
