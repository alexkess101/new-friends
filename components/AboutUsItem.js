import styles from "./AboutUsItem.module.scss";

const AboutUsItem = ({title, subTitle, imgPath, isReversed=false}) => {
	return (
		<div className={styles.items}>
				{
					isReversed && (
						<div className={styles.imgWrapper}>
							<div style={{backgroundImage: `url(${imgPath})`}} className={styles.img}/>
						</div>
					)
				}

			<div className={styles.itemTitle}>
				<h3 className={styles.title}>
					{title}
				</h3>
				<p>
					{subTitle}
				</p>
			</div>

				{
					!isReversed && (
						<div className={styles.imgWrapper}>
							<div style={{backgroundImage: `url(${imgPath})`}} className={styles.img}/>
						</div>
					)
				}

		</div>
	)
};

export default AboutUsItem;