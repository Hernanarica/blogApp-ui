import { Outlet } from 'react-router-dom';
import { Sidebar } from '../components/Dashboard/Sidebar';

export function Dashboard() {
	return (
		<div className="flex">
			<Sidebar />
			<main className="flex-1">
				<Outlet />
			</main>
		</div>
	);
}