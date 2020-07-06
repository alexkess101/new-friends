import styles from "./aboutUsItem.module.scss";

const AboutUsItem = ({title, subTitle, imgPath, titleClass="", subTitleClass=""}) => {
	return (
		<div className={styles.items}>
			<div className={styles.itemTitle + " " + titleClass}>
				<h3 className={styles.title}>
					{title}
				</h3>
				<p>
					{subTitle}
				</p>
			</div>

			<div className={styles.imgWrapper + " " + subTitleClass}>
				<div style={{backgroundImage: `url(${imgPath})`}} className={styles.img}/>
			</div>
		</div>
	)
};

export default AboutUsItem;