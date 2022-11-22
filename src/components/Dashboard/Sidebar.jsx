import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ArrowLeftOnRectangleIcon, ArrowUturnLeftIcon } from '@heroicons/react/24/outline/index.js';
import { SidebarItem } from './SidebarItem';
import { logoutThunk } from '../../state/thunks';

export function Sidebar() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	
	const handleLogout = () => {
		dispatch(logoutThunk());
		
		navigate('/');
	};
	
	return (
		<aside className="flex flex-col justify-between h-screen bg-gray-50 lg:min-h-[calc(100vh-58px)] lg:flex lg:w-64 lg:flex-col">
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
							<span className="hidden lg:inline-block">Ir al blog</span>
						</Link>
					</li>
					<button className="group w-full py-2 px-3 flex items-center gap-3 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50" onClick={ handleLogout }>
						<ArrowLeftOnRectangleIcon className="w-5 h-5" />
						<span className="hidden lg:inline-block">Logout</span>
					</button>
				</ul>
			</div>
		</aside>
	);
}