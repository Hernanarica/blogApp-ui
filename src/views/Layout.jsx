import { Outlet } from "react-router-dom";
import { Footer, Header } from '../components';
import { Toaster } from 'react-hot-toast';

export function Layout() {
	return (
		<>
			<Toaster />
			<Header />
			<main>
				<Outlet />
			</main>
			<Footer />
		</>
	);
}