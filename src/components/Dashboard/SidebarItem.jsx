import { NavLink } from 'react-router-dom';
import { NewspaperIcon, UsersIcon } from '@heroicons/react/24/outline/index.js';

const dashboardRoutes = [
	{
		name: 'Posts',
		path: 'posts',
		end: '/dashboard',
		icon: <NewspaperIcon className="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" />
	},
	{
		name: 'Usuarios',
		path: 'usuarios',
		end: '/dashboard',
		icon: <UsersIcon className="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" />
	},
];

export function SidebarItem() {
	return (
		<>
			{
				dashboardRoutes.map(routeItem => (
					<NavLink
						key={ routeItem.name }
						to={ routeItem.path }
						className={ ({ isActive }) => `group border-l-4 py-2 px-3 flex items-center text-sm
										${isActive ? 'border-purple-600' : 'border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-50'}
									`}
					>
						{ routeItem.icon }
						{ routeItem.name }
					</NavLink>
				))
			}
		</>
	);
}