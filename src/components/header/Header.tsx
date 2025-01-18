import 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import styles from './header.module.css';
import LanguageSelector from './LanguageSelector';

function Header(): JSX.Element {
	const { t } = useTranslation();

	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				<a href="/" className={styles.logoLink}>
					<img src="/logoSidan.png" alt={t('Sidanova')} className={styles.logoImage} />
				</a>
			</div>
			<nav className={styles.nav}>
				<ul className={styles.navList}>
					<li>
						<NavLink
							to="/resume"
							className={({ isActive }) =>
								isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
							}
						>
							{t('Resume').toUpperCase()}
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/skills"
							className={({ isActive }) =>
								isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
							}
						>
							{t('Skills').toUpperCase()}
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/portfolio"
							className={({ isActive }) =>
								isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
							}
						>
							{t('Portfolio').toUpperCase()}
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/contact"
							className={({ isActive }) =>
								isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
							}
						>
							{t('Contact').toUpperCase()}
						</NavLink>
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
