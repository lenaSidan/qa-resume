import 'react';
import { useTranslation } from 'react-i18next';
import styles from './portfolio.module.css';

interface ProjectCardProps {
	image: string;
	title: string;
	descriptionKey: string;
	link: string;
	extraText: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
	image,
	title,
	descriptionKey,
	link,
	extraText,
}) => {
	const { t } = useTranslation();

	return (
		<div className={styles.projectCard}>
			<div className={styles.mediaContainer}>
				<img src={image} alt={title} className={styles.projectImage} />
			</div>
			<div className={styles.projectInfo}>
				<div className={styles.projectTitleBox}>
					<div className={styles.projectTitle}>{t(title)}</div>
					<p className={styles.extraText}>{t(extraText)}</p>
					<p className={styles.projectDescription}>{t(descriptionKey)}</p>
				</div>

				<div>
					<a href={link} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
						{t('ViewProject').toUpperCase()}
					</a>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
