import { Route, Routes } from "react-router-dom";
import { Home, Login, Register, Posts } from "../views";
import { useSelector } from 'react-redux';
import { Layout } from '../views/Layouts';
import { AdminRouter, CollaboratorRouter, SubscriberRouter } from './Roles';

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
				
				<Route path="/" element={ <Layout /> }>
					<Route index element={ <Home /> } />
					<Route path="posts" element={ <Posts /> } />
					<Route path="iniciar-sesion" element={ <Login /> } />
					<Route path="registrate" element={ <Register /> } />
					
					<Route path="*" element={ <h1>Not found 😓</h1> } />
				</Route>
				
			</Routes>
		</>
	);
}