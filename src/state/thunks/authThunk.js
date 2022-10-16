import { loginService } from "../../services/index.js";
import { login } from "../slices/index.js";
import { setCookie } from "../../helpers/index.js";

export function loginThunk(userData, setError) {
	return async (dispatch) => {
		const data = await loginService(userData);
		
		if (data.status === 'error') {
			return setError('credentialsError', { message: data.message });
		}
		
		setCookie('token', data.token);
		setCookie('credentials', JSON.stringify(data.data));
		
		dispatch(login(data.data));
	};
}