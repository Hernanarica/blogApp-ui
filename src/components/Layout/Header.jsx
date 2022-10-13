import { useSelector }     from "react-redux";
import { NavbarProtected, NavbarPublic } from "../Header";

export function Header() {
	const { isAuthenticated } = useSelector(state => state.auth);
	
	return !isAuthenticated
		? <header className="p-4"> <NavbarPublic /> </header>
		: <header className="p-4"> <NavbarProtected /> </header>
}