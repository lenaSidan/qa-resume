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
						<span className={styles.tag}>&lt;LinkedIn&gt;</span>
						<img src="/linkedin-icon.png" alt="LinkedIn" className={styles.icon} />
						<span className={styles.tag}>&lt;/LinkedIn&gt;</span>
					</a>
					<a href="https://github.com/lenaSidan" target="_blank" rel="noopener noreferrer">
						<span className={styles.tag}>&lt;GitHub&gt;</span>
						<img src="/github-icon.png" alt="GitHub" className={styles.icon} />
						<span className={styles.tag}>&lt;/GitHub&gt;</span>
					</a>
					<Link to="/contact">
						<span className={styles.tag}>&lt;Email&gt;</span>
						<img src="/email-icon.png" alt="Email" className={styles.icon} />
						<span className={styles.tag}>&lt;/Email&gt;</span>
					</Link>
				</div>

				<p className={styles.info}>
					&copy; {new Date().getFullYear()} ELENA SIDANOVA — {t('AllRightsReserved').toUpperCase()}
				</p>
			</div>
		</footer>
	);
}

export default Footer;
