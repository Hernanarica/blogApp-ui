import { Home, Login, Register, Dashboard, Profile } from "../views";

export const routes = {
	publicRoutes: [
		{
			name: 'Home',
			path: '/',
			end: '/',
			component: Home
		},
		{
			name: 'Login',
			path: '/login',
			end: '/',
			component: Login
		},
		{
			name: 'Register',
			path: '/register',
			end: '/',
			component: Register
		}
	],
	protectedRoutes: [
		{
			name: 'Home',
			path: '/',
			end: '/dashboard',
			component: Home
		},
		{
			name: 'Dashboard',
			path: '/dashboard',
			end: '/dashboard',
			component: Dashboard
		},
		{
			name: 'Profile',
			path: '/dashboard/profile',
			end: '/dashboard',
			component: Profile
		}
	]
};