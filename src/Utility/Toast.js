import { toast } from 'react-toastify'
export const showToast = (msg, type) => {
    const toastTypes = {
        success: toast.success,
        warning: toast.warning,
        error: toast.error,
        info: toast.info
    };
    const toastOptions = {
        position: "bottom-center",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    }
    const showToastFunction = toastTypes[type] || toast;
    showToastFunction(msg, toastOptions);
}
export const TOAST_ACTION_TYPES = {
    SUCCESS: 'success',
    ERROR: 'error',
    WARNING: 'warning',
    INFO: 'info'
}