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

	// Функция для рендеринга блока (универсальная для опыта и образования)
	const renderBlock = (
		titleKey: string,
		endKey: string,
		ClassicComponent: React.FC,
		CodeComponent: React.FC
	): JSX.Element => (
		<>
			<div className={styles.block}>
				<div className={styles.textBox}>
					<p className={styles.subtitle}>
						{t(isCodeStyle ? titleKey : `${titleKey}2`).toUpperCase()}
					</p>
				</div>
				{isCodeStyle ? <ClassicComponent /> : <CodeComponent />}
			</div>
			{!isCodeStyle && (
				<>
					<div className={styles.textBox}>
						<p className={styles.subtitle}>{t(`${titleKey}2/>`).toUpperCase()}</p>
					</div>
					<div className={styles.codeDivider}>
						<span>
							{`/* --------------------------- End of ${t(titleKey)} --------------------------- /*`}
						</span>
					</div>
				</>
			)}
		</>
	);

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
			{renderBlock('Experience', 'Experience/>', ExperienceClassic, Experience)}

			{/* Блок образования */}
			{renderBlock('Education', 'Education/>', EducationClassic, Education)}
		</section>
	);
}

export default Resume;
