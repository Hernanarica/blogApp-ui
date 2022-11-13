import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCookie } from "../helpers";
import { login, setCredentials } from "../state/slices";

export function AuthProvider({ children }) {
	const dispatch  = useDispatch();
	
	useEffect(() => {
		
		if (!getCookie('token')) return;
		
		// dispatch(login()); Medio al pedo esto ya que en el estado inicial el AuthSlice chequea si es true o false
		dispatch(login());
		const userCredentials = JSON.parse(getCookie('credentials'));
		
		dispatch(setCredentials(userCredentials));
		
	}, []);
	
	return (
		children
	);
}