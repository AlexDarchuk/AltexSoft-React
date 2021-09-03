import * as yup from 'yup';
import { errorMessagesConstants } from '../errors/errorMessagesConstants';

export const LoginShema = yup.object().shape({
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