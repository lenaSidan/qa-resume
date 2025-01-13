import 'react';
import { useTranslation } from 'react-i18next';
import styles from './portfolio.module.css';

const projects = [
	{
		title: 'Tomate Pizza Menu',
		descriptionKey: 'Project2Description',
		image: '/tomate-pizza-menu.jpg',
		link: 'https://menu.tomate-pizza.de/',
	},
	{
		title: 'Siltacom Website',
		descriptionKey: 'Project3Description',
		image: '/siltacom.jpg',
		link: 'https://www.siltacom.fi/',
	},
	{
		title: 'Integrate Germany',
		descriptionKey: 'Project1Description',
		image: '/integrate-germany.jpg',
		link: 'https://integrate-germany.de/',
	},
];

function Portfolio(): JSX.Element {
	const { t } = useTranslation();

	return (
		<section className={styles.portfolioSection} id="portfolio">
			<div className={styles.title}>
				{t('Portfolio').toUpperCase()}
				<div className={styles.descriptionText}>
					{t('portfolioDescriptionPart1')}
					<b>{t('portfolioDescriptionPart2')}</b>
					{t('portfolioDescriptionPart3')}
				</div>
			</div>

			<div className={styles.textBox}>
				<p className={styles.subtitle}>{t('MyProjects').toUpperCase()}</p>
			</div>
			<div className={styles.projectGrid}>
				{projects.map((project, index) => (
					<div className={styles.projectCard} key={index}>
						<div className={styles.mediaContainer}>
							<img src={project.image} alt={project.title} className={styles.projectImage} />
						</div>

						<div className={styles.projectInfo}>
							<div className={styles.projectTitleBox}>
								<div className={styles.projectTitle}>{t(project.title)}</div>
								<p className={styles.projectDescription}>{t(project.descriptionKey)}</p>
							</div>
							<div>
								<a
									href={project.link}
									target="_blank"
									rel="noopener noreferrer"
									className={styles.projectLink}
								>
									{t('ViewProject').toUpperCase()}
								</a>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

export default Portfolio;
