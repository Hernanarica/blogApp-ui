import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline/index.js';
import { Avatar } from '../User/Avatar.jsx';
import { NavbarAdmin } from '../Navbar/NavbarAdmin.jsx';

export function HeaderAdmin() {
	const  [ isOpen, setIsOpen ] = useState(false);
	
	const handleMenu = () => {
		setIsOpen(!isOpen);
	};
	
	return (
		<header className="relative px-4 py-2 w-full bg-gray-800 text-white">
			<nav className="max-w-7xl sm:px-8 md:mx-auto">
				<div className="md:hidden flex items-center justify-between">
					<button className="align-middle" onClick={ handleMenu }>
						{
							isOpen
								? <XMarkIcon className="w-10 h-10" />
								: <Bars3Icon className="w-10 h-10" />
						}
					</button>
					<div className="relative">
						<Avatar />
					</div>
				</div>
				<ul className={ `absolute top-[56px] left-0 w-full h-fit bg-gray-800 text-white px-4 py-3 ${ isOpen ? 'block' : 'hidden' } space-y-2 md:static md:px-0 md:py-0 md:flex md:items-center md:gap-3 md:space-y-0 z-[2]` }>
					<NavbarAdmin />
				</ul>
			</nav>
		</header>
	);
}