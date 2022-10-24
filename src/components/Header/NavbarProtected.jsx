import { useState } from 'react';
import { useDispatch } from "react-redux";
import { ArrowLeftOnRectangleIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline/index.js';
import { NavbarItem } from "./NavbarItem.jsx";
import { logout } from "../../state/slices/index.js";
import { deleteCookie } from "../../helpers/index.js";
import { logoutService } from "../../services/index.js";
import { routes } from "../../router/routes";

export function NavbarProtected() {
	const  [ isOpen, setIsOpen ] = useState(false);
	const dispatch = useDispatch();
	const { protectedRoutes } = routes;
	
	const handleLogout = async () => {
		dispatch(logout());
		
		await logoutService();
		
		deleteCookie('token');
		deleteCookie('credentials');
	};
	
	const handleMenu = () => {
		setIsOpen(!isOpen);
	};
	
	return (
		<nav className="">
			
			<div className="md:hidden">
				<button className="align-middle" onClick={ handleMenu }>
					{
						isOpen
							? <XMarkIcon className="w-10 h-10" />
							: <Bars3Icon className="w-10 h-10" />
					}
				</button>
			</div>
			
			<ul className={ `${ isOpen ? 'block' : 'hidden' } mt-2 space-y-2 md:flex md:items-center md:gap-3 md:mt-0 md:space-y-0` }>
				{
					protectedRoutes.map(route => <NavbarItem key={ route.name } { ...route } /> )
				}
				
				<button className="flex items-center gap-1 px-2 py-2 bg-red-500 text-white text-sm rounded" onClick={ handleLogout }>
					Logout
					<span>
						<ArrowLeftOnRectangleIcon className="w-5 h-5" />
					</span>
				</button>
				
			</ul>
		</nav>
	);
}