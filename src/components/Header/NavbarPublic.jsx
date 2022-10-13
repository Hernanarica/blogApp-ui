import { routes }     from "../../router/routes.js";
import { NavbarItem } from "./NavbarItem.jsx";

export function NavbarPublic() {
	const { publicRoutes } = routes;
	
	return (
		<nav>
			<ul className="flex items-center gap-4">
				{
					publicRoutes.map(route => <NavbarItem key={ route.name } { ...route } /> )
				}
			</ul>
		</nav>
	);
}