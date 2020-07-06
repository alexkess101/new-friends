import AboutUsItem from "./AboutUsItem.js";
import {useState} from "react";
import Modal from "./Modal.js";

import styles from "./aboutUs.module.scss";



const AboutUs = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleRickRoll = () => {
		setIsModalOpen(true);
	};

	return (
		<div className={styles.container}>
			<div className={styles.titleContainer}>
				<h2 className={styles.title}>About Us</h2>
				<h4 className={styles.subTitle}>
					Everyone creates the best memories in close friend groups.
					I'm trying to create a dope friend group from scratch. That sounds
					pretty fun right?
				</h4>
			</div>
			<div className={styles.imgContainer}>
				<img src={"/svg/couch-solid.svg"} alt={"svg-img"} className={styles.img}/>
				<img src={"/svg/expeditedssl-brands.svg"} alt={"svg-img"} className={styles.img}/>
				<img src={"/svg/glass-cheers-solid.svg"} alt={"svg-img"} className={styles.img}/>
				<img src={"/svg/handshake-regular.svg"} alt={"svg-img"} className={styles.img}/>
				<img src={"/svg/umbrella-beach-solid.svg"} alt={"svg-img"} className={styles.img}/>
			</div>

			<Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} className={styles.modalWrapper}>
				<img src={"/img/rick-rolled.png"} alt={"rick-roll"} className={styles.rickImg}/>

				<div className={styles.modal}>
					<h3>
						Psych!
					</h3>
					<p>
						Sorry, you just got Rick Rolled. But really, we don't have any videos of when we did this
						before because this is the first time it's been done EVER!
					</p>
				</div>
			</Modal>

			<AboutUsItem
				title={"What can you expect"}
				subTitle={<p>It'll be kind of weird...let's get real. You feel it, I feel it, we're all on the same page. But if you're really that skeptical you can check out a video of how we did it the first time <a onClick={handleRickRoll} href={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"} target={"_blank"}>here</a>.</p>}
				imgPath={"/img/log-hands.jpg"}
			/>

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
			/>

		</div>
	)
};

export default AboutUs;