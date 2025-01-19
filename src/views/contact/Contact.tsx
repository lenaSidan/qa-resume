import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { send } from 'emailjs-com';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import styles from './contact.module.css';

function Contact(): JSX.Element {
	const { t } = useTranslation();
	const [messageStatus, setMessageStatus] = useState<string | null>(null);
	const [formData, setFormData] = useState({
		from_name: '',
		reply_to: '',
		message: '',
	});

	// Функция для отправки формы
	const handleSubmit = (e: React.FormEvent): void => {
		e.preventDefault();

		send(
			'service_s8wnl5b', // Service ID
			'template_9fqxwvv', // Template ID
			formData,
			'YhxTayjW1_hV_5Lqf' // Public Key
		)
			.then(() => {
				setMessageStatus('success');
				setFormData({ from_name: '', reply_to: '', message: '' });
			})
			.catch(() => {
				setMessageStatus('error');
			});
		setTimeout(() => setMessageStatus(null), 5000);
	};

	// Функция для изменения значений полей
	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
		const { name, value } = e.target;
		setFormData((prevData) => ({ ...prevData, [name]: value }));
	};

	// Функция для очистки конкретного поля
	const handleClearField = (field: keyof typeof formData): void => {
		setFormData((prevData) => ({ ...prevData, [field]: '' }));
	};

	return (
		<div className={styles.contactMeBlock}>
			<section className={styles.contactMeSection} id="contactMe">
				<div className={styles.title}>{t('Contact Me').toUpperCase()}</div>

				{messageStatus && (
					<div
						className={messageStatus === 'success' ? styles.successMessage : styles.errorMessage}
					>
						{messageStatus === 'success'
							? t('Your message has been sent. Thank you!')
							: t('There was an issue sending your message. Please try again later.')}
					</div>
				)}

				<div className={styles.contactBlock}>
					<form className={styles.contactForm} onSubmit={handleSubmit}>
						<div className={styles.inputWrapper}>
							<input
								type="text"
								name="from_name"
								className={styles.inputField}
								placeholder={t('Your Name')}
								value={formData.from_name}
								onChange={handleChange}
								required
							/>
							<button
								type="button"
								className={styles.clearFieldButton}
								onClick={() => handleClearField('from_name')}
								aria-label={t('Clear Name Field')}
							>
								<HighlightOffIcon />
							</button>
						</div>

						<div className={styles.inputWrapper}>
							<input
								type="email"
								name="reply_to"
								className={styles.inputField}
								placeholder={t('Your Email')}
								value={formData.reply_to}
								onChange={handleChange}
								required
							/>
							<button
								type="button"
								className={styles.clearFieldButton}
								onClick={() => handleClearField('reply_to')}
								aria-label={t('Clear Email Field')}
							>
								<HighlightOffIcon />
							</button>
						</div>

						<div className={styles.inputWrapper}>
							<textarea
								name="message"
								className={styles.textArea}
								placeholder={t('Your Message')}
								value={formData.message}
								onChange={handleChange}
								required
							></textarea>
							<button
								type="button"
								className={styles.clearFieldButton}
								onClick={() => handleClearField('message')}
								aria-label={t('Clear Message Field')}
							>
								<HighlightOffIcon />
							</button>
						</div>

						<button type="submit" className={styles.submitButton}>
							{t('Send Message').toUpperCase()}
						</button>
					</form>
				</div>

				<div className={styles.contactInfo}>
					<div className={styles.addressBox}>
						<p className={styles.contactText}>{t('Address')}:</p>
						<p className={styles.address}>Munich, Germany</p>
					</div>
					<div className={styles.contactBox}>
						<div className={styles.mailBox}>
							<p className={styles.contactText}>{t('Find me on')}:</p>
							<div className={styles.socialLinks}>
								<a
									href="https://www.linkedin.com/in/elena-sidanova-baa81b2b7/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<span className={styles.tag}>LinkedIn</span>
								</a>
								<span className={styles.divider}>|</span>
								<a href="https://github.com/lenaSidan" target="_blank" rel="noopener noreferrer">
									<span className={styles.tag}>GitHub</span>
								</a>
							</div>
						</div>
						<div className={styles.mailBox}>
							<p className={styles.contactText}>{t('or contact me directly at')}:</p>
							<a className={styles.email} href="mailto:l.sidan@gmx.de">
								l.sidan@gmx.de
							</a>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Contact;
