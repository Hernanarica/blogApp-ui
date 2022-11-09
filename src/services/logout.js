import { axiosUserLogoutInstance } from '../config/axiosConfig.js';
import { getCookie } from '../helpers/index.js';

export async function logoutService() {
	try {
		await axiosUserLogoutInstance.post('/logout', null, {
			headers: {
				Authorization: `Bearer ${ getCookie('token') }`
			}
		});
	} catch (err) {
		console.error(err);
	}
}