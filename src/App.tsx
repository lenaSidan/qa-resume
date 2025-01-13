import { Suspense, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { useTranslation } from 'react-i18next';
import Cookies from 'js-cookie';
import Loading from './components/loading/Loading';
import AboutMe from './views/aboutMe/AboutMe';
import Contact from './views/contact/Contact';
import MainSection from './views/mainSection/MainSection';
import Skills from './views/skills/Skills';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Portfolio from './views/portfolio/Portfolio';

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
					<Header />
					<Routes>
						<Route path="/" element={<MainSection />} />
						<Route path="/about" element={<AboutMe />} />
						<Route path="/skills" element={<Skills />} />
						<Route path="/portfolio" element={<Portfolio />} />
						<Route path="/contact" element={<Contact />} />
					</Routes>
				</Suspense>
			</div>
			<Footer />
		</div>
	);
}

export default App;
