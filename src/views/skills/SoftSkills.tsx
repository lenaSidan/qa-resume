import 'react';
import { useTranslation } from 'react-i18next';
import styles from './softSkills.module.css';

const softSkillsKeys = [
	'softSkills.communication',
	'softSkills.teamwork',
	'softSkills.problemSolving',
	'softSkills.organization',
	'softSkills.creativity',
	'softSkills.flexibility',
];

function SoftSkills(): JSX.Element {
	const { t } = useTranslation();

	return (
		<section className={styles.softSkillsSection} id="softskills">
			<div className={styles.title}>{t('Soft Skills').toUpperCase()}</div>
			<div className={styles.softSkillsCard}>
				<div className={styles.skillHeader}>
					<span className={styles.codeTag}>&lt;softskills&gt;</span>
				</div>
				<div className={styles.skillBody}>
					{softSkillsKeys.map((key, idx) => (
						<div key={idx} className={styles.skillItem}>
							<span className={styles.tag}>&lt;{t(key)}&gt;</span>
						</div>
					))}
				</div>
				<div className={styles.skillFooter}>
					<span className={styles.codeTag}>&lt;/softskills&gt;</span>
				</div>
			</div>
		</section>
	);
}

export default SoftSkills;
