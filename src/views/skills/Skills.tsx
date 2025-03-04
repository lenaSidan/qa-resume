import 'react';
import { useTranslation } from 'react-i18next';
import styles from './skills.module.css';
import SoftSkills from './SoftSkills';

const skills = [
	{
		category: 'Languages',
		items: ['JavaScript', 'TypeScript', 'HTML', 'CSS'],
	},
	{
		category: 'Frameworks & Libraries',
		items: ['React', 'Redux Toolkit', 'Next.js'],
	},
	{
		category: 'Tools',
		items: [
			'Git',
			'Figma',
			'VS Code',
			'Adobe Photoshop',
			'Adobe Illustrator',
			'Adobe InDesign',
			'After Effects',
		],
	},
];

function Skills(): JSX.Element {
	const { t } = useTranslation();

	return (
		<div>
			<div>
				<section className={styles.skillsSection} id="skills">
					<div className={styles.title}>{t('Skills').toUpperCase()}</div>
					<div className={styles.textBox}>
						<p className={styles.description}>{t('skillsDescription')}</p>
					</div>
					<div className={styles.skillsGrid}>
						{skills.map((skill, index) => (
							<div key={index} className={styles.skillCard}>
								<div className={styles.skillHeader}>
									<span className={styles.codeTag}>&lt;{skill.category.toLowerCase()}&gt;</span>
								</div>
								<div className={styles.skillBody}>
									{skill.items.map((item, idx) => (
										<div key={idx} className={styles.skillItem}>
											<span className={styles.tag}>&lt;{item}&gt;</span>
										</div>
									))}
								</div>
								<div className={styles.skillFooter}>
									<span className={styles.codeTag}>&lt;/{skill.category.toLowerCase()}&gt;</span>
								</div>
							</div>
						))}
					</div>
				</section>
			</div>
			<div className={styles.softSkillBox}>
				<SoftSkills />
			</div>
		</div>
	);
}

export default Skills;
