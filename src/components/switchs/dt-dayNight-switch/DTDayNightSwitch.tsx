import styles from "./styles.module.sass"

export const DTDayNightSwitch = () => {
	return (
		<div className={`${styles["container"]}`}>
			<label className={`${styles["switch"]}`}>
				<input type="checkbox" className={`${styles["switch__input"]}`} />
				<span className={`${styles["switch__background"]}`}>
					<span className={`${styles["switch__toggle"]}`}>
						<span className={`${styles["switch__moon"]}`}></span>
					</span>
					<span className={`${styles["switch__stars"]}`}></span>
					<span className={`${styles["switch__clouds"]}`}></span>
				</span>
			</label>
		</div>
	)
}
