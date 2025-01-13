import styles from './navbarHome.module.css';
import LanguageSelector from '../header/LanguageSelector';

import { useTranslation } from 'react-i18next';

function NavbarMain(): JSX.Element {
	const { t } = useTranslation();

	return (
		<div className={styles.navbarBox}>
			<div className={styles.navigationPanelTop}>
				<div className={styles.rightSection}>
					<div className={styles.menuContainer}>
						<div className={styles.menu}>{t('viewMyList')}</div>
					</div>
					<div className={styles.languageBox}>
						<LanguageSelector />
					</div>
				</div>
			</div>
		</div>
	);
}
export default NavbarMain;
