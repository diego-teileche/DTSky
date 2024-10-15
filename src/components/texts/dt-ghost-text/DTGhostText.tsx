import styles from "./styles.module.sass"

type Props = Readonly<{
	text1?: string
	text2?: string
}>

export const DTGhostText = ({ text1, text2 }: Props) => {
	return (
		<div className={`${styles["container"]}`}>
			<h1 className={`${styles["h1"]}`}>{text1}</h1>
			<h1 className={`${styles["h1"]}`}>{text2}</h1>
		</div>
	)
}
