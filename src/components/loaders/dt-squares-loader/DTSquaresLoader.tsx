import { CSSProperties } from "react"
import styles from "./styles.module.sass"

interface CustomStyle extends CSSProperties {
	"--size"?: string
	"--color"?: string
}

type Props = Readonly<{
	style?: CustomStyle
}>

export const DTSquaresLoader = ({ style }: Props) => {
	return (
		<div style={style} className={`${styles["swapping-squares-spinner"]}`}>
			<div className={`${styles["square"]}`}></div>
			<div className={`${styles["square"]}`}></div>
			<div className={`${styles["square"]}`}></div>
			<div className={`${styles["square"]}`}></div>
		</div>
	)
}
