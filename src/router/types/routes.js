export default {
	routes: {
		home: 'iniciar-sesion',
		posts: 'registrate'
	},
	suscriptorRoutes: {
		home: '/',
		posts: '/posts',
		contact: '/contacto',
		profile: '/perfilName'
	},
	collaboratorRoutes: {},
	adminRoutes: {
		dashboard: {
			posts: 'posts',
			users: 'usuarios'
		}
	}
};