import { SidebarItem } from './SidebarItem';

export function Sidebar() {
	return (
		<aside className="hidden min-h-[calc(100vh-58px)] md:flex md:w-64 md:flex-col">
			<nav className="flex flex-grow flex-col overflow-y-auto border-r border-gray-200 bg-gray-50 pt-5 pb-4">
				<div className="flex-grow">
					<div className="space-y-1">
						<SidebarItem />
					</div>
				</div>
			</nav>
		</aside>
	);
}