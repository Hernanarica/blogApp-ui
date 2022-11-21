import { Outlet } from 'react-router-dom';
import { Footer } from '../../components';
import { HeaderAdmin } from '../../components/Header';

export function LayoutAdmin() {
	return (
		<>
			<HeaderAdmin />
			<Outlet />
			<Footer />
		</>
	);
}