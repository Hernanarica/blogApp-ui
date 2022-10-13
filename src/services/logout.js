import axios         from "axios";
import { getCookie } from "../helpers/index.js";

const axiosInstance = axios.create({
	baseURL: 'http://127.0.0.1:8000/api',
	headers: {
		Authorization: `Bearer ${ getCookie('access_token') }`
	}
});

export async function logoutService(userData) {
	try {
		const res = await axiosInstance.post('/logout');
		console.log(res);
	} catch (err) {
		return err.response.data.errors;
	}
}