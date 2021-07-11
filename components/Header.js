import Link from 'next/link';
import styles from '../styles/components/header.module.scss';
import { RiBarChartHorizontalLine } from 'react-icons/ri';
import { Fragment, useState } from 'react';

const Header = () => {
	const [ showMobileMenu, setShowMobileMenu ] = useState(false);

	return (
		<Fragment>
			<div className={styles.header}>
				<div className={`${styles.container} container`}>
					<div className={styles.header__left}>
						<Link href="/">
							<h1 className="logo">Traveller!</h1>
						</Link>
					</div>
					<div className={styles.header__right}>
						<ul>
							<li>
								<Link href="/">Home</Link>
							</li>
							<li>
								<Link href="/about">About</Link>
							</li>
							<li>
								<Link href="/gallery">Gallery</Link>
							</li>
							<li>
								<Link href="/pages">Pages</Link>
							</li>
							<li>
								<Link href="/contact">Contact Us</Link>
							</li>
						</ul>
					</div>

					<RiBarChartHorizontalLine onClick={() => setShowMobileMenu(!showMobileMenu)} />
				</div>
			</div>
			<div className={`${styles.mobilemenu} ${showMobileMenu ? styles.showMobileMenu : ''}`}>
				<ul>
					<li>
						<Link href="/">Home</Link>
					</li>
					<li>
						<Link href="/about">About</Link>
					</li>
					<li>
						<Link href="/gallery">Gallery</Link>
					</li>
					<li>
						<Link href="/pages">Pages</Link>
					</li>
					<li>
						<Link href="/contact">Contact Us</Link>
					</li>
				</ul>
			</div>
		</Fragment>
	);
};

export default Header;
