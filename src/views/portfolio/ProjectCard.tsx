import 'react';
import { useTranslation } from 'react-i18next';
import styles from './portfolio.module.css';

interface ProjectCardProps {
	image?: string;
	video?: string;
	title: string;
	descriptionKey: string;
	link: string;
	extraText: string;
	downloadLink?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
	image,
	video,
	title,
	descriptionKey,
	link,
	extraText,
	downloadLink,
}) => {
	const { t } = useTranslation();

	return (
		<div className={styles.projectCard}>
			<div className={styles.mediaContainer}>
				{/* Если есть видео, показываем его, иначе картинку */}
				{video ? (
					<video className={styles.videoPreview} controls loop muted>
						<source src={video} type="video/webm" />
						Your browser does not support the video tag.
					</video>
				) : (
					<img src={image} alt={title} className={styles.projectImage} />
				)}
			</div>

			<div className={styles.projectInfo}>
				<div className={styles.projectTitleBox}>
					<div className={styles.projectTitle}>{t(title)}</div>
					<p className={styles.extraText}>{t(extraText)}</p>
					<p className={styles.projectDescription}>{t(descriptionKey)}</p>
				</div>

				<div className={styles.buttons}>
					<a href={link} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
						{t('ViewProject').toUpperCase()}
					</a>
					{downloadLink && (
						<a
							href={downloadLink}
							target="_blank"
							rel="noopener noreferrer"
							className={styles.downloadButton}
						>
							{t('Download').toUpperCase()}
						</a>
					)}
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
