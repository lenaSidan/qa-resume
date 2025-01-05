import { useState } from 'react';
import { PizzaSize, ExtraIngredient, ProductInfo } from './type/PizzaTypes';
import VisibilityIcon from '@mui/icons-material/Visibility';
import styles from './pizzaItem.module.css';
import PizzaModal from './PizzaModal';
import ProductInfoModal from './ProductInfoModal';
import { useTranslation } from 'react-i18next';

interface PizzaItemProps {
	name: string;
	description: string;
	image: string;
	sizes: PizzaSize[];
	extras: ExtraIngredient[];
	productInfo?: ProductInfo;
}

const PizzaItem: React.FC<PizzaItemProps> = ({
	name,
	description,
	image,
	sizes,
	extras,
	productInfo,
}) => {
	const { t } = useTranslation();
	const [isPizzaModalOpen, setIsPizzaModalOpen] = useState(false);
	const [isProductInfoModalOpen, setIsProductInfoModalOpen] = useState(false);

	const openPizzaModal = (): void => setIsPizzaModalOpen(true);
	const closePizzaModal = (): void => setIsPizzaModalOpen(false);

	const openProductInfoModal = (): void => setIsProductInfoModalOpen(true);
	const closeProductInfoModal = (): void => setIsProductInfoModalOpen(false);

	return (
		<div
			className={styles.pizzaItem}
			onClick={() => {
				if (!isProductInfoModalOpen) {
					// Проверка, чтобы открывать только при закрытом ProductInfoModal
					openPizzaModal();
				}
			}}
		>
			<img src={image} alt={name} className={styles.pizzaImage} />

			<div className={styles.pizzaContent}>
				<div className={styles.topContainer}>
					<div className={styles.pizzaHeader}>
						<div className={styles.pizzaNameInfo}>
							<div className={styles.pizzaName}>{name}</div>
							<button
								type="button"
								className={styles.productInfoButton}
								onClick={(e) => {
									e.stopPropagation();
									openProductInfoModal();
								}}
								aria-label={t('View info')}
							>
								{t('Product info')}
							</button>
						</div>
						<div className={styles.priceBox}>
							<p className={styles.pizzaPrice}>{sizes[0].price} €</p>
						</div>
					</div>
					<p className={styles.pizzaDescription}>{description}</p>
				</div>
				<div className={styles.pizzaActions}>
					<button type="button" className={styles.viewButton} aria-label={t('View pizza')}>
						<VisibilityIcon fontSize="medium" />
					</button>
				</div>
			</div>

			{isPizzaModalOpen && !isProductInfoModalOpen && (
				<PizzaModal
					name={name}
					description={description}
					sizes={sizes}
					extras={extras}
					onClose={closePizzaModal}
					image={image}
				/>
			)}

			{isProductInfoModalOpen && productInfo && (
				<ProductInfoModal
					isOpen={isProductInfoModalOpen}
					onClose={() => {
						closeProductInfoModal();
						setIsPizzaModalOpen(false);
					}}
					productInfo={productInfo}
				/>
			)}
		</div>
	);
};

export default PizzaItem;
