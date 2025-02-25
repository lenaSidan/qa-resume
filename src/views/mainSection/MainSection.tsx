import 'react';
import styles from './mainSection.module.css';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function MainSection(): JSX.Element {
	const { t } = useTranslation();
	return (
		<section className={styles.mainSection}>
			<div className={styles.content}>
				<div className={styles.text}>
					<div className={styles.name}>{t('Katts').toUpperCase()}</div>
					<p className={styles.subtitle}>{t('React')}</p>
					<p className={styles.description}>{t('Description')}</p>
					<div className={styles.buttons}>
						<a
							className={styles.buttonPrimary}
							onClick={() => {
								const link = document.createElement('a');
								link.href = '/resume.pdf';
								link.setAttribute('download', 'resume.pdf');
								document.body.appendChild(link);
								link.click();
								document.body.removeChild(link);
							}}
						>
							{t('DownloadResume').toUpperCase()}
						</a>
						<Link to="/contact" className={styles.buttonSecondary}>
							{t('Contact').toUpperCase()}
						</Link>
					</div>
				</div>
				<div className={styles.imageBox}>
					<img src="/logo.webp" alt={t('Katts')} className={styles.photo} />
				</div>
			</div>
		</section>
	);
}

export default MainSection;
