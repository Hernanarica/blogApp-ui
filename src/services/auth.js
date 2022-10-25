import axios from "axios";

const authInstance = axios.create({
	baseURL: 'http://127.0.0.1:8000/api'
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