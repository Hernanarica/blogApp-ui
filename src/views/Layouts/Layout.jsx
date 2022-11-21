import { Outlet } from "react-router-dom";
import { Footer, Header } from '../../components';

export function Layout() {
	return (
		<>
			<Header />
			<main>
				<Outlet />
			</main>
			<Footer />
		</>
	);
}