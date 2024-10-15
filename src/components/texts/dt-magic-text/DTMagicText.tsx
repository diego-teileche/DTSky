import { CSSProperties } from "react"
import styles from "./styles.module.sass"

interface CustomStyle extends CSSProperties {
	"--fontSize"?: string
}

type Props = Readonly<{
	text?: string
	style?: CustomStyle
}>

export const DTMagicText = ({ text, style }: Props) => {
	return (
		<div style={style} className={`${styles["container"]}`}>
			<h1 className={`${styles["h1"]}`}>{text}</h1>
		</div>
	)
}
