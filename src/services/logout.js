import axios from "axios";
import { getCookie } from "../helpers/index.js";

export async function logoutService() {
	try {
		const url = 'http://127.0.0.1:8000/api/logout'
		const config = {
			headers: {
				Authorization: `Bearer ${ getCookie('token') }`
			}
		}
		
		await axios.post(url, null, config);
	} catch (err) {
		return err.response.data.errors;
	}
}