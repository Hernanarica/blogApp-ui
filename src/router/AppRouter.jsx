import { Route, Routes, useLocation } from "react-router-dom";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { PublicRoutes } from "./PublicRoutes";
import { Home, Login, Register, Dashboard, Layout } from "../views";
import myRoute from '../types/routes.js';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

export function AppRouter() {
	const { isAuthenticated } = useSelector(state => state.auth);
	const { pathname } = useLocation();
	
	useEffect(() => {
		isAuthenticated && window.localStorage.setItem('pathname', pathname);
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
						<Route path={ myRoute.private.dashboard } element={ <Dashboard /> }>
							<Route index element={ <h1>Dashboard inicial</h1> } />
							<Route path={ myRoute.private.posts } element={ <h1>Mis Posts</h1> } />
							<Route path={ myRoute.private.users } element={ <h1>Mis Usuarios</h1> } />
						</Route>
					</Route>
					
				</Route>
			</Routes>
		</>
	);
}