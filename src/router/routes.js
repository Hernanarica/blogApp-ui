import { Home, Login, Register, Dashboard, Posts } from "../views";
import { routes, adminRoutes, collaboratorsRoutes, subscriberRoutes } from './types/routes.js';

export const navbarPublicRoutes = [
	{
		name: 'Home',
		path: routes.home,
		end: '/',
		component: Home
	},
	{
		name: 'Posts',
		path: routes.posts,
		end: '/',
		component: Posts
	},
	{
		name: 'Login',
		path: routes.login,
		end: '/',
		component: Login
	},
	{
		name: 'Register',
		path: routes.register,
		end: '/',
		component: Register
	}
];

export const navbarAdminRoutes = [
	{
		name: 'Home',
		path: adminRoutes.home,
		end: '/',
		component: Home
	},
	{
		name: 'Posts',
		path: adminRoutes.posts,
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
		path: adminRoutes.dashboard.index,
		end: '/dashboard',
		component: Dashboard
	}
];

export const navbarCollaboratorRoutes = [
	{
		name: 'Home',
		path: collaboratorsRoutes.home,
		end: '/',
		component: Home
	},
	{
		name: 'Posts',
		path: collaboratorsRoutes.posts,
		end: '/',
		component: Posts
	},
	{
		name: 'Collaborator',
		path: "collaborator",
		end: '/',
		component: Posts
	}
];

export const navbarSubscriberRoutes = [
	{
		name: 'Home',
		path: subscriberRoutes.home,
		end: '/',
		component: Home
	},
	{
		name: 'Posts',
		path: subscriberRoutes.posts,
		end: '/',
		component: Posts
	},
	{
		name: 'Subscriber',
		path: "subscriber",
		end: '/',
		component: Posts
	}
];