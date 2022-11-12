import { Outlet, useLocation } from "react-router-dom";
import { Footer, Header } from '../components';
import { Toaster } from 'react-hot-toast';

export function Layout() {
	const { pathname } = useLocation();
	
	return (
		<>
			<Header />
			<main>
				<Toaster />
				<Outlet />
			</main>
			{ pathname !== '/dashboard' && <Footer /> }
		</>
	);
}