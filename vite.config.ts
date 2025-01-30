import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
	const isDevelopment = mode === 'development';

	return {
		plugins: [react()],
		server: {
			open: true,
			historyApiFallback: true, // 🔹 ВАЖНО! Для работы с React Router
			proxy: {
				'/api': {
					target: isDevelopment ? 'http://localhost:8080' : '/',
				},
			},
		},
		build: {
			outDir: 'build',
			sourcemap: true,
		},
		base: './', // 🔹 Убедись, что не "/"
		assetsInclude: ['**/*.html'],
		resolve: {
			alias: {
				'@': '/src',
			},
		},
	};
});
