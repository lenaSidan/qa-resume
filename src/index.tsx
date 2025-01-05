import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { I18nextProvider } from 'react-i18next';
import i18n from './locales/i18n';

// Полифилл для плавного скролла
if (!('scrollBehavior' in document.documentElement.style)) {
	document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((anchor) => {
		anchor.addEventListener('click', (e: Event) => {
			e.preventDefault();

			const targetId = anchor.getAttribute('href'); // `anchor` уже типизирован как HTMLAnchorElement
			if (targetId) {
				const target = document.querySelector(targetId);
				if (target instanceof HTMLElement) {
					window.scrollTo({
						top: target.offsetTop,
						behavior: 'smooth',
					});
				}
			}
		});
	});
}

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
	<Provider store={store}>
		<I18nextProvider i18n={i18n}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</I18nextProvider>
	</Provider>
);
