import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import thumbnail from '../assets/posts/thumbnail/thumbnail.jpg';
import styles from '../styles/components/post.module.scss';

const Post = ({ post, limit = '50', readMore = 'true' }) => {
	const [ image, setImage ] = useState('');

	// get post picture
	useEffect(
		() => {
			axios
				.post(`${process.env.NEXT_PUBLIC_BACKEND_API}/postpicture`, {
					id: post._id
				})
				.then((response) => {
					setImage(response.data.picture);
				})
				.catch((error) => console.log(error));
		},
		[ post ]
	);

	post && post.category && post.author && post.author.name && console.log(post.author);

	return (
		<div className={styles.post}>
			<div className={styles.post__thumbnail}>
				<div
					className={styles.thumbnailcontainer}
					style={{
						position: 'relative',
						width: '100%',
						height: '300px',
						maxHeight: '300px',
						maxWidth: '100%'
					}}
				>
					<Image
						src={image ? image : thumbnail}
						alt="post thumbnail"
						layout="fill"
						objectFit="cover"
						style={{
							width: '100%',
							height: '280px',
							maxHeight: '300px',
							maxWidth: '100%'
						}}
					/>
				</div>
			</div>
			<div className={styles.post__content}>
				<h3>{post.title}</h3>

				<small>
					{post && post.category ? post.category[0].title : 'Uncategorized'} /{' '}
					{post && post.date ? new Date(post.date).toDateString() : '1 May, 2021'} / post by
					{post && post.author ? post.author.name : 'Ajmin Pradhan'}
				</small>

				{post && post.description && <p>{post.description.substr(0, limit)}</p>}

				{readMore === 'true' ? <Link href={`/post/${post._id}`}>Read more</Link> : ''}
			</div>
		</div>
	);
};

export default Post;
