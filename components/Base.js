import styles from '../styles/components/base.module.scss';
import Sidebar from '../components/Sidebar';

export default function Base({ children }) {

	return (
		<div className={styles.base}>
			<div className={`${styles.container} container`}>
				{children}
				<div className={styles.base__sidebar}>
					<Sidebar />
				</div>
			</div>
		</div>
	);
}
