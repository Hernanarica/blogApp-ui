import { Outlet } from 'react-router-dom';
import { Footer } from '../../components';
import { HeaderCollaborators } from '../../components/Header';

export function LayoutCollaborator() {
	return (
		<>
			<HeaderCollaborators />
			<Outlet />
			<Footer />
		</>
	);
}