import { Suspense, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { useTranslation } from 'react-i18next';
import Cookies from 'js-cookie';
import PageHome from './views/PageHome';
import Loading from './components/loading/Loading';
import FooterPage from './components/footers/FooterPage';

function App(): JSX.Element {
	const { i18n } = useTranslation();

	useEffect(() => {
		const languageFromCookies = Cookies.get('selectedLanguage');
		if (languageFromCookies) {
			i18n.changeLanguage(languageFromCookies);
		}
	}, [i18n.language]);

	return (
		<div id="root">
			<div className="mainContent">
				<Suspense fallback={<Loading />}>
					<Routes>
						<Route path="/" element={<PageHome />} />
					</Routes>
				</Suspense>
			</div>
			<FooterPage />
		</div>
	);
}

export default App;
