import styles from "./header.module.scss";

const Header = () => {
	return (
		<header>
			<div className={styles.header}>
				<div className={styles.container}>
					<div className={styles.title}>
						This Could Be Fun
					</div>
					<div className={styles.subTitle}>
						Creating your new best friend group
					</div>
				</div>
			</div>
		</header>
	)
};

export default Header;