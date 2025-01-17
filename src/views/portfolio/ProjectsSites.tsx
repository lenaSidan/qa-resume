import 'react';
import styles from './portfolio.module.css';
import ProjectCard from './ProjectCard';

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

const ProjectsSites: React.FC = () => {
	return (
		<div className={styles.sitesBlock}>
			<div className={styles.projectGrid}>
				{projects.map((project, index) => (
					<ProjectCard
						key={index}
						image={project.image}
						title={project.title}
						descriptionKey={project.descriptionKey}
						link={project.link}
					/>
				))}
			</div>
		</div>
	);
};

export default ProjectsSites;
