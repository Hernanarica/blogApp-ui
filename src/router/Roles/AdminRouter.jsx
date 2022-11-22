import { Route, Routes } from 'react-router-dom';
import { Dashboard, Home, Posts, DashboardPosts, DashboardMain, LayoutAdmin, CreatePost } from '../../views';
import { NotFound } from '../../components';
import { adminRoutes } from '../types/routes.js';

export function AdminRouter() {
	return (
		<Routes>
			
			<Route path={ adminRoutes.home } element={ <LayoutAdmin /> }>
				<Route index element={ <Home /> } />
				<Route path={ adminRoutes.posts } element={ <Posts /> } />
				
				<Route path={ adminRoutes.dashboard.index } element={ <Dashboard /> }>
					<Route index element={ <DashboardMain /> } />
					
					<Route path={ adminRoutes.dashboard.posts.index }>
						<Route index element={ <DashboardPosts /> } />
						<Route path={ adminRoutes.dashboard.posts.create } element={ <CreatePost /> } />
					</Route>
					
					<Route path={ adminRoutes.dashboard.users } element={ <h1>Mis Usuarios</h1> } />
				</Route>
				
				<Route path="*" element={ <NotFound /> } />
			</Route>
			
		</Routes>
	);
}