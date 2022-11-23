import { Route, Routes } from 'react-router-dom';
import { LayoutSuscriptor, Home, Posts, Profile, PostDetail } from '../../views';
import { NotFound } from '../../components';
import { routeParams, routes, subscriberRoutes } from '../types/routes.js';

export function SubscriberRouter() {
	return (
		<Routes>
			<Route path={ subscriberRoutes.home } element={ <LayoutSuscriptor /> }>
				
				<Route index element={ <Home /> } />
				<Route path={ routes.posts }>
					<Route index element={ <Posts /> } />
					<Route path={ routeParams.postTitle } element={ <PostDetail /> } />
				</Route>
				<Route path="collaborator" element={ <h1> Subscriber </h1> } />
				<Route path={ routeParams.userName } element={ <Profile /> } />
				
				<Route path="*" element={ <NotFound /> } />
			</Route>
		</Routes>
	);
}