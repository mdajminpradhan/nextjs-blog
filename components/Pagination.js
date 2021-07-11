import styles from '../styles/components/pagination.module.scss';

function Pagination({ postsPerPage, totalPosts, paginate }) {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
		pageNumbers.push(i);
	}

	return (
		<ul className={styles.pagination}>
			{pageNumbers.map((number) => (
				<li onClick={() => paginate(number)} key={number}>
					<span>{number}</span>
				</li>
			))}
		</ul>
	);
}

export default Pagination;