import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Notification.css'

export const infoToast = (text) => {
    toast(text, {
        className: 'test-toast',
        autoClose: 7000,
        hideProgressBar: false,
        position: toast.POSITION.TOP_RIGHT
    });
}