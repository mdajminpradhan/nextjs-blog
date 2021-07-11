import Link from 'next/link';
import Image from 'next/image'

import styles from '../styles/pages/about.module.scss';
import ImageOne from '../assets/about/1.jpg';

const About = () => {
	return (
		<div className={styles.about}>
			<div className={`${styles.container} container`}>
				<div className={styles.about__left}>
					<h2>Wellome!</h2>
					<h1>Best & traditional place from the whole world</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Ut enim ad minim veniam.
					</p>
					<p>
						Mauris tempus erat laoreet turpis lobortis, eu tincidunt erat fermentum. Aliquam non tincidunt
						urna. Integer tincidunt nec nisl vitae ullamcorper. Proin sed ultrices erat.
					</p>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima itaque nemo, sequi quo quam sit natus, fugit quos culpa temporibus illo eligendi sapiente blanditiis! Aut cupiditate, rem libero ab, eligendi doloremque officia possimus nemo nesciunt atque aliquid voluptas ipsam laudantium delectus quae impedit similique incidunt debitis fugit excepturi Enim perferendis rem consequuntur quo doloremque dolore
					</p>
					<Link href="/contact">
						<button>CONTACT NOW</button>
					</Link>
				</div>
				<div className={styles.about__right}>
					<Image src={ImageOne} alt="ajmin pradhan nextjs blog" />
					
				</div>
			</div>
		</div>
	);
};

export default About;
