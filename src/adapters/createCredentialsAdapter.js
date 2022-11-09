export function createCredentialsAdapter(data) {
	return {
		id: data.id,
		name: data.name,
		email: data.email,
		image: data.image
	};
}