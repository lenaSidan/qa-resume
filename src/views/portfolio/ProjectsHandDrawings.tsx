import 'react';
import ProjectCard from './ProjectCard';
import styles from './portfolio.module.css';

const handDrawings = [
	{
		title: 'Hand Drawing 1',
		descriptionKey: 'HandDrawing1Description',
		image: '/hand-drawing1.jpg',
		link: '#',
	},
	{
		title: 'Hand Drawing 2',
		descriptionKey: 'HandDrawing2Description',
		image: '/hand-drawing2.jpg',
		link: '#',
	},
];

const ProjectsHandDrawings: React.FC = () => {
	return (
		<div className={styles.projectGrid}>
			{handDrawings.map((drawing, index) => (
				<ProjectCard
					key={index}
					image={drawing.image}
					title={drawing.title}
					descriptionKey={drawing.descriptionKey}
					link={drawing.link}
				/>
			))}
		</div>
	);
};

export default ProjectsHandDrawings;
