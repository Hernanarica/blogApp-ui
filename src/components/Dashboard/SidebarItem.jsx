import { NavLink } from 'react-router-dom';
import { HomeIcon, NewspaperIcon, UsersIcon } from '@heroicons/react/24/outline/index.js';
import { Dashboard, Home, PostsDashboard, Users } from '../../views';

const dashboardRoutes = [
	{
		name: 'Dashboard',
		path: '/dashboard',
		end: '/dashboard',
		component: <Dashboard />,
		icon: <HomeIcon className="text-gray-400 group-hover:text-gray-500 flex-shrink-0 h-6 w-6" />
	},
	{
		name: 'Posts',
		path: 'posts',
		end: '/dashboard',
		component: <PostsDashboard />,
		icon: <NewspaperIcon className="text-gray-400 group-hover:text-gray-500 flex-shrink-0 h-6 w-6" />
	},
	{
		name: 'Usuarios',
		path: 'usuarios',
		end: '/dashboard',
		component: <Users />,
		icon: <UsersIcon className="text-gray-400 group-hover:text-gray-500 flex-shrink-0 h-6 w-6" />
	},
];

export function SidebarItem() {
	return (
		<>
			{
				dashboardRoutes.map(routeItem => (
					<li key={ routeItem.name }>
						<NavLink
							to={ routeItem.path }
							end={ routeItem.end }
							className={ ({ isActive }) => `group border-l-4 py-2 px-3 flex items-center gap-3 text-sm
											${isActive ? 'border-purple-600' : 'border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-50'}
										`}
						>
							{ routeItem.icon }
							<span className="hidden lg:inline-block">{ routeItem.name }</span>
						</NavLink>
					</li>
				))
			}
		</>
	);
}