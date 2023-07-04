import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  server: {
    port: 3000
  },
  resolve: {
		alias: {
			'app': path.resolve(__dirname, 'src', 'app'),
			'shared': path.resolve(__dirname, 'src', 'shared'),
			'pages': path.resolve(__dirname, 'src', 'pages'),
			'widgets': path.resolve(__dirname, 'src', 'widgets'),
			'features': path.resolve(__dirname, 'src', 'features'),
			'entities': path.resolve(__dirname, 'src', 'entities'),
		}
	},
})
