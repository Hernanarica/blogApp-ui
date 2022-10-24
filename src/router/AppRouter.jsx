import { Route, Routes }   from "react-router-dom";
import { Login }           from "../views/Login";
import { Register }        from "../views/Register";
import { Profile }         from "../views/Profile";
import { Home }            from "../views/Home";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { Dashboard }       from "../views/Dashboard";
import { Layout }          from "../views/Layout";
import { PublicRoutes }    from "./PublicRoutes";

export function AppRouter() {
	return (
		<>
			<Routes>
				<Route path="/" element={ <Layout /> }>
					
					
					{/*Rutas publicas*/}
					<Route index element={ <Home /> } />
					<Route element={ <PublicRoutes /> }>
						<Route path="login" element={ <Login /> } />
						<Route path="register" element={ <Register /> } />
					</Route>
					
					{/*Rutas protegidas*/}
					<Route path="/dashboard" element={ <ProtectedRoutes/> }>
						<Route index element={ <Dashboard /> } />
						<Route path="profile" element={ <Profile /> } />
					</Route>
					
				</Route>
			</Routes>
		</>
	);
}