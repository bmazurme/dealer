import { Router } from 'express';

import {
  loginController,
  createUserController,
  confirmEmailController,
  newPasswordController,
  resetPasswordController,
  oauthController,
} from '../controllers';

import { validateLoginData, validateRegistrData } from '../utils/validator';
import { UrlsApi } from '../utils/routers';

const router = Router();

router.post('/oauth', oauthController);

router.post(UrlsApi.SIGN.IN, validateLoginData, loginController);
router.post(UrlsApi.SIGN.UP, validateRegistrData, createUserController);
router.get(UrlsApi.SIGN.CONFIRM, confirmEmailController);
router.patch(UrlsApi.PASS.RESET, resetPasswordController);
router.patch(UrlsApi.PASS.NEW, newPasswordController);

export default router;
