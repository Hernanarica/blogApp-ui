import axios from "axios";
import { getCookie } from "../helpers/index.js";

export async function logoutService() {
	try {
		const url = `${ import.meta.env.VITE_BASE_URL_API }/logout`
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