import axios from "axios";

const authInstance = axios.create({
	baseURL: 'http://127.0.0.1:8000/api'
});

export async function loginService(userData) {
	try {
		const { data } = await authInstance.post('/login', { ...userData }, { method: 'POST' });
		return data;
		
	} catch (err) {
		return err.response.data.errors;
	}
}