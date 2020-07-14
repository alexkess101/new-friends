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
				<span className={styles.exit}>X</span>
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
				title={"What you can expect 👀"}
				subTitle={<p>Think of The Bachelor but less "fakeness". There will be an interview
				process, filming, but that's it. It'll be kind of weird...let's get
				real. You feel it, I feel it, we're all on the same page.
				But if you're really that skeptical you can check out a video of how we did it the first
				time <a onClick={handleRickRoll} href={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"} target={"_blank"}>here</a>.</p>}
				imgPath={"/img/img-friends.jpg"}

			/>

			<AboutUsItem
				title={"What's the point? 🤷"}
				subTitle={<p>You've heard of COVID-19? Yeah, it's been a while since I've tried to make new friends and I'd
				imagine it's the same for you. If you have any questions I linked all my social
				media<a href={"#social-links"}> here</a> at the bottom of the page. Also, the guy in the All
				Blacks polo is me.</p>}
				imgPath={"/img/alex.jpg"}
				titleClass={styles.itemTitle}
				subTitleClass={styles.imgWrapper}
			/>

			<AboutUsItem
				title={"Is it safe? 😘"}
				subTitle={<p>Of course! Because of COVID-19 we'll be following the governors council as closely as possible.
				My dad works for the government so I really don't have a choice.</p>}
				imgPath={"/img/img-mask-girl.jpg"}
			/>

		</div>
	)
};

export default AboutUs;