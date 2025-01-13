import 'react';
import { useTranslation } from 'react-i18next';
import styles from './header.module.css';
import LanguageSelector from './LanguageSelector';

function Header(): JSX.Element {
	const { t } = useTranslation();

	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				<a href="/" className={styles.logoLink}>
					<img src="/logo.png" alt={t('Sidanova')} className={styles.logoImage} />
				</a>
			</div>
			<nav className={styles.nav}>
				<ul className={styles.navList}>
					<li>
						<a href="/about" className={styles.navLink}>
							{t('AboutMe')}
						</a>
					</li>
					<li>
						<a href="/skills" className={styles.navLink}>
							{t('Skills')}
						</a>
					</li>
					<li>
						<a href="/portfolio" className={styles.navLink}>
							{t('Portfolio')}
						</a>
					</li>
					<li>
						<a href="#contact" className={styles.navLink}>
							{t('Contact')}
						</a>
					</li>
				</ul>
			</nav>
			<div className={styles.rightSection}>
				<div className={styles.languageBox}>
					<LanguageSelector />
				</div>
			</div>
		</header>
	);
}

export default Header;
