import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './drawingsGrid.module.css';

interface Drawing {
	image: string;
	descriptionKey?: string;
}

const drawings: Drawing[] = [
	{ image: '/digital-drawing1.jpg', descriptionKey: 'DigitalDrawing1Description' },
	{ image: '/digital-drawing2.jpg', descriptionKey: 'DigitalDrawing2Description' },
	{ image: '/hand-drawing1.jpg', descriptionKey: 'HandDrawing1Description' },
	{ image: '/hand-drawing2.jpg', descriptionKey: 'HandDrawing2Description' },
];

const DrawingsGrid: React.FC = () => {
	const { t } = useTranslation();
	const [activeImage, setActiveImage] = useState<string | null>(null);

	return (
		<div>
			<div className={styles.gridContainer}>
				{drawings.map((drawing, index) => (
					<div
						className={styles.gridItem}
						key={index}
						onClick={() => setActiveImage(drawing.image)}
					>
						<img
							src={drawing.image}
							alt={drawing.descriptionKey || 'Drawing'}
							className={styles.image}
						/>
						{drawing.descriptionKey && (
							<div className={styles.description}>
								<p>{t(drawing.descriptionKey)}</p>
							</div>
						)}
					</div>
				))}
			</div>
			{/* Модальное окно */}
			{activeImage && (
				<div className={styles.modal} onClick={() => setActiveImage(null)}>
					<img src={activeImage} alt="Full Drawing" className={styles.modalImage} />
				</div>
			)}
		</div>
	);
};

export default DrawingsGrid;
