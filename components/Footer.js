import Link from 'next/link';
import styles from '../styles/components/footer.module.scss';
import { FaFacebookSquare, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaGithub } from 'react-icons/fa';
import { useRouter } from 'next/dist/client/router';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Footer = () => {
	const route = useRouter();

	const [ categories, setCateogires ] = useState([]);

	useEffect(() => {
		axios
			.get(`${process.env.NEXT_PUBLIC_BACKEND_API}/categories`)
			.then((response) => {
				setCateogires(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	const handleSocial = (social) => {
		switch (social) {
			case 'fb':
				route.push('https://facebook.com/imajminpradhan');
			case 'twitter':
				route.push('https://twitter.com/imajminpradhan');
			case 'instagram':
				route.push('https://instagram.com/imajminpradhan');
			case 'linkedin':
				route.push('https://linkedin.com/in/imajminpradhan');
			case 'youtube':
				route.push('https://www.youtube.com/channel/UCszKO2ZuGm1HbEybGYkZvhg');
			case 'github':
				route.push('https://github.com/mdajminpradhan');

			default:
				return null;
		}
	};

	return (
		<div className={styles.footer}>
			<div className={`${styles.container} container`}>
				<div className={styles.footer__colOne}>
					<h4 className={styles.footer__colTitle}>About Us</h4>
					<span className={styles.separator} />

					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit Deserunt cumque expedita laborum soluta
						tenetur nemo laboriosam explicabo
					</p>
				</div>
				<div className={styles.footer__colTwo}>
					<h4 className={styles.footer__colTitle}>Recent Posts</h4>
					<span className={styles.separator} />

					<ul>
						<li>
							<Link href="/postid">Lorem ipsum dolor sit amet consectetur adipisicing</Link>
						</li>
						<li>
							<Link href="/postid">Lorem ipsum dolor sit amet consectetur adipisicing</Link>
						</li>
						<li>
							<Link href="/postid">Lorem ipsum dolor sit amet consectetur adipisicing</Link>
						</li>
						<li>
							<Link href="/postid">Lorem ipsum dolor sit amet consectetur adipisicing</Link>
						</li>
					</ul>
				</div>
				<div className={styles.footer__colThree}>
					<h4 className={styles.footer__colTitle}>Categories</h4>
					<span className={styles.separator} />

					<ul>
						{categories && categories.length >= 1 ? (
							categories.map((cate) => (
								<li key={cate._id}>
									<Link href={`/category/${cate._id}`}>{cate.title}</Link>
								</li>
							))
						) : (
							<p>No categories found!!</p>
						)}
					</ul>
				</div>
				<div className={styles.footer__colFour}>
					<h4 className={styles.footer__colTitle}>Follow Us Social</h4>
					<span className={styles.separator} />

					<div className={styles.gallery}>
						<FaFacebookSquare onClick={() => handleSocial('fb')} />
						<FaTwitter onClick={() => handleSocial('twitter')} />
						<FaInstagram onClick={() => handleSocial('instagram')} />
						<FaLinkedin onClick={() => handleSocial('linkedin')} />
						<FaYoutube onClick={() => handleSocial('youtube')} />
						<FaGithub onClick={() => handleSocial('github')} />
					</div>
				</div>
			</div>
			<div className="container">
				<p className={styles.copyright}>All right resereved by &copy; Mr Pradhan</p>
			</div>
		</div>
	);
};

export default Footer;
