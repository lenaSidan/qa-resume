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
		},
		build: {
			outDir: 'build',
			sourcemap: true,
		},
		base: '/',
		// 🔹 Добавляем fallback для DigitalOcean и серверов
		assetsInclude: ['**/*.html'],
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
