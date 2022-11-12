import { NavLink, Outlet } from 'react-router-dom';
import { NewspaperIcon, UsersIcon } from '@heroicons/react/24/outline/index.js';
import myRoute from '../types/routes.js';

export function Dashboard() {
	return (
		<div className="flex">
			<aside className="hidden min-h-[calc(100vh-58px)] md:flex md:w-64 md:flex-col">
				<nav className="flex flex-grow flex-col overflow-y-auto border-r border-gray-200 bg-gray-50 pt-5 pb-4">
					<div className="flex-grow">
						<div className="space-y-1">
							<NavLink
								to="posts"
								className={ ({ isActive }) => `group border-l-4 py-2 px-3 flex items-center text-sm
									${isActive ? 'border-purple-600' : 'border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-50'}
								`}
							>
								<NewspaperIcon className="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" />
								Posts
							</NavLink>
							<NavLink
								to="users"
								className={ ({ isActive }) => `group border-l-4 py-2 px-3 flex items-center text-sm
									${isActive ? 'border-purple-600' : 'border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-50'}
								`}
							>
								<UsersIcon className="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" />
								Usuarios
							</NavLink>
						</div>
					</div>
					<div className="block w-full flex-shrink-0">
						<a
							href="#"
							className="group flex items-center border-l-4 border-transparent py-2 px-3 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
						>
							<svg
								className="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-500"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
								/>
							</svg>
							Logout
						</a>
					</div>
				</nav>
			</aside>
			<main className="flex-1">
				<Outlet />
			</main>
		</div>
	);
}