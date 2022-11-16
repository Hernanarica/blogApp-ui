import { Route, Routes, useLocation } from "react-router-dom";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { PublicRoutes } from "./PublicRoutes";
import { Home, Login, Register, Dashboard, PostsDashboard } from "../views";
import myRoute from '../types/routes.js';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Main } from '../views/Dashboard/Main';
import { CreatePost } from '../views/Posts/CreatePost';
import { Layout, LayoutDashboard } from '../views/Layouts';
import { Posts } from '../views/Posts';

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
					<Route path="posts" element={ <Posts /> } />
					
					<Route element={ <PublicRoutes /> }>
						<Route path={ myRoute.public.login } element={ <Login /> } />
						<Route path={ myRoute.public.register } element={ <Register /> } />
					</Route>
				</Route>

				<Route path="/" element={ <LayoutDashboard /> }>
					{/* Private myRoute */}
					<Route element={ <ProtectedRoutes/> }>
						<Route path={ myRoute.private.dashboard } element={ <Dashboard /> }>
							<Route index element={ <Main /> } />
							<Route path="posts">
								<Route index element={ <PostsDashboard /> } />
								<Route path="crear" element={ <CreatePost /> } />
							</Route>
							<Route path={ myRoute.private.users } element={ <h1>Mis Usuarios</h1> } />
						</Route>
					</Route>
				</Route>
				
			</Routes>
		</>
	);
}