import { NavbarItem } from './NavbarItem.jsx';
import { Avatar } from '../User/Avatar.jsx';
import { navbarAdminRoutes } from '../../router/routes.js';

export function NavbarAdmin() {
	return (
		<>
			{
				navbarAdminRoutes.map(route => <NavbarItem key={ route.name } { ...route } /> )
			}
			
			<div className="relative hidden md:block ml-auto">
				<Avatar />
			</div>
		</>
	);
}