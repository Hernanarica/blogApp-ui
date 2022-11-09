import axios from "axios";
import { createCredentialsAdapter } from '../adapters/createCredentialsAdapter.js';

const authInstance = axios.create({
	baseURL: import.meta.env.VITE_BASE_URL_API
});

authInstance.interceptors.response.use(function (response) {
	return {
		data: createCredentialsAdapter(response.data.data),
		status: response.data.status,
		token: response.data.token
	};
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