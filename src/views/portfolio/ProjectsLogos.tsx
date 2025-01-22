import { useRef, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import styles from './projectsDigitalDrawings.module.css';

interface Logo {
	image: string;
	descriptionKey?: string;
}

interface LogoProject {
	title: string;
	description: string;
	logos: Logo[];
}

const projects: LogoProject[] = [
	{
		title: 'Logo 1',
		description: 'Logo1Description',
		logos: [
			{ image: '/logos/logo_tomate.webp' },
			{ image: '/logos/logo_testpool.webp', descriptionKey: 'DigitalDrawing1Description' },
			{ image: '/logos/logo_integrate.webp' },
			{ image: '/logos/logo_clean.webp' },
			{ image: '/logos/logo_siltacom.webp' },
			{ image: '/logos/logo_sidan.webp' },
		],
	},
];

const ProjectsLogos: React.FC = () => {
	const { t } = useTranslation();
	const [activeImage, setActiveImage] = useState<string | null>(null);
	const sliderRefs = useRef<(HTMLDivElement | null)[]>([]);

	// Закрытие модального окна при нажатии на "Escape"
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

	// Функция прокрутки
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
			{projects.map((projectLogo, index) => (
				<div className={styles.projectBlock} key={index}>
					<div className={styles.projectTitle}>{t(projectLogo.title)}</div>
					<div className={styles.projectDescription}>{t(projectLogo.description)}</div>
					<div className={styles.sliderWrapper}>
						{/* Кнопка влево */}
						<button
							type="button"
							className={`${styles.scrollButton} ${styles.left}`}
							onClick={() => scroll(index, 'left')}
							aria-label="Scroll left"
							title="Scroll left"
						>
							<ArrowBackIosIcon className={styles.icon} />
						</button>

						{/* Слайдер */}
						<div className={styles.slider} ref={(el) => (sliderRefs.current[index] = el)}>
							{projectLogo.logos.map((logo, i) => (
								<div
									className={styles.drawingItem}
									key={i}
									onClick={() => setActiveImage(logo.image)}
								>
									<img
										src={logo.image}
										alt={logo.descriptionKey || 'Drawing'}
										className={styles.drawingImage}
									/>
								</div>
							))}
						</div>

						{/* Кнопка вправо */}
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

			{/* Модальное окно */}
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

export default ProjectsLogos;
