/* eslint-disable react/jsx-no-comment-textnodes */
import 'react';
import Experience from './Experience';
import Education from './Education';
import styles from './resume.module.css';
import { useTranslation } from 'react-i18next';

function Resume(): JSX.Element {
	const { t } = useTranslation();
	return (
		<section className={styles.resumeSection} id="resume">
			<div className={styles.title}>{t('resume').toUpperCase()}</div>
			<div className={styles.block}>
				<div className={styles.textBox}>
					<p className={styles.subtitle}>{t('Experience').toUpperCase()}</p>
				</div>
				<Experience />
			</div>
			<div className={styles.textBox2}>
				<p className={styles.subtitle}>{t('Experience/>').toUpperCase()}</p>
			</div>
			<div className={styles.codeDivider}>
				<span>/* --------------------------- End of Experience --------------------------- /*</span>
			</div>
			<div className={styles.block}>
				<div className={styles.textBox}>
					<p className={styles.subtitle}>{t('Education').toUpperCase()}</p>
				</div>
				<Education />
			</div>
			<div className={styles.textBox2}>
				<p className={styles.subtitle}>{t('Education/>').toUpperCase()}</p>
			</div>
			<div className={styles.codeDivider}>
				<span>/* --------------------------- End of Education --------------------------- /*</span>
			</div>
		</section>
	);
}

export default Resume;
