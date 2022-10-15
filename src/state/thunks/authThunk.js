import { loginService } from "../../services/index.js";
import { login }        from "../slices/index.js";
import { setCookie }    from "../../helpers/index.js";

export function loginThunk(userData) {
	return async (dispatch) => {
		const { data, access_token } = await loginService(userData);
		
		setCookie('access-token', access_token);
		setCookie('user-credentials', JSON.stringify(data));
		
		dispatch(login(data));
	};
}