import { Route, Routes } from "react-router-dom";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { PublicRoutes } from "./PublicRoutes";
import { Home, Login, Register, Dashboard, Profile, Layout } from "../views/index.js";
import myRoute from '../types/routes.js';

export function AppRouter() {
	return (
		<>
			<Routes>
				<Route path="/" element={ <Layout /> }>
					
					{/* Public myRoute */}
					<Route index element={ <Home /> } />
					<Route element={ <PublicRoutes /> }>
						<Route path={ myRoute.public.login } element={ <Login /> } />
						<Route path={ myRoute.public.register } element={ <Register /> } />
					</Route>
					
					{/* Private myRoute */}
					<Route path={ myRoute.private.dashboard } element={ <ProtectedRoutes/> }>
						<Route index element={ <Dashboard /> } />
						<Route path={ myRoute.private.profile } element={ <Profile /> } />
					</Route>
					
				</Route>
			</Routes>
		</>
	);
}