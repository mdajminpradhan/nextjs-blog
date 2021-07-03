import Image from 'next/image'
import thumbnail from '../assets/posts/thumbnail/thumbnail.jpg'
import styles from '../styles/components/post.module.scss'

const Post = () => {
  return (
    <div className={styles.post}>
      <div className={styles.post__thumbnail}>
        <Image src={thumbnail} alt="post thumbnail" />
      </div>
      <div className={styles.post__content}>
        <h3>Post title goes here</h3>
        <small>Uncategorized / 1 Nov, 2020 / by mac</small>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          libero dolore harum officia accusantium quia architecto ut minima
          sapiente quos perferendis enim itaque consectetur aliquam, vel ullam
          maxime debitis odit corrupti. Veritatis quae placeat pariatur
        </p>
      </div>
    </div>
  )
}

export default Post
