import { Outlet, useLocation } from 'react-router-dom';
import { Footer } from '../../components';
import { HeaderAdmin } from '../../components/Header';

export function LayoutAdmin() {
	const { pathname } = useLocation();
	
	return (
		<>
			{ !pathname.includes('/dashboard') && <HeaderAdmin /> }
			<Outlet />
			{ !pathname.includes('/dashboard') && <Footer /> }
		</>
	);
}