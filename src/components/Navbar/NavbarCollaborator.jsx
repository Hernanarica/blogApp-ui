import { NavbarItem } from './NavbarItem.jsx';
import { Avatar } from '../User/Avatar.jsx';
import { navbarCollaboratorRoutes } from '../../router/routes.js';

export function NavbarCollaborator() {
	return (
		<>
			{
				navbarCollaboratorRoutes.map(route => <NavbarItem key={ route.name } { ...route } /> )
			}
			
			<div className="relative hidden md:block ml-auto">
				<Avatar />
			</div>
		</>
	);
}