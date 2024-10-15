import { CSSProperties } from "react"
import styles from "./styles.module.sass"

interface CustomStyle extends CSSProperties {
	"--size"?: string
	"--layerBg"?: string
}

type Props = Readonly<{
	text?: string
	style?: CustomStyle
}>

export const DTNeonText = ({ text, style }: Props) => {
	return (
		<div style={style} className={`${styles["box"]}`}>
			<div className={`${styles["lightbar"]}`}></div>
			<div className={`${styles["topLayer"]}`}></div>
			<h2>{text}</h2>
		</div>
	)
}
