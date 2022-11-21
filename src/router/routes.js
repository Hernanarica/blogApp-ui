import { Home, Login, Register, Dashboard, Posts } from "../views";
import myRoute from '../types/routes.js';

export const routes = {
	collaboratorRoutes: [
		{
			name: 'Home',
			path: '/',
			end: '/',
			component: Home
		},
		{
			name: 'Posts',
			path: "posts",
			end: '/',
			component: Posts
		},
		{
			name: 'Collaborator',
			path: "collaborator",
			end: '/',
			component: Posts
		},
	],
	adminRoutes: [
		{
			name: 'Home',
			path: '/',
			end: '/',
			component: Home
		},
		{
			name: 'Posts',
			path: "posts",
			end: '/',
			component: Posts
		},
		{
			name: 'Admin',
			path: "collaborator",
			end: '/',
			component: Posts
		},
		{
			name: 'Dashboard',
			path: '/dashboard',
			end: '/dashboard',
			component: Dashboard
		}
	],
	subscriberRoutes: [
		{
			name: 'Home',
			path: '/',
			end: '/',
			component: Home
		},
		{
			name: 'Posts',
			path: "posts",
			end: '/',
			component: Posts
		},
		{
			name: 'Subscriber',
			path: "subscriber",
			end: '/',
			component: Posts
		}
	],
	publicRoutes: [
		{
			name: 'Home',
			path: '/',
			end: '/',
			component: Home
		},
		{
			name: 'Posts',
			path: "posts",
			end: '/',
			component: Posts
		},
		{
			name: 'Login',
			path: 'iniciar-sesion',
			end: '/',
			component: Login
		},
		{
			name: 'Register',
			path: 'registrate',
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
			name: 'Posts',
			path: "posts",
			end: '/',
			component: Posts
		},
		{
			name: 'Dashboard',
			path: myRoute.private.dashboard,
			end: '/dashboard',
			component: Dashboard
		}
	]
};