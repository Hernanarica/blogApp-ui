import { notifyError, notifyLoading, notifySuccess, setCookie } from "../../helpers";
import { loginService } from "../../services";
import { login, setCredentials } from "../slices";

export function loginThunk(userData) {
	return async (dispatch) => {
		try {
			notifyLoading('Comprobando credenciales...');
			
			const data = await loginService(userData);

			if (data.status === 'error') {
				notifyError(data.message);
				return data.status;
			}

			const { user, token } = data;

			setCookie('token', token);
			dispatch(login());

			setCookie('user', JSON.stringify(user));
			dispatch(setCredentials(user));

			notifySuccess('Bienvenido!');
		} catch (err) {
			throw new Error(`${ err }`);
		}
	};
}