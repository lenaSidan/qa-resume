import { useTranslation } from 'react-i18next';
import Cookies from 'js-cookie';
import styles from './languageSelector.module.css';

function LanguageSelector(): JSX.Element {
	const { i18n } = useTranslation();
	const languages = ['en', 'de', 'ru'];

	const handleLanguageChange = (language: string): void => {
		i18n.changeLanguage(language);
		Cookies.set('selectedLanguage', language);
	};

	return (
		<div className={styles.languageSelector}>
			{languages.map((lang) => (
				<button
					key={lang}
					className={styles.hexButton}
					type="button"
					onClick={() => handleLanguageChange(lang)}
				>
					<svg viewBox="0 0 100 86.6" className={styles.svgHex}>
						<polygon
							points="25,0 75,0 100,43.3 75,86.6 25,86.6 0,43.3"
							className={i18n.language === lang ? styles.activeHex : styles.hex}
							strokeWidth="2"
						/>
						<text x="50%" y="55%" textAnchor="middle" className={styles.text}>
							{lang.toUpperCase()}
						</text>
					</svg>
				</button>
			))}
		</div>
	);
}

export default LanguageSelector;
