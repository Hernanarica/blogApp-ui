import { Route, Routes } from "react-router-dom";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { PublicRoutes } from "./PublicRoutes";
import { Home, Login, Register, Dashboard, Profile, Layout } from "../views/index.js";

export function AppRouter() {
	return (
		<>
			<Routes>
				<Route path="/" element={ <Layout /> }>
					
					{/*Rutas publicas*/}
					<Route index element={ <Home /> } />
					<Route element={ <PublicRoutes /> }>
						<Route path="login" element={ <Login /> } />
						<Route path="register" element={ <Register /> } />
					</Route>
					
					{/*Rutas protegidas*/}
					<Route path="/dashboard" element={ <ProtectedRoutes/> }>
						<Route index element={ <Dashboard /> } />
						<Route path="profile" element={ <Profile /> } />
					</Route>
					
				</Route>
			</Routes>
		</>
	);
}