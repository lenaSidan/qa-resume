import 'react';
import styles from './portfolio.module.css';
import ProjectCard from './ProjectCard';

const projects = [
	{
		title: 'Tomate Pizza Menu',
		descriptionKey: 'Project2Description',
		image: '/tomate-pizza-menu.webp',
		link: 'https://menu.tomate-pizza.de/',
		extraText: 'DesignAndProgramming',
	},
	{
		title: 'Siltacom Website',
		descriptionKey: 'Project3Description',
		image: '/siltacom.webp',
		link: 'https://www.siltacom.fi/',
		extraText: 'DesignAndProgramming',
	},
	{
		title: 'Integrate Germany',
		descriptionKey: 'Project1Description',
		image: '/integrate-germany.webp',
		link: 'https://integrate-germany.de/',
		extraText: 'DesignAndProgramming',
	},
	{
		title: 'Egg Timer',
		descriptionKey: 'EggTimerDescription',
		video: '/video/egg-timer-demo.mp4',
		link: 'https://github.com/lenaSidan/Egg-Timer-App',
		downloadLink: 'https://github.com/lenaSidan/Egg-Timer-App/releases',
		extraText: 'DesktopApp',
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
						video={project.video}
						title={project.title}
						descriptionKey={project.descriptionKey}
						link={project.link}
						downloadLink={project.downloadLink}
						extraText={project.extraText}
					/>
				))}
			</div>
		</div>
	);
};

export default ProjectsSites;
