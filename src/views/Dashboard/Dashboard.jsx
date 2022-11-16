import { Outlet } from 'react-router-dom';
import { Sidebar } from '../../components/Dashboard/Sidebar.jsx';

export function Dashboard() {
	return (
		<div className="flex min-h-screen">
			<Sidebar />
			<main className="flex-1 px-2 py-5">
				<Outlet />
			</main>
		</div>
	);
}