import { Route, Routes } from 'react-router-dom';
import { LayoutSuscriptor, Home, Posts, Profile } from '../../views';
import { NotFound } from '../../components';
import { routeParams, subscriberRoutes } from '../types/routes.js';

export function SubscriberRouter() {
	return (
		<Routes>
			<Route path={ subscriberRoutes.home } element={ <LayoutSuscriptor /> }>
				
				<Route index element={ <Home /> } />
				<Route path={ subscriberRoutes.posts } element={ <Posts /> } />
				<Route path="collaborator" element={ <h1> Subscriber </h1> } />
				<Route path={ routeParams.userName } element={ <Profile /> } />
				
				<Route path="*" element={ <NotFound /> } />
			</Route>
		</Routes>
	);
}