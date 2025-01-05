import ScrollToTopButton from '../ScrollToTopButton';
import styles from './pageHome.module.css';
import NavbarHome from '../components/navbars/NavbarHome';

function PageHome(): JSX.Element {
	return (
		<>
			<NavbarHome />
			<div className={styles.relativeContainer}>
				<p>Resume</p>
			</div>

			<ScrollToTopButton />
		</>
	);
}

export default PageHome;
