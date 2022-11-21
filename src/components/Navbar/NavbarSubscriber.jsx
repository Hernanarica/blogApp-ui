import { NavbarItem } from './NavbarItem.jsx';
import { Avatar } from '../User/Avatar.jsx';
import { routes } from '../../router/routes.js';

export function NavbarSubscriber() {
	const { subscriberRoutes } = routes;
	
	return (
		<>
			{
				subscriberRoutes.map(route => <NavbarItem key={ route.name } { ...route } /> )
			}
			
			<div className="relative hidden md:block ml-auto">
				<Avatar />
			</div>
		</>
	);
}