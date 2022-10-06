import { Route, Routes } from "react-router-dom";
import { Login }         from "../views/Login";
import { Register }      from "../views/Register";
import { Profile }       from "../views/Profile";
import { Home }           from "../views/Home";
import { Footer, Header } from "../components";

export function AppRouter() {
	return (
		<>
			<Header />
			
			<Routes>
				<Route path="/" element={ <Home /> } />
				<Route path="/login" element={ <Login /> } />
				<Route path="/profile" element={ <Profile /> } />
				<Route path="/register" element={ <Register /> } />
			</Routes>
			
			<Footer />
		</>
	);
}