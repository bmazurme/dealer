import { login as loginController, createUser as createUserController } from './auth';
import { confirmEmail as confirmEmailController } from './user';
import { updatePassword } from './password';

export {
  loginController,
  createUserController,
  confirmEmailController,
  updatePassword,
};
