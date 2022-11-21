import { routes } from '../../router/routes.js';
import { NavbarItem } from './NavbarItem.jsx';
import { Avatar } from '../User/Avatar.jsx';

export function NavbarAdmin() {
	const { adminRoutes } = routes;
	
	return (
		<>
			{
				adminRoutes.map(route => <NavbarItem key={ route.name } { ...route } /> )
			}
			
			<div className="relative hidden md:block ml-auto">
				<Avatar />
			</div>
		</>
	);
}