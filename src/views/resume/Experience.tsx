import 'react';
import { useTranslation } from 'react-i18next';
import styles from './resume.module.css';

const experienceData = [
	{
		titleKey: 'experienceCategories.job1.title1',
		companyKey: 'experienceCategories.job1.company1',
		locationKey: 'experienceCategories.job1.location1',
		periodKey: 'experienceCategories.job1.period1',
		descriptionKeys: [
			'experienceCategories.job1.description1.1',
			'experienceCategories.job1.description2.1',
			'experienceCategories.job1.description3.1',
		],
	},
	{
		titleKey: 'experienceCategories.job2.title2',
		companyKey: 'experienceCategories.job2.company2',
		locationKey: 'experienceCategories.job2.location2',
		periodKey: 'experienceCategories.job2.period2',
		descriptionKeys: [
			'experienceCategories.job2.description1.2',
			'experienceCategories.job2.description2.2',
			'experienceCategories.job2.description3.2',
		],
	},
	{
		titleKey: 'experienceCategories.job3.title3',
		companyKey: 'experienceCategories.job3.company3',
		locationKey: 'experienceCategories.job3.location3',
		periodKey: 'experienceCategories.job3.period3',
		descriptionKeys: [
			'experienceCategories.job3.description1.3',
			'experienceCategories.job3.description2.3',
			'experienceCategories.job3.description3.3',
		],
	},
	{
		titleKey: 'experienceCategories.job4.title4',
		companyKey: 'experienceCategories.job4.company4',
		locationKey: 'experienceCategories.job4.location4',
		periodKey: 'experienceCategories.job4.period4',
		descriptionKeys: [
			'experienceCategories.job4.description1.4',
			'experienceCategories.job4.description2.4',
			'experienceCategories.job4.description3.4',
		],
	},
];

function Experience(): JSX.Element {
	const { t } = useTranslation();

	return (
		<section className={styles.section} id="experience">
			<div className={styles.resumeCard}>
				<div className={styles.cardContent2}>
					{experienceData.map((item, idx) => (
						<div key={idx} className={styles.jobBlock2}>
							<p className={styles.codeLine}>
								<span className={styles.brace}>{'{'}</span>
							</p>
							<p className={styles.codeLine}>
								&nbsp;&nbsp;<span className={styles.key}>{t('Position')}</span>
								<span className={styles.colon}>:</span>{' '}
								<span className={styles.jobTitle2}>{t(item.titleKey).toUpperCase()}</span>
								<span className={styles.comma}>,</span>
							</p>
							<p className={styles.codeLine}>
								&nbsp;&nbsp;<span className={styles.key}>{t('Company')}</span>
								<span className={styles.colon}>:</span>{' '}
								<span className={styles.company}>
									{t(item.companyKey)}, {t(item.locationKey)}
								</span>
								<span className={styles.comma}>,</span>
							</p>
							{/* <p className={styles.codeLine}>
								&nbsp;&nbsp;<span className={styles.key}>{t('Location')}</span>
								<span className={styles.colon}>:</span>{' '}
								<span className={styles.company}>{t(item.locationKey)}</span>
								<span className={styles.comma}>,</span>
							</p> */}
							<p className={styles.codeLine}>
								&nbsp;&nbsp;<span className={styles.key}>{t('Dates')}</span>
								<span className={styles.colon}>:</span>{' '}
								<span className={styles.period}>{t(item.periodKey)}</span>
								<span className={styles.comma}>,</span>
							</p>
							<p className={styles.codeLine}>
								&nbsp;&nbsp;<span className={styles.key}>{t('Highlights')}</span>
								<span className={styles.colon}>:</span> <span className={styles.bracket}>[</span>
							</p>
							{item.descriptionKeys.map((descKey, i) => (
								<p key={i} className={styles.codeLine}>
									&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.value}>{t(descKey)}</span>
									{i < item.descriptionKeys.length - 1 && <span className={styles.comma}>,</span>}
								</p>
							))}
							<p className={styles.codeLine}>
								&nbsp;&nbsp;
								<span className={styles.bracket}>{']'}</span>
								<span className={styles.comma}>,</span>
							</p>
							<p className={styles.codeLine}>
								<span className={styles.brace}>{'}'}</span>
								<span className={styles.comma}>,</span>
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default Experience;
