import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
	const isDevelopment = mode === 'development';

	return {
		plugins: [react()],
		server: {
			open: true,
			proxy: {
				'/api': {
					target: isDevelopment ? 'http://localhost:8080' : '/',
				},
			},
			// 🔹 Это важно для корректной работы React Router при обновлении страницы
			hmr: true,
		},
		build: {
			outDir: 'dist', // DigitalOcean ожидает "dist", а не "build"
			sourcemap: true,
		},
		base: '/', // Оставляем как "/", чтобы маршруты работали
		define: {
			API_BASE_URL: isDevelopment ? JSON.stringify('') : JSON.stringify('/api'),
		},
		resolve: {
			alias: {
				'@': '/src',
			},
		},
		test: {
			globals: true,
			environment: 'jsdom',
			setupFiles: 'src/setupTests',
			mockReset: true,
		},
	};
});
