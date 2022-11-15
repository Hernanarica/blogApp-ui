import { Outlet, useLocation } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import { Footer, Header } from '../../components';

export function Layout() {
	const { pathname } = useLocation();
	
	return (
		<>
			<Header />
			<main>
				<Toaster />
				<Outlet />
			</main>
			{ !pathname.includes('/dashboard') && <Footer /> }
		</>
	);
}