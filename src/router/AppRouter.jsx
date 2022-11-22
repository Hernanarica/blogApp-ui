import { Route, Routes } from "react-router-dom";
import { Home, Login, Register, Posts } from "../views";
import { useSelector } from 'react-redux';
import { Layout } from '../views/Layouts';
import { AdminRouter, CollaboratorRouter, SubscriberRouter } from './Roles';
import { NotFound } from '../components';
import { routes } from './types/routes.js';

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
					<Route path={ routes.posts } element={ <Posts /> } />
					
					<Route path="*" element={ <NotFound /> } />
				</Route>
				
			</Routes>
		</>
	);
}