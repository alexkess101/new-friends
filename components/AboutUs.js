import AboutUsItem from "./AboutUsItem.js";

import styles from "./aboutUs.module.scss";

const AboutUs = () => {
	return (
		<div className={styles.container}>
			<div className={styles.titleContainer}>
				<h2 className={styles.title}>About Us</h2>
				<h4 className={styles.subTitle}>
					Everyone creates the best memories in close friend groups.
					I'm trying to create a dope friend group from scratch to have the
					best summer ever.
				</h4>
			</div>
			<div className={styles.imgContainer}>
				<img src={"/svg/couch-solid.svg"} alt={"svg-img"} className={styles.img}/>
				<img src={"/svg/expeditedssl-brands.svg"} alt={"svg-img"} className={styles.img}/>
				<img src={"/svg/glass-cheers-solid.svg"} alt={"svg-img"} className={styles.img}/>
				<img src={"/svg/handshake-regular.svg"} alt={"svg-img"} className={styles.img}/>
				<img src={"/svg/umbrella-beach-solid.svg"} alt={"svg-img"} className={styles.img}/>
			</div>

			<AboutUsItem
				title={"What can you expect"}
				subTitle={"Honestly, I'm not sure. Definitely a different take on things. I think it'll be fun, but my mom" +
				"doesn't. Please help me prove her wrong."}
				imgPath={"/img/log-hands.jpg"}
			/>

			<AboutUsItem
				title={"What can you expect"}
				subTitle={"Honestly, I'm not sure. Definitely a different take on things. I think it'll be fun, but my mom" +
				"doesn't. Please help me prove her wrong."}
				imgPath={"/img/log-hands.jpg"}
				isReversed={true}
			/>

			<AboutUsItem
				title={"What can you expect"}
				subTitle={"Honestly, I'm not sure. Definitely a different take on things. I think it'll be fun, but my mom" +
				"doesn't. Please help me prove her wrong."}
				imgPath={"/img/log-hands.jpg"}
			/>

		</div>
	)
};

export default AboutUs;