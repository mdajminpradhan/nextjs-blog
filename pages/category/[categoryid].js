import styles from '../../styles/pages/categoryposts.module.scss';
import Posts from '../../components/Posts';
import Base from '../../components/Base';
import axios from 'axios';

export default function CategoryPosts({ posts }) {
	console.log(posts);

	return (
		<Base>
			<div className={styles.categoryposts__posts}>
				<Posts posts={posts} />
			</div>
		</Base>
	);
}

export async function getStaticPaths() {
	const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_API}/categories`);

	const data = response.data;

	const pathss = data.map((cate) => {
		return {
			params: {
				categoryid: cate._id
			}
		};
	});

	return {
		fallback: false,
		paths: pathss
	};
}

export async function getStaticProps(context) {
	const categoryid = context.params.categoryid;

	const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_API}/postsbycategory`, {
		category: categoryid
	});

	const data = response.data;

	return {
		props: {
			posts: data
		}
	};
}
