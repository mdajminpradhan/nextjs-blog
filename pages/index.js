import styles from '../styles/pages/home.module.scss';
import Posts from '../components/Posts';
import Base from '../components/Base';
import axios from 'axios';

export default function Home({ posts }) {
	return (
		<Base>
			<div className={styles.home__posts}>
				<Posts posts={posts} />
			</div>
		</Base>
	);
}

export async function getStaticProps() {
	
	const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_API}/posts`);

	const data = await response.data;

	return {
		props: {
			posts: data
		}
	};
}
