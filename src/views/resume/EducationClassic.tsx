import 'react';
import { useTranslation } from 'react-i18next';
import styles from './resume.module.css';

const educationData = [
	{
		titleKey: 'experienceCategories.education1.title',
		companyKey: 'experienceCategories.education1.institution',
		locationKey: 'experienceCategories.education1.location',
		periodKey: 'experienceCategories.education1.period',
		descriptionKeys: [
			'experienceCategories.education1.description1',
			'experienceCategories.education1.description2',
		],
	},
	{
		titleKey: 'experienceCategories.education2.title',
		companyKey: 'experienceCategories.education2.institution',
		locationKey: 'experienceCategories.education2.location',
		periodKey: 'experienceCategories.education2.period',
		descriptionKeys: [
			'experienceCategories.education2.description1',
			'experienceCategories.education2.description2',
			'experienceCategories.education2.description3',
		],
	},
];

function Education(): JSX.Element {
	const { t } = useTranslation();

	return (
		<section className={styles.section} id="education">
			<div className={styles.resumeCard}>
				<div className={styles.cardContent}>
					{educationData.map((item, idx) => (
						<div key={idx} className={styles.jobBlock}>
							<h4 className={styles.jobTitle}>{t(item.titleKey)}</h4>
							<div className={styles.border}>
								<p className={styles.company}>
									{t(item.companyKey)}, {t(item.locationKey)}
								</p>
								<p className={styles.period}>{t(item.periodKey)}</p>
								<div className={styles.border}>
									<ul className={styles.descriptionList}>
										{item.descriptionKeys.map((descKey, i) => (
											<li key={i}>{t(descKey)}</li>
										))}
									</ul>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default Education;
