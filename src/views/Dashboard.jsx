import { NavLink, Outlet } from 'react-router-dom';
import { NewspaperIcon, UsersIcon } from '@heroicons/react/24/outline/index.js';
import { Posts } from './Dashboard/Posts.jsx';
import { Users } from './Dashboard/Users.jsx';

const dashboardRoutes = [
	{
		name: 'Posts',
		path: 'posts',
		end: '/dashboard',
		components: Posts,
		icon: <NewspaperIcon className="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" />
	},
	{
		name: 'Usuarios',
		path: 'usuarios',
		end: '/dashboard',
		components: Users,
		icon: <UsersIcon className="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" />
	},
];

export function Dashboard() {
	return (
		<div className="flex">
			<aside className="hidden min-h-[calc(100vh-58px)] md:flex md:w-64 md:flex-col">
				<nav className="flex flex-grow flex-col overflow-y-auto border-r border-gray-200 bg-gray-50 pt-5 pb-4">
					<div className="flex-grow">
						<div className="space-y-1">
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
						</div>
					</div>
				</nav>
			</aside>
			<main className="flex-1">
				<Outlet />
			</main>
		</div>
	);
}