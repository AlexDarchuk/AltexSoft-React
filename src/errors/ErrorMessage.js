import { ErrorMessage as Message } from 'formik';

export const ErrorMessage = ({name}) => {
    return (
        <Message name={name}>{(msg) => <div style={{color: "rgb(245, 50, 50)", fontSize: "20px", fontWeight: "700"}}>{msg}</div>}</Message>
    )
}