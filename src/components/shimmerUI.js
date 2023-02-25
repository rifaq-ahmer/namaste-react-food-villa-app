import styles from "./shimmer.module.css";

export default function Shimmer() {
	return (
		<div>
			<div className={[styles.shine, styles.photo].join(" ")} />
			<div className={styles.div}>
				<div className={[styles.shine, styles.lines].join(" ")} />
				<div className={[styles.shine, styles.lines].join(" ")} />
			</div>
		</div>
	);
}
