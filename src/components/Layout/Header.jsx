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
		<header className="relative px-4 py-2 w-full bg-gray-800 text-white">
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
				
				<ul className={ `absolute top-[56px] left-0 w-full h-fit bg-gray-800 text-white px-4 py-3 ${ isOpen ? 'block' : 'hidden' } space-y-2 md:static md:px-0 md:py-0 md:flex md:items-center md:gap-3 md:space-y-0 z-[2]` }>
					{ !isAuthenticated ? <NavbarPublic isOpen={ isOpen } /> : <NavbarProtected isOpen={ isOpen } /> }
				</ul>
				
			</nav>
		</header>
	)
}