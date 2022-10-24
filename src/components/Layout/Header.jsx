import { useSelector } from "react-redux";
import { NavbarProtected, NavbarPublic } from "../Header";

export function Header() {
	const { isAuthenticated } = useSelector(state => state.auth);
	
	return (
		<header className="bg-gray-800 text-white px-4 py-2">
			{ !isAuthenticated ? <NavbarPublic /> : <NavbarProtected /> }
		</header>
	)
}