/* eslint-disable @typescript-eslint/no-explicit-any */
import { celebrate, Joi } from 'celebrate';
import { isValidObjectId } from 'mongoose';
import validator from 'validator';

import { BadRequestError } from '../errors';

const checkUrl = (value: string, helpers: any) => {
  if (validator.isURL(value)) {
    return value;
  }

  return helpers.message('поле заполнено некорректно');
};

const StringRequired = Joi.string().required();

const validateObjectId = celebrate({
  params: Joi.object().keys({
    id: StringRequired.custom((value) => {
      if (!isValidObjectId(value)) {
        throw new BadRequestError('переданы некорректные данные');
      }

      return value;
    }),
  }),
});

const validateUserData = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    email: Joi.string().required().email(),
  }),
});

const validateLoginData = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
});

const validateRegistrData = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    about: Joi.string().min(2).max(30),
    avatar: Joi.string().custom(checkUrl),
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
});

export {
  validateObjectId,
  validateUserData,
  validateLoginData,
  validateRegistrData,
};
