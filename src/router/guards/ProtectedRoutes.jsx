import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

export function ProtectedRoutes() {
	const { isAuthenticated } = useSelector(state => state.auth);
	
	return isAuthenticated ? <Outlet /> : <Navigate to="/login" />
}