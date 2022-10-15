import { useEffect }                from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCookie }                from "../helpers";
import { login }                    from "../state/slices/index.js";
import axios                        from "axios";

export function AuthProvider({ children }) {
	const { isAuthenticated } = useSelector(state => state.auth);
	const dispatch  = useDispatch();
	
	useEffect(() => {
		
		if (!getCookie('access_token')) return;
		
		axios.get('http://127.0.0.1:8000/api/user', {
			headers: {
				'Authorization': `Bearer ${ getCookie('access_token') }`
			}
		}).then(({ data }) => {
			if (data.status !== 'success') return;
			
			dispatch(login(data.data));
		});
		
	}, []);
	
	return (
		children
	);
}