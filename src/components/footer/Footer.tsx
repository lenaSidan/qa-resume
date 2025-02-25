import 'react';
import { useTranslation } from 'react-i18next';
import styles from './footer.module.css';
import { Link } from 'react-router-dom';

function Footer(): JSX.Element {
	const { t } = useTranslation();

	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.socialLinks}>
					<a
						href="https://www.linkedin.com/in/elena-sidanova-baa81b2b7/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src="/linkedin-icon.png" alt="LinkedIn" className={styles.icon} />
						<span className={styles.tag}>LinkedIn</span>
					</a>
					<a href="https://github.com/lenaSidan" target="_blank" rel="noopener noreferrer">
						<img src="/github-icon.png" alt="GitHub" className={styles.icon} />
						<span className={styles.tag}>GitHub</span>
					</a>
					<Link to="/contact">
						<img src="/email-icon.png" alt="Email" className={styles.icon} />
						<span className={styles.tag}>Email</span>
					</Link>
				</div>

				<p className={styles.info}>
					&copy; {new Date().getFullYear()} MAIIA KATTS — {t('AllRightsReserved').toUpperCase()}
				</p>
			</div>
		</footer>
	);
}

export default Footer;
