import { useState } from 'react';
import { BsPhone } from 'react-icons/bs';
import { FiMail, FiMapPin } from 'react-icons/fi';

import styles from '../styles/pages/contact.module.scss';

const Contact = () => {
	const [ message, setMessage ] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();

		setTimeout(() => {
			setMessage("Something wen't wrong on server side. Please be wait until it's fixed ");
		}, 2000);
	};

	return (
		<div className={styles.contact}>
			<div className={`${styles.container} container`}>
				<h1>Call us or visit place</h1>
				<small>Send us your experince so that we can share it to the world!</small>

				<div className={styles.contact__header}>
					<div className={styles.contact_box}>
						<div>
							<BsPhone />
							<span>Phone: </span>
							<br />
							<br />
							<pre>+ 44 123 456 78 90 </pre>
							<pre> + 844 123 444 77 88 </pre>
						</div>
					</div>
					<div className={styles.contact_box}>
						<div>
							<FiMapPin />
							<span>Address: </span>
							<br />
							<br />
							<p>Box 565, Pinney's Beach, Charlestown,</p>
							<p>Nevis, West Indies, Caribbean</p>
						</div>
					</div>
					<div className={styles.contact_box}>
						<div>
							<FiMail />
							<span>Email: </span>
							<br />
							<br />
							<p>contact@example.com</p>
							<p> info@example.com</p>
						</div>
					</div>
				</div>
				<div className={styles.contact__body}>
					<div className={styles.contact__bodyLeft}>
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3194.355137281425!2d117.99757731504646!3d36.81000897994643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35ea8b6bf2586883%3A0x6c039a0107b3f179!2sShandong%20University%20of%20Technology!5e0!3m2!1sen!2sbd!4v1622655401731!5m2!1sen!2sbd"
							width="100%"
							height="100%"
							style={{ border: 0 }}
							allowfullscreen=""
							title="khabar map"
							loading="lazy"
						/>
					</div>
					<div className={styles.contact__bodyRight}>
						<h1>Send us a message</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
						<form action="">
							<div className={styles.input}>
								<input type="text" placeholder="Your name" required />
								<input type="email" placeholder="Email address" required />
							</div>
							<input type="text" placeholder="Subject" required />
							<textarea name="" id="" cols="30" rows="7" />
							<button onClick={handleSubmit}>Submit</button>
                            <br />
                            <br />
                            {message}
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
