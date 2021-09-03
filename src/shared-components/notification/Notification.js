import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Notification.css'

export const infoToast = () => {
    toast("Authentication required. Please Login", {
        className: 'test-toast',
        autoClose: 7000,
        hideProgressBar: false,
        position: toast.POSITION.TOP_RIGHT
    });
}