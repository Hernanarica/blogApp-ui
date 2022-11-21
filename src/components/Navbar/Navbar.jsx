import { routes } from '../../router/routes.js';
import { NavbarItem } from './NavbarItem.jsx';

export function Navbar() {
	const { publicRoutes } = routes;
	
	return publicRoutes.map(route => <NavbarItem key={ route.name } { ...route } /> )
}