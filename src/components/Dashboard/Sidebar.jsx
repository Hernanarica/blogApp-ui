import { SidebarItem } from './SidebarItem';
import { ArrowLeftOnRectangleIcon, ArrowUturnLeftIcon } from '@heroicons/react/24/outline/index.js';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logoutThunk } from '../../state/thunks/logoutThunk.js';

export function Sidebar() {
	const dispatch = useDispatch();
	
	const handleLogout = () => {
		dispatch(logoutThunk());
		
		window.localStorage.removeItem('pathname');
	};
	
	return (
		<aside className="hidden min-h-[calc(100vh-58px)] bg-gray-50 md:flex md:w-64 md:flex-col">
			<nav className="flex flex-grow flex-col overflow-y-auto border-r border-gray-200 pt-5 pb-4">
				<div className="flex-grow">
					<ul className="space-y-1">
						<SidebarItem />
					</ul>
				</div>
			</nav>
			<div className="pl-2 mb-4">
				<ul className="space-y-1">
					<li>
						<Link to="/" className="group py-2 px-3 flex items-center gap-3 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50">
							<ArrowUturnLeftIcon className="w-5 h-5" />
							Ir al blog
						</Link>
					</li>
					<button className="group w-full py-2 px-3 flex items-center gap-3 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50" onClick={ handleLogout }>
						<ArrowLeftOnRectangleIcon className="w-5 h-5" />
						Logout
					</button>
				</ul>
			</div>
		</aside>
	);
}