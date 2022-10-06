import { NavLink } from "react-router-dom";

export function Header() {
	return (
		<header className="p-4">
			<nav>
				<ul className="flex items-center gap-4">
					<li>
						<NavLink to="/">Home</NavLink>
					</li>
					<li>
						<NavLink to="/login">Login</NavLink>
					</li>
					<li>
						<NavLink to="/register">Register</NavLink>
					</li>
					<li>
						<NavLink to="/profile">Profile</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
}