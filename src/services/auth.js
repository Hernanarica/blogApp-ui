import axios from "axios";

const authInstance = axios.create({
	baseURL: import.meta.env.VITE_BASE_URL_API
});

authInstance.interceptors.response.use(function (response) {
	return response.data;
}, function (error) {
	throw new Error(error);
});

export async function loginService(userData) {
	try {
		return await authInstance.post('/login', { ...userData }, { method: 'POST' });
	} catch (err) {
		throw new Error(err);
	}
}