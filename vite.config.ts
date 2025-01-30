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
			sourcemap: false,
		},
		base: '/', // 🔹 Убедись, что базовый путь правильный
		resolve: {
			alias: {
				'@': '/src',
			},
		},
		// 🔹 Включаем обработку маршрутов для SPA
		preview: {
			port: 4173,
			strictPort: true,
			open: true,
			// Самое важное: SPA fallback
			// Все неизвестные маршруты должны вести на index.html
			// Это предотвращает 404 при обновлении страниц
			rewrites: [{ from: /\/.*/, to: '/index.html' }],
		},
		test: {
			globals: true,
			environment: 'jsdom',
			setupFiles: 'src/setupTests',
			mockReset: true,
		},
	};
});
