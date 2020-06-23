import styles from "./AboutUsItem.module.scss";

const AboutUsItem = ({title, subTitle, imgPath, isReversed=false}) => {
	return (
		<div className={styles.items}>
			{
				isReversed &&
				<div style={{backgroundImage: `url(${imgPath})`}} className={styles.img}/>
			}
			<div className={styles.itemTitle}>
				<h3>
					{title}
				</h3>
				<p>
					{subTitle}
				</p>
			</div>
			{
				!isReversed &&
				<div style={{backgroundImage: `url(${imgPath})`}} className={styles.img}/>
			}

		</div>
	)
};

export default AboutUsItem;