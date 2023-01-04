export function createCredentialsAdapter(user) {
	return {
		id: user.id,
		role: user.role,
		name: user.name,
		email: user.email,
		image: user.image
	};
}