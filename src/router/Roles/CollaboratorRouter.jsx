import { Route, Routes } from 'react-router-dom';
import { LayoutCollaborator } from '../../views/Layouts/LayoutCollaborator';
import { Home, Posts } from '../../views';
import { NotFound } from '../../components';

export function CollaboratorRouter() {
	return (
		<Routes>
			<Route path="/" element={ <LayoutCollaborator /> } >
				
				<Route index element={ <Home /> } />
				<Route path="posts" element={ <Posts /> } />
				<Route path="collaborator" element={ <h1> Collaborator </h1> } />
				
				<Route path="*" element={ <NotFound /> } />
			</Route>
		</Routes>
	);
}