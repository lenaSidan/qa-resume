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
		title: 'Integrate Germany',
		descriptionKey: 'Project1Description',
		image: '/integrate-germany.jpg',
		link: 'https://integrate-germany.de/',
	},
	{
		title: 'Siltacom Website',
		descriptionKey: 'Project3Description',
		image: '/siltacom.jpg',
		link: 'https://www.siltacom.fi/',
	},
];

function Portfolio(): JSX.Element {
	const { t } = useTranslation();

	return (
		<section className={styles.portfolioSection} id="portfolio">
			<h2 className={styles.title}>{t('Portfolio')}</h2>
			<p className={styles.subtitle}>{t('MyProjects')}</p>
			<div className={styles.projectGrid}>
				{projects.map((project, index) => (
					<div className={styles.projectCard} key={index}>
						<img src={project.image} alt={project.title} className={styles.projectImage} />
						<div className={styles.projectInfo}>
							<h3 className={styles.projectTitle}>{t(project.title)}</h3>
							<p className={styles.projectDescription}>{t(project.descriptionKey)}</p>
							<a
								href={project.link}
								target="_blank"
								rel="noopener noreferrer"
								className={styles.projectLink}
							>
								{t('ViewProject')}
							</a>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

export default Portfolio;
