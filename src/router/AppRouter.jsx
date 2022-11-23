import { Route, Routes } from "react-router-dom";
import { useSelector } from 'react-redux';
import { Home, Login, Register, Posts, Layout, PostDetail } from "../views";
import { AdminRouter, CollaboratorRouter, SubscriberRouter } from './Roles';
import { NotFound } from '../components';
import { routeParams, routes } from './types/routes.js';

export function AppRouter() {
	const { user: { credentials } } = useSelector(state => state);
	
	if (credentials?.role === 'admin') {
		console.log('Entra a admin 🚀');
		return <AdminRouter />;
	} else if (credentials?.role === 'collaborator') {
		console.log('Entra a collaborator 📚');
		return <CollaboratorRouter />;
	} else if (credentials?.role === 'subscriber') {
		console.log('Entra a subscriber 😎');
		return <SubscriberRouter />;
	}
	
	console.log('Entra a normal 😏');
	return (
		<>
			<Routes>
				
				<Route path={ routes.home } element={ <Layout /> }>
					<Route index element={ <Home /> } />
					<Route path={ routes.login } element={ <Login /> } />
					<Route path={ routes.register } element={ <Register /> } />
					<Route path={ routes.posts }>
						<Route index element={ <Posts /> } />
						<Route path={ routeParams.postTitle } element={ <PostDetail /> } />
					</Route>
					
					<Route path="*" element={ <NotFound /> } />
				</Route>
				
			</Routes>
		</>
	);
}