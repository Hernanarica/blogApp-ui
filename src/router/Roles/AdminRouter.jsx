import { Route, Routes } from 'react-router-dom';
import { Dashboard, Home, Posts, PostsDashboard } from '../../views';
import { LayoutAdmin } from '../../views/Layouts/LayoutAdmin';
import { Main } from '../../views/Dashboard/Main.jsx';
import { CreatePost } from '../../views/Posts/CreatePost.jsx';
import { NotFound } from '../../components';

export function AdminRouter() {
	return (
		<Routes>
			
			<Route path="/" element={ <LayoutAdmin /> }>
				<Route index element={ <Home /> } />
				<Route path="posts" element={ <Posts /> } />
				
				<Route path="/dashboard" element={ <Dashboard /> }>
					
					<Route index element={ <Main /> } />
					<Route path="posts">
						<Route index element={ <PostsDashboard /> } />
						<Route path="crear" element={ <CreatePost /> } />
					</Route>
					<Route path="usuarios" element={ <h1>Mis Usuarios</h1> } />
					
				</Route>
				
				<Route path="*" element={ <NotFound /> } />
			</Route>
			
		</Routes>
	);
}