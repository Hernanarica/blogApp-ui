import { loginService } from "../../services/index.js";
import { login } from "../slices/index.js";
import { setCookie } from "../../helpers/index.js";

export function loginThunk(userData, setError) {
	return async (dispatch) => {
		const data = await loginService(userData);
		
		if (data.status === 'error') {
			return setError('credentialsError', { message: data.message });
		}
		
		const { data: credentials, token } = data;
		
		setCookie('token', token);
		setCookie('credentials', JSON.stringify(credentials));
		
		dispatch(login(credentials));
	};
}