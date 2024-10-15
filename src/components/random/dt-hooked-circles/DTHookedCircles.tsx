import { CSSProperties } from "react"
import styles from "./styles.module.sass"

interface CustomStyle extends CSSProperties {
	"--size"?: string
}

type Props = Readonly<{
	style?: CustomStyle
}>

export const DTHookedCircles = ({ style }: Props) => {
	return (
		<div style={style} className={`${styles["box"]}`}>
			<div className={`${styles["circle"]}`}></div>
			<div className={`${styles["circle"]}`}></div>
		</div>
	)
}
