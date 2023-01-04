import { createCredentialsAdapter } from '../adapters/createCredentialsAdapter.js';
import { axiosUserAuthInstance } from '../config';

axiosUserAuthInstance.interceptors.response.use(function (response) {
	if (response.data.status === 'error') {
		return response.data;
	}
	
	return {
		user: createCredentialsAdapter(response.data.user),
		status: response.data.status,
		token: response.data.token
	};
}, function (error) {
	console.error(error);
});

export async function loginService(userData) {
	try {
		return await axiosUserAuthInstance.post('/login', { ...userData });
	} catch (err) {
		console.error(err);
	}
}