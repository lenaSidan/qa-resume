/* eslint-disable react/jsx-no-comment-textnodes */
import 'react';
import { useTranslation } from 'react-i18next';
import ProjectsSites from './ProjectsSites';
import ProjectsLogos from './ProjectsLogos';
import styles from './portfolio.module.css';
import ProjectsDigitalDrawings from './ProjectsDigitalDrawings';
import ScrollToTopButton from '../../ScrollToTopButton';

function Portfolio(): JSX.Element {
	const { t } = useTranslation();

	return (
		<section className={styles.portfolioSection} id="portfolio">
			{/* Общий заголовок */}
			<div className={styles.title}>
				{t('Portfolio').toUpperCase()}
				<div className={styles.descriptionText}>
					{t('portfolioDescriptionPart1')}
					<b>{t('portfolioDescriptionPart2')}</b>
					{t('portfolioDescriptionPart3')}
				</div>
			</div>

			{/* Категория: Сайты */}
			<div className={styles.textBox}>
				<p className={styles.subtitle}>{t('Websites').toUpperCase()}</p>
			</div>
			<ProjectsSites />
			<div className={styles.textBox2}>
				<p className={styles.subtitle}>{t('Websites/>').toUpperCase()}</p>
			</div>
			<div className={styles.codeDivider}>
				<span>/* --------------------------- End of Websites --------------------------- /*</span>
			</div>

			{/* Категория: Логотипы */}
			<div className={styles.textBox}>
				<p className={styles.subtitle}>{t('Logos').toUpperCase()}</p>
			</div>
			<ProjectsLogos />
			<div className={styles.textBox2}>
				<p className={styles.subtitle}>{t('Logos/>').toUpperCase()}</p>
			</div>
			<div className={styles.codeDivider}>
				<span>/* ----------------------------- End of Logos ----------------------------- /*</span>
			</div>

			{/* Категория: Цифровые рисунки */}
			<div className={styles.textBox}>
				<p className={styles.subtitle}>{t('Digital Drawings').toUpperCase()}</p>
			</div>
			<ProjectsDigitalDrawings />
			<div className={styles.textBox2}>
				<p className={styles.subtitle}>{t('Digital Drawings/>').toUpperCase()}</p>
			</div>
			<div className={styles.codeDivider}>
				<span>/* ----------------------- End of Digital Drawings ----------------------- /*</span>
			</div>

			{/* Категория: Рисунки от руки */}
			{/* <div className={styles.textBox}>
				<p className={styles.subtitle}>{t('Hand Drawings').toUpperCase()}</p>
			</div>
			<ProjectsHandDrawings /> */}
			<ScrollToTopButton />
		</section>
	);
}

export default Portfolio;
