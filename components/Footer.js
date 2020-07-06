import styles from "./footer.module.scss";

const Footer = () => {
	return (
		<div className={styles.footer}>
			<div className={styles.footerIcons} id={"social-links"}>
				<a href={"https://www.instagram.com/aleepoo/"} target={"_blank"} className={styles.img}>
					<img src={"/svg/instagram-brands.svg"} alt={"svg-img"} />
				</a>

				<a href={"https://www.linkedin.com/in/alex-kessinger-645813178/"} target={"_blank"} className={styles.img} >
					<img src={"/svg/linkedin-brands.svg"} alt={"svg-img"}/>
				</a>

				<a href={"https://twitter.com/KessingerAlex"} target={"_blank"} className={styles.img}>
					<img src={"/svg/twitter-brands.svg"} alt={"svg-img"}/>
				</a>
			</div>
		</div>
	);
};

export default Footer;