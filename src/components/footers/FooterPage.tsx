import { useTranslation } from 'react-i18next';
import styles from './footerPage.module.css';

function FooterPage(): JSX.Element | null {
	const { t } = useTranslation();

	return (
		<footer className={styles.footerBox}>
			<div className={styles.workingHoursBox}>
				<span className={styles.workingHours}>{t('text')}</span>
			</div>
			<div className={styles.bottomInfoBox}>
				<span>© 2024 text. </span>
			</div>
		</footer>
	);
}

export default FooterPage;
