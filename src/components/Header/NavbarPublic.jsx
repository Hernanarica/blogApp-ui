import { NavbarItem } from "./NavbarItem.jsx";
import { routes } from "../../router/routes.js";

export function NavbarPublic() {
	const { publicRoutes } = routes;
	
	return publicRoutes.map(route => <NavbarItem key={ route.name } { ...route } /> )
}