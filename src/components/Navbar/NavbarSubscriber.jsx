import { NavbarItem } from './NavbarItem.jsx';
import { Avatar } from '../User/Avatar.jsx';
import { navbarSubscriberRoutes } from '../../router/routes.js';

export function NavbarSubscriber() {
	return (
		<>
			{
				navbarSubscriberRoutes.map(route => <NavbarItem key={ route.name } { ...route } /> )
			}
			
			<div className="relative hidden md:block ml-auto">
				<Avatar />
			</div>
		</>
	);
}