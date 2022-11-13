import { Route, Routes, useLocation } from "react-router-dom";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { PublicRoutes } from "./PublicRoutes";
import { Home, Login, Register, Dashboard, Layout } from "../views";
import myRoute from '../types/routes.js';
import { useEffect } from 'react';

export function AppRouter() {
	const { pathname } = useLocation();
	
	useEffect(() => {
		window.localStorage.setItem('pathname', pathname);
	}, [ pathname ]);
	
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
						<Route path="/dashboard" element={ <Dashboard /> }>
							<Route index element={ <h1>Dashboard inicial</h1> } />
							<Route path="posts" element={ <h1>Mis Posts</h1> } />
							<Route path="usuarios" element={ <h1>Mis Usuarios</h1> } />
						</Route>
					</Route>
					
				</Route>
			</Routes>
		</>
	);
}