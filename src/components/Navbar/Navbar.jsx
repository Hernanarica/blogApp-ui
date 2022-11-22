import { NavbarItem } from './NavbarItem.jsx';
import { navbarPublicRoutes } from '../../router/routes.js';

export function Navbar() {
	return navbarPublicRoutes.map(route => <NavbarItem key={ route.name } { ...route } /> )
}