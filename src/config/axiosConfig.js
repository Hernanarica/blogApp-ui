import axios from 'axios';

export const axiosUserAuthInstance = axios.create({
	baseURL: import.meta.env.VITE_BASE_URL_API,
	headers: {
		'Content-Type': 'application/json'
	}
});

export const axiosUserRegisterInstance = axios.create({
	baseURL: import.meta.env.VITE_BASE_URL_API,
	headers: {
		'Content-Type': 'multipart/form-data'
	}
});

axiosUserRegisterInstance.interceptors.response.use(function (response) {
	return response.data;
}, function (err) {
	return err.response.data;
});

export const axiosUserLogoutInstance = axios.create({
	baseURL: import.meta.env.VITE_BASE_URL_API,
});