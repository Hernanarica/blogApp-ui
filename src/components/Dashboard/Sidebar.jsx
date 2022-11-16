import { SidebarItem } from './SidebarItem';
import { LogoutBtn } from '../Buttons';

export function Sidebar() {
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
				<LogoutBtn />
			</div>
		</aside>
	);
}