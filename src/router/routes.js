import { Home }      from "../views/Home.jsx";
import { Login }     from "../views/Login.jsx";
import { Register }  from "../views/Register.jsx";
import { Dashboard } from "../views/Dashboard.jsx";
import { Profile }   from "../views/Profile.jsx";

export const routes = {
	publicRoutes: [
		{
			name: 'Home',
			path: '/',
			component: Home
		},
		{
			name: 'Login',
			path: '/login',
			component: Login
		},
		{
			name: 'Register',
			path: '/register',
			component: Register
		}
	],
	protectedRoutes: [
		{
			name: 'Home',
			path: '/',
			component: Home
		},
		{
			name: 'Dashboard',
			path: '/dashboard',
			component: Dashboard
		},
		{
			name: 'Profile',
			path: '/dashboard/profile',
			component: Profile
		}
	]
};