import { NavLink } from "react-router-dom";

export function NavbarItem({ path, name, end }) {
	return (
		<li>
			<NavLink to={ path } end={ end } className={ ({ isActive}) =>
				`p-2 block rounded ${ isActive
					? 'bg-gray-900 text-white font-medium md:bg-transparent md:rounded-none md:border-b-2 md:border-b-indigo-500'
					: 'text-gray-400 hover:bg-gray-700 hover:text-white md:hover:bg-transparent md:hover:text-gray-400 md:border-b-2 md:border-b-transparent md:rounded-none md:hover:border-b-2 md:hover:border-b-gray-400'
			}`}>
				{ name }
			</NavLink>
		</li>
	);
}