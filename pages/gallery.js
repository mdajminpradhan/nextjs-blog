import Image from 'next/image';
import styles from '../styles/pages/gallery.module.scss';


const array = [
    require('../assets/gallery/File_0.jpg'),
    require('../assets/gallery/File_1.jpg'),
    require('../assets/gallery/File_2.jpg'),
    require('../assets/gallery/File_3.jpg'),
    require('../assets/gallery/File_4.jpg'),
    require('../assets/gallery/File_5.jpg'),
    require('../assets/gallery/File_6.jpg'),
    require('../assets/gallery/File_7.jpg'),
    require('../assets/gallery/File_8.jpg'),
    require('../assets/gallery/File_10.jpg'),
    require('../assets/gallery/File_11.jpg')
]

const Gallery = () => {
    return (
        <div className={styles.gallery}>
			<div className={`${styles.container} container`}>
                <h1>Travel Gallery</h1>

                <div className={styles.images}>
                    {
                        array.map(image => (
                            <Image src={image} alt="gallery" />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Gallery;