import { Fragment, useState } from 'react';
import Pagination from './Pagination';
import Post from './Post';

const Posts = ({ posts }) => {
	const [ currentPage, setCurrentPage ] = useState(1);
	const [ postsPerPage ] = useState(10);

	// get current page
	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	return (
		<Fragment>
			<div className="posts">
				{posts && posts.length >= 1 ? (
					currentPosts.map((post) => <Post key={post._id} post={post} />)
				) : (
					<p>No posts found</p>
				)}
			</div>
			<Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
		</Fragment>
	);
};

export default Posts;
