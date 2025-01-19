/* eslint-disable react/jsx-no-comment-textnodes */
import { useState } from 'react';
import Experience from './Experience';
import Education from './Education';
import styles from './resume.module.css';
import { useTranslation } from 'react-i18next';
import EducationClassic from './EducationClassic';
import ExperienceClassic from './ExperienceClassic';

function Resume(): JSX.Element {
	const { t } = useTranslation();

	// Состояние для переключения стиля
	const [isCodeStyle, setIsCodeStyle] = useState(true);

	return (
		<section className={styles.resumeSection} id="resume">
			<div className={styles.title}>{t('resume').toUpperCase()}</div>

			<div className={styles.toggleContainer}>
				<span className={styles.subtitle2}>{t('Choose Display Style')}:</span>
				<span
					className={`${styles.toggleText} ${isCodeStyle ? styles.active : ''}`}
					onClick={() => setIsCodeStyle(true)}
				>
					{t('Classic')}
				</span>
				<span className={styles.divider}>|</span>
				<span
					className={`${styles.toggleText} ${!isCodeStyle ? styles.active : ''}`}
					onClick={() => setIsCodeStyle(false)}
				>
					{t('Code')}
				</span>
			</div>

			{/* Блок опыта */}
			<div className={styles.block}>
				<div className={styles.textBox}>
					<p className={styles.subtitle}>
						{t(isCodeStyle ? 'Experience' : 'Experience2').toUpperCase()}
					</p>
				</div>
				{isCodeStyle ? <ExperienceClassic /> : <Experience />}
				{!isCodeStyle && (
					<>
						<div className={styles.textBox}>
							<p className={styles.subtitle}>{t('Experience2/>').toUpperCase()}</p>
						</div>
						<div className={styles.codeDivider}>
							<span>
								{`/* --------------------------- End of ${t('Experience')} --------------------------- /*`}
							</span>
						</div>
					</>
				)}
			</div>

			{/* Блок образования */}
			<div className={styles.block}>
				<div className={styles.textBox}>
					<p className={styles.subtitle}>
						{t(isCodeStyle ? 'Education' : 'Education2').toUpperCase()}
					</p>
				</div>
				{isCodeStyle ? <EducationClassic /> : <Education />}
				{!isCodeStyle && (
					<>
						<div className={styles.textBox}>
							<p className={styles.subtitle}>{t('Education2/>').toUpperCase()}</p>
						</div>
						<div className={styles.codeDivider}>
							<span>
								{`/* --------------------------- End of ${t('Education')} --------------------------- /*`}
							</span>
						</div>
					</>
				)}
			</div>
		</section>
	);
}

export default Resume;
