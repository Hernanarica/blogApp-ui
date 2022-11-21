import { notifyError, notifyLoading, notifySuccess, setCookie } from "../../helpers";
import { loginService } from "../../services";
import { login, setCredentials } from "../slices";

export function loginThunk(userData) {
	return async (dispatch) => {
		try {
			notifyLoading('Comprobando credenciales...');
			
			const data = await loginService(userData);
	
			if (data.status === 'error') return notifyError(data.message);
	
			const { data: credentials, token } = data;
			
			setCookie('token', token);
			dispatch(login());
			
			setCookie('credentials', JSON.stringify(credentials));
			dispatch(setCredentials(credentials));
	
			notifySuccess('Bienvenido!');
		} catch (err) {
			throw new Error(`${ err }`);
		}
	};
}