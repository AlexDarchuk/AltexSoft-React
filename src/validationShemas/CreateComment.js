import * as yup from 'yup';

export const CreateComment = yup.object().shape({
    body: yup
        .string()
        .required()
});