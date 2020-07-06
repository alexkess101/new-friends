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
				<a href={"https://forms.gle/8uqgoT7yQ26hYNoVA"} className={"btn--orange " + styles.firstBtn}>Try it out</a>
				<a href={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"} target={"_blank"} className={"btn--white"}>Get Rick Rolled</a>
			</div>
		</div>
	)
};

export default CallToAction;