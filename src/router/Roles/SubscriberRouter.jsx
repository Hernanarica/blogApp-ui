import { Route, Routes } from 'react-router-dom';
import { LayoutSuscriptor } from '../../views/Layouts/LayoutSuscriptor';
import { Home, Posts } from '../../views';

export function SubscriberRouter() {
	return (
		<Routes>
			<Route path="/" element={ <LayoutSuscriptor /> }>
				
				<Route index element={ <Home /> } />
				<Route path="posts" element={ <Posts /> } />
				<Route path="collaborator" element={ <h1> Subscriber </h1> } />
				
				<Route path="*" element={ <h1>Not found 😓</h1> } />
			</Route>
		</Routes>
	);
}