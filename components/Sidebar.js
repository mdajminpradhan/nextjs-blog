import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from '../styles/components/sidebar.module.scss';
import axios from 'axios';

import { RiArrowRightSLine } from "react-icons/ri";

const Sidebar = () => {
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

	return (
		<div className={styles.sidebar}>
			<div className={styles.categories}>
				<h4>Categories</h4>
				<ul>
					{categories && categories.length >= 1 ? (
						categories.map((cate) => (
							<li key={cate._id}>
								<Link href={`/category/${cate._id}`}>
									<div>
										<span>{cate.title}</span>
										<RiArrowRightSLine />
									</div>
								</Link>
							</li>
						))
					) : (
						<p>No categories found!!</p>
					)}
				</ul>
			</div>
		</div>
	);
};

export default Sidebar;
