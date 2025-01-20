import 'react';
import { useTranslation } from 'react-i18next';
import styles from './resume.module.css';

const educationData = [
	{
		titleKey: 'experienceCategories.education1.title1',
		companyKey: 'experienceCategories.education1.institution1',
		locationKey: 'experienceCategories.education1.location1',
		periodKey: 'experienceCategories.education1.period1',
		descriptionKeys: [
			'experienceCategories.education1.description1.1',
			'experienceCategories.education1.description2.1',
		],
	},
	{
		titleKey: 'experienceCategories.education2.title2',
		companyKey: 'experienceCategories.education2.institution2',
		locationKey: 'experienceCategories.education2.location2',
		periodKey: 'experienceCategories.education2.period2',
		descriptionKeys: [
			'experienceCategories.education2.description1.2',
			'experienceCategories.education2.description2.2',
			'experienceCategories.education2.description3.2',
		],
	},
];

function Education(): JSX.Element {
	const { t } = useTranslation();

	return (
		<section className={styles.section} id="education">
			<div className={styles.resumeCard}>
				<div className={styles.cardContent2}>
					{educationData.map((item, idx) => (
						<div key={idx} className={styles.jobBlock2}>
							<p className={styles.codeLine}>
								<span className={styles.brace}>{'{'}</span>
							</p>
							<p className={styles.codeLine}>
								&nbsp;&nbsp;<span className={styles.key}>{t('Program')}</span>
								<span className={styles.colon}>:</span>{' '}
								<span className={styles.jobTitle2}>{t(item.titleKey).toUpperCase()}</span>
								<span className={styles.comma}>,</span>
							</p>
							<p className={styles.codeLine}>
								&nbsp;&nbsp;<span className={styles.key}>{t('Organization')}</span>
								<span className={styles.colon}>:</span>{' '}
								<span className={styles.company2}>{t(item.companyKey)}</span>
								<span className={styles.comma}>,</span>
							</p>
							<p className={styles.codeLine}>
								&nbsp;&nbsp;<span className={styles.key}>{t('Dates')}</span>
								<span className={styles.colon}>:</span>{' '}
								<span className={styles.period2}>{t(item.periodKey)}</span>
								<span className={styles.comma}>,</span>
							</p>
							<p className={styles.codeLine}>
								&nbsp;&nbsp;<span className={styles.key}>{t('Highlights')}</span>
								<span className={styles.colon}>:</span> <span className={styles.bracket}>[</span>
							</p>
							<div className={styles.descriptionList2}>
								{item.descriptionKeys.map((descKey, i) => (
									<p key={i} className={styles.codeLine}>
										&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.value}>{t(descKey)}</span>
										{i < item.descriptionKeys.length - 1 && <span className={styles.comma}>,</span>}
									</p>
								))}
							</div>
							<p className={styles.codeLine}>
								&nbsp;&nbsp;<span className={styles.bracket}>]</span>
								<span className={styles.comma}>,</span>
							</p>
							<p className={styles.codeLine}>
								<span className={styles.brace}>{'}'} </span>
								<span className={styles.comma}>,</span>
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default Education;
