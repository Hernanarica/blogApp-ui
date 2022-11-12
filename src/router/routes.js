import { Home, Login, Register, Dashboard, Profile, Posts, Users } from "../views";
import myRoute from '../types/routes.js';

export const routes = {
	publicRoutes: [
		{
			name: 'Home',
			path: myRoute.public.home,
			end: '/',
			component: Home
		},
		{
			name: 'Login',
			path: myRoute.public.login,
			end: '/',
			component: Login
		},
		{
			name: 'Register',
			path: myRoute.public.register,
			end: '/',
			component: Register
		}
	],
	protectedRoutes: [
		{
			name: 'Home',
			path: myRoute.public.home,
			end: '/dashboard',
			component: Home
		},
		{
			name: 'Dashboard',
			path: myRoute.private.dashboard,
			end: '/dashboard',
			component: Dashboard
		},
	],
	dashboardRoutes: [
		{
			name: 'posts',
			path: myRoute.private.posts,
			end: '/dashboard',
			component: Posts
		},
		{
			name: 'users',
			path: myRoute.private.users,
			end: '/dashboard',
			component: Users
		},
	]
};