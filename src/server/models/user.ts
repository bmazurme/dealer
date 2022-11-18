/* eslint-disable func-names */
/* eslint-disable max-len */
import {
  Schema,
  Document,
  model,
  Model,
} from 'mongoose';

import validator from 'validator';
// import isUrl from 'validator/lib/isURL';
import bcrypt from 'bcryptjs';

export interface IUser extends Document {
  name: string;
  about: string;
  avatar: string;
  email: string;
  password: string;
}

export interface UserModel extends Model<IUser> {
  findUserByCredentials: (email: string, password: string) => Promise<IUser | undefined>;
}

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  about: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  avatar: {
    type: String,
    required: true,
    // validate: {
    //   validator: (link: string) => isUrl(link),
    //   message: 'некорректные данные',
    // },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator(email: string) {
        return validator.isEmail(email);
      },
      message: 'Введён некорректный email',
    },
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
});

UserSchema.statics.findUserByCredentials = function (email: string, password: string): Promise<IUser | undefined> {
  return this.findOne({ email })
    .select('+password')
    .then((user: IUser) => {
      if (!user) {
        return Promise.reject(new Error('Неправильные почта или пароль'));
      }
      return bcrypt.compare(password, user.password)
        .then((matched) => {
          if (!matched) {
            return Promise.reject(new Error('Неправильные почта или пароль'));
          }

          return user;
        });
    });
};

export default model<IUser, UserModel>('User', UserSchema);
