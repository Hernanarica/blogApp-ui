import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline/index.js';
import { NavbarItem } from "./NavbarItem.jsx";
import { routes } from "../../router/routes.js";

export function NavbarPublic() {
	const  [ isOpen, setIsOpen ] = useState(false);
	const { publicRoutes } = routes;
	
	const handleMenu = () => {
		setIsOpen(!isOpen);
	};
	
	return (
		<nav>
			
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
					publicRoutes.map(route => <NavbarItem key={ route.name } { ...route } /> )
				}
			</ul>
			
		</nav>
	);
}