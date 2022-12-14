import { useState } from 'react';
import { useSelector } from "react-redux";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline/index.js';
import { NavbarProtected, NavbarPublic } from "../Header";
import { Avatar } from '../User/Avatar';

export function Header() {
	const { isAuthenticated } = useSelector(state => state.auth);
	const  [ isOpen, setIsOpen ] = useState(false);
	
	const handleMenu = () => {
		setIsOpen(!isOpen);
	};
	
	return (
		<header className="bg-gray-800 text-white px-4 py-2">
			<nav className="max-w-7xl md:mx-auto">
				<div className="md:hidden flex items-center justify-between">
					<button className="align-middle" onClick={ handleMenu }>
						{
							isOpen
								? <XMarkIcon className="w-10 h-10" />
								: <Bars3Icon className="w-10 h-10" />
						}
					</button>
					{
						isAuthenticated && <div className="relative"> <Avatar /> </div>
					}
				</div>
				
				<ul className={ `${ isOpen ? 'block' : 'hidden' } mt-2 space-y-2 md:flex md:items-center md:gap-3 md:mt-0 md:space-y-0` }>
					{ !isAuthenticated ? <NavbarPublic isOpen={ isOpen } /> : <NavbarProtected isOpen={ isOpen } /> }
				</ul>
				
			</nav>
		</header>
	)
}