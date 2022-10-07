import { loginService } from "../../services/index.js";
import { login }        from "../slices/index.js";

export function loginThunk(userData) {
	return async (dispatch) => {
		const res = await loginService(userData);
		console.log(res);
		dispatch(login(res));
	};
}