import { useEffect }                from "react";
import { useDispatch } from "react-redux";
import { getCookie }                from "../helpers";
import { login }                    from "../state/slices/index.js";

export function AuthProvider({ children }) {
	const dispatch  = useDispatch();
	
	useEffect(() => {
		
		if (!getCookie('access-token')) return;
		
		const userCredentials = JSON.parse(getCookie('user-credentials'));
		
		dispatch(login(userCredentials));
		
	}, []);
	
	return (
		children
	);
}