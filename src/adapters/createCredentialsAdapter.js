export function createCredentialsAdapter(data) {
	return {
		id: data.id,
		role: data.role,
		name: data.name,
		email: data.email,
		image: data.image
	};
}