import { Route, Routes } from "react-router-dom";

export function AppRouter() {
	return (
		<Routes>
			<Route path="/" element={ <h1>Home</h1> } />
			<Route path="/login" element={ <h1>Login</h1> } />
			<Route path="/logout" element={ <h1>Logout</h1> } />
		</Routes>
	);
}