import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

export function PublicRoutes() {
	const { isAuthenticated } = useSelector(state => state.auth);
	
	return !isAuthenticated ? <Outlet /> : <Navigate to={ window.localStorage.getItem('pathname') ?? '/' } />;
}