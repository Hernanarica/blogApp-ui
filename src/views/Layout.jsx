import { Outlet } from "react-router-dom";

export function Layout() {
	return (
		<>
			<header>Mi header 2</header>
			<main>
				<Outlet />
			</main>
			<footer>Mi footer</footer>
		</>
	);
}