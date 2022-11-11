import { loginService } from "../../services/index.js";
import { login } from "../slices/index.js";
import { notifyError, notifyLoading, notifySuccess, setCookie } from "../../helpers";

export function loginThunk(userData) {
	return async (dispatch) => {
		const data = await loginService(userData);

		notifyLoading('Compobando credenciales...');

		if (data.status === 'error') return notifyError(data.message);

		const { data: credentials, token } = data;

		setCookie('token', token);
		setCookie('credentials', JSON.stringify(credentials));

		dispatch(login(credentials));

		notifySuccess('Bienvenido!');
	};
}