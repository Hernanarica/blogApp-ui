import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';

export function LayoutDashboard() {
	return (
		<main>
			<Toaster />
			<Outlet />
		</main>
	);
}