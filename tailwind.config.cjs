/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/*.jsx',
		'./src/**/*.jsx'
	],
	theme: {
		extend: {
			backgroundImage: {
				'avatar-image': "url('https://i.pravatar.cc/50')"
			}
		}
	},
	plugins: [
		require('@tailwindcss/forms'),
	]
};
