import { Route, Routes } from 'react-router-dom';
import { LayoutCollaborator, Home, Posts, Publications, Profile, PostDetail } from '../../views';
import { NotFound } from '../../components';
import { collaboratorsRoutes, routeParams, routes } from '../types/routes.js';

export function CollaboratorRouter() {
	return (
		<Routes>
			<Route path={ collaboratorsRoutes.home } element={ <LayoutCollaborator /> } >
				
				<Route index element={ <Home /> } />
				<Route path={ routes.posts }>
					<Route index element={ <Posts /> } />
					<Route path={ routeParams.postTitle } element={ <PostDetail /> } />
				</Route>
				<Route path="collaborator" element={ <h1> Collaborator </h1> } />
				<Route path={ routeParams.userName } element={ <Profile /> } />
				
				<Route path={ routeParams.userName }>
					<Route path={ collaboratorsRoutes.publications.index } element={ <Publications /> } />
				</Route>
				
				<Route path="*" element={ <NotFound /> } />
			</Route>
		</Routes>
	);
}