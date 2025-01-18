import 'react';
import { useTranslation } from 'react-i18next';
import styles from './resume.module.css';

const experienceData = [
	{
		titleKey: 'experienceCategories.job1.title',
		companyKey: 'experienceCategories.job1.company',
		locationKey: 'experienceCategories.job1.location',
		periodKey: 'experienceCategories.job1.period',
		descriptionKeys: [
			'experienceCategories.job1.description1',
			'experienceCategories.job1.description2',
			'experienceCategories.job1.description3',
		],
	},
	{
		titleKey: 'experienceCategories.job2.title',
		companyKey: 'experienceCategories.job2.company',
		locationKey: 'experienceCategories.job2.location',
		periodKey: 'experienceCategories.job2.period',
		descriptionKeys: [
			'experienceCategories.job2.description1',
			'experienceCategories.job2.description2',
			'experienceCategories.job2.description3',
		],
	},
	{
		titleKey: 'experienceCategories.job3.title',
		companyKey: 'experienceCategories.job3.company',
		locationKey: 'experienceCategories.job3.location',
		periodKey: 'experienceCategories.job3.period',
		descriptionKeys: [
			'experienceCategories.job3.description1',
			'experienceCategories.job3.description2',
			'experienceCategories.job3.description3',
		],
	},
	{
		titleKey: 'experienceCategories.job4.title',
		companyKey: 'experienceCategories.job4.company',
		locationKey: 'experienceCategories.job4.location',
		periodKey: 'experienceCategories.job4.period',
		descriptionKeys: [
			'experienceCategories.job4.description1',
			'experienceCategories.job4.description2',
			'experienceCategories.job4.description3',
		],
	},
];

function Experience(): JSX.Element {
	const { t } = useTranslation();

	return (
		<section className={styles.section} id="experience">
			<div className={styles.resumeCard}>
				<div className={styles.cardContent}>
					{experienceData.map((item, idx) => (
						<div key={idx} className={styles.jobBlock}>
							<h4 className={styles.jobTitle}>{t(item.titleKey).toUpperCase()}</h4>
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

export default Experience;
