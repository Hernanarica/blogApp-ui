import { useEffect }                from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCookie }                from "../helpers";
import { login }                    from "../state/slices/index.js";

export function AuthProvider({ children }) {
	const { isAuthenticated } = useSelector(state => state.auth);
	const dispatch  = useDispatch();
	
	useEffect(() => {
		
		if (!getCookie('access_token')) return;
		
		dispatch(login(getCookie('access_token')));
		
	}, []);
	
	return (
		children
	);
}