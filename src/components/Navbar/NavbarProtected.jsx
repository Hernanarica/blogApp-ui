import { NavbarItem } from "./NavbarItem.jsx";
import { routes } from "../../router/routes.js";
import { Avatar } from '../User/Avatar.jsx';

export function NavbarProtected() {
	const { protectedRoutes } = routes;
	
	return (
		<>
			{
				protectedRoutes.map(route => <NavbarItem key={ route.name } { ...route } /> )
			}
			
			<div className="relative hidden md:block ml-auto">
				<Avatar />
			</div>
			
		</>
	);
}