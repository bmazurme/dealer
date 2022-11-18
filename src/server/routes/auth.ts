import { Router } from 'express';

import { login, createUser, confirmEmail } from '../controllers';

import { validateLoginData, validateRegistrData } from '../utils/validator';

import { UrlsApi } from '../utils/routers';

const router = Router();

router.post(UrlsApi.SIGN.IN, validateLoginData, login);
router.post(UrlsApi.SIGN.UP, validateRegistrData, createUser);
router.post(UrlsApi.SIGN.OUT, login);
router.post(UrlsApi.SIGN.CONFIRM, confirmEmail);

export default router;
