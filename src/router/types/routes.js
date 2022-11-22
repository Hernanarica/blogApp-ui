export const routes = {
	home: '/',
	login: '/iniciar-sesion',
	register: '/registrate',
	posts: '/posts'
};

export const subscriberRoutes = {
	home: '/',
	posts: '/posts',
	contact: '/contacto',
	profile: '/perfil'
};

export const collaboratorsRoutes = {
	home: '/',
	posts: '/posts',
	contact: '/contacto',
	postCreate: '/create-post',
	profile: '/perfil'
};

export const adminRoutes = {
	home: '/',
	posts: '/posts',
	contact: '/contacto',
	profile: '/perfil',
	dashboard: {
		index: '/dashboard',
		posts: {
			index: 'posts',
			create: 'crear'
		},
		users: 'usuarios'
	}
};