import * as yup from 'yup';
import { errorMessagesConstants } from '../errors';

export const UpdateUserShema = yup.object().shape({
    username: yup
        .string()
        .trim()
        .required(() => errorMessagesConstants.USERNAME_IS_REQUIRED),
    email: yup
        .string()
        .trim()
        .email(() => errorMessagesConstants.EMAIL_NOT_VALIDE)
        .required(() => errorMessagesConstants.EMAIL_IS_REQUIRED),
    password: yup 
        .string()
        .trim()
        .required(() => errorMessagesConstants.PASSWORD_IS_REQUIRED)
        .min(8, () => errorMessagesConstants.PASSWORD_IS_SHORT)
});
