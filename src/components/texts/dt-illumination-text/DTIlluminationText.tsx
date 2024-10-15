import { CSSProperties } from "react"
import styles from "./styles.module.sass"

interface CustomStyle extends CSSProperties {
	"--fontSize"?: string
	"--color"?: string
	"--layerColor"?: string
}

type Props = Readonly<{
	text?: string
	style?: CustomStyle
}>

export const DTIlluminationText = ({ text, style }: Props) => {
	return (
		<h1
			data-text={`\u00A0${text}\u00A0`}
			style={style}
			className={`${styles["h1"]}`}
		>
			&nbsp;{text}&nbsp;
		</h1>
	)
}
