import { NavLink } from "react-router-dom";

export function NavbarItem({ path, name }) {
	return (
		<li>
			<NavLink to={ path }>{ name}</NavLink>
		</li>
	);
}