import styles from "./callToAction.module.scss";

const CallToAction = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.titleWrapper}>
				<h2 className={styles.title}>
					"Life is more fun when you're spontaneous"
				</h2>
				<p className={styles.subTitle}>
					- Alex Kessinger
				</p>
			</div>

			<div>
				<button className={"btn--orange " + styles.firstBtn}>Try it out</button>
				<a href={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"} target={"_blank"} className={"btn--white"}>Get Rick Rolled</a>
			</div>
		</div>
	)
};

export default CallToAction;