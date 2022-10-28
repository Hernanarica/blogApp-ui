import { defineConfig } from 'vite';
import react            from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		host: '0.0.0.0',
		port: 3000
	},
	plugins: [ react() ],
	optimizeDeps: {
		include: [ 'ckeditor5-custom-build' ]
	},
	build: {
		commonjsOptions: { exclude: [ 'ckeditor5-custom-build' ], include: [] }
	}
});
