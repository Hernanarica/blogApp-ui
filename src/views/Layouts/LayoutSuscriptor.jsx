import { Outlet } from 'react-router-dom';
import { HeaderSubscriber } from '../../components/Header';
import { Footer } from '../../components';

export function LayoutSuscriptor() {
	return (
		<>
			<HeaderSubscriber />
			<Outlet />
			<Footer />
		</>
	);
}