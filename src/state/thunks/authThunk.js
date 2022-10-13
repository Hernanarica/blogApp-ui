import { loginService } from "../../services/index.js";
import { login }        from "../slices/index.js";
import { setCookie }    from "../../helpers/index.js";

export function loginThunk(userData) {
	return async (dispatch) => {
		const res = await loginService(userData);
		
		setCookie('access_token', res.access_token)
		
		dispatch(login(res));
	};
}