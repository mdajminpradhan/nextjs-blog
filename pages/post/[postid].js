import styles from '../../styles/pages/postdetail.module.scss';
import Base from '../../components/Base';
import axios from 'axios';
import Post from '../../components/Post'

const PostDetail = ({ post }) => {

	return (
		<Base>
			<div className={styles.postdetail__post}>
				<Post limit="50000" readMore="false" post={post} />
			</div>
		</Base>
	);
};

export async function getStaticPaths() {
	const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_API}/postsid`);

	const data = response.data;

	const pathss = data.map((cate) => {
		return {
			params: {
				postid: cate._id
			}
		};
	});

	return {
		fallback: false,
		paths: pathss
	};
}

export async function getStaticProps(context) {
	const postid = context.params.postid;

	const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_API}/post/${postid}`);

	const data = response.data;

	return {
		props: {
			post: data
		}
	};
}

export default PostDetail;
