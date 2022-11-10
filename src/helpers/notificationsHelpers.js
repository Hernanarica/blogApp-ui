import toast from 'react-hot-toast';

export const notifySuccess = (message) => {
	removeNotifications();
	toast.success(message);
};

export const notifyLoading = (message) => {
	removeNotifications();
	toast.loading(message);
};

export const notifyError = (message) => {
	removeNotifications();
	toast.error(message);
};

export const removeNotifications = () => {
	toast.remove();
};