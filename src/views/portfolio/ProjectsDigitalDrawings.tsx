import { useRef, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import styles from './projectsDigitalDrawings.module.css';

interface Drawing {
	image: string;
	descriptionKey?: string;
}

interface DrawingProject {
	title: string;
	description: string;
	drawings: Drawing[];
}

const projects: DrawingProject[] = [
	{
		title: 'Project 1',
		description: 'ProjectDescription1',
		drawings: [
			{ image: '/pooltest/testpool2.webp' },
			{ image: '/pooltest/button_FE_result.webp', descriptionKey: 'DigitalDrawing1Description' },
			{ image: '/pooltest/testpool4.webp' },
			{ image: '/pooltest/button_next.webp', descriptionKey: 'DigitalDrawing2Description' },
			{ image: '/pooltest/demo_BE_test.webp' },
			{ image: '/pooltest/testpool3.webp' },
			{ image: '/pooltest/demo_QA_test.webp' },
			{ image: '/pooltest/testpool1.webp' },
			{ image: '/pooltest/button_BE_test.webp' },
		],
	},
	{
		title: 'Project 2',
		description: 'ProjectDescription2',
		drawings: [
			{ image: '/tomate/salat.webp', descriptionKey: 'DigitalDrawing4Description' },
			{ image: '/tomate/shapka2.webp' },
			{ image: '/tomate/burger.webp' },
			{ image: '/tomate/cover.webp' },
			{ image: '/tomate/pizza.webp' },
			{ image: '/tomate/qr_code.webp' },
			{ image: '/tomate/pasta.webp' },
			{ image: '/tomate/set.webp' },
		],
	},
];

const ProjectsDigitalDrawings: React.FC = () => {
	const { t } = useTranslation();
	const [activeImage, setActiveImage] = useState<string | null>(null);
	const sliderRefs = useRef<(HTMLDivElement | null)[]>([]);

	// Close modal on "Escape" key press
	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent): void => {
			if (event.key === 'Escape') {
				setActiveImage(null);
			}
		};

		window.addEventListener('keydown', handleKeyDown);
		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, []);

	// Scroll function
	const scroll = (index: number, direction: 'left' | 'right'): void => {
		const ref = sliderRefs.current[index];
		if (ref) {
			const containerWidth = ref.clientWidth;
			const scrollAmount = containerWidth * 0.5;
			ref.scrollBy({
				left: direction === 'left' ? -scrollAmount : scrollAmount,
				behavior: 'smooth',
			});
		}
	};

	return (
		<div className={styles.projectsContainer}>
			{projects.map((project, index) => (
				<div className={styles.projectBlock} key={index}>
					<div className={styles.projectTitle}>{t(project.title)}</div>
					<div className={styles.projectDescription}>{t(project.description)}</div>
					<div className={styles.sliderWrapper}>
						{/* Scroll Left Button */}
						<button
							type="button"
							className={`${styles.scrollButton} ${styles.left}`}
							onClick={() => scroll(index, 'left')}
							aria-label="Scroll left"
							title="Scroll left"
						>
							<ArrowBackIosIcon className={styles.icon} />
						</button>

						{/* Slider */}
						<div className={styles.slider} ref={(el) => (sliderRefs.current[index] = el)}>
							{project.drawings.map((drawing, i) => (
								<div
									className={styles.drawingItem}
									key={i}
									onClick={() => setActiveImage(drawing.image)}
								>
									<img
										src={drawing.image}
										alt={drawing.descriptionKey || 'Drawing'}
										className={styles.drawingImage}
									/>
								</div>
							))}
						</div>

						{/* Scroll Right Button */}
						<div className={styles.separatorIconBox}>
							<span className={styles.separator}>/</span>
							<button
								type="button"
								className={`${styles.scrollButton} ${styles.right}`}
								onClick={() => scroll(index, 'right')}
								aria-label="Scroll right"
								title="Scroll right"
							>
								<ArrowForwardIosIcon className={styles.icon} />
							</button>
						</div>
					</div>
				</div>
			))}

			{/* Modal */}
			{activeImage && (
				<>
					{/* Backdrop */}
					<div className={styles.modalBackdrop} onClick={() => setActiveImage(null)}></div>

					{/* Modal Window */}
					<div className={styles.modal} onClick={(e) => e.stopPropagation()}>
						<button
							type="button"
							className={styles.closeButton}
							onClick={(e) => {
								e.stopPropagation();
								setActiveImage(null);
							}}
							aria-label="Close modal"
						>
							&times;
						</button>
						<img
							src={activeImage}
							alt="Full Drawing"
							className={styles.modalImage}
							onClick={() => setActiveImage(null)} // Закрытие при клике на изображение
						/>
					</div>
				</>
			)}
		</div>
	);
};

export default ProjectsDigitalDrawings;
