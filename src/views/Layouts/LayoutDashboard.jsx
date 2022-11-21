import { Outlet } from 'react-router-dom';

export function LayoutDashboard() {
	return (
		<main>
			<Outlet />
		</main>
	);
}