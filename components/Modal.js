import styles from "./modal.module.scss";

const Modal = ({children, isModalOpen, setIsModalOpen}) => {
	const modalClass = isModalOpen ? styles.modalOpen : styles.modalClose;

	const toggleModal = () => {
		setIsModalOpen(false);
	};

	return (
		<div className={modalClass} onClick={toggleModal}>
			<div className={styles.wrapper}>
				{children}
			</div>
		</div>
	)
};

export default Modal;