import { ToastContainer, toast } from 'react-toastify';
import { userConstants } from '../../constants'


export const toastBar = (state = {}, action) => {
    switch (action.type) {
        case userConstants.TOAST_SHOW_SUCCESS:
            toast.success(action.text);
            break;
        case userConstants.TOAST_SHOW_ERROR:
            toast.error(action.text);
            break;
        case userConstants.TOAST_SHOW_INFO:
            toast.info(action.text);
            break;
        case userConstants.TOAST_SHOW_WARNING:
            toast.warning(action.text);
            break;
        default:
            break;
    }
    return state;
}

