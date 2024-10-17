import { CSSProperties } from "react"
import styles from "./styles.module.sass"

interface CustomStyle extends CSSProperties {
	"--p"?: string
	"--bg"?: string
	"--color"?: string
	"--fontSize"?: string
}

type Props = Readonly<{
	text: string
	href?: string
	style?: CustomStyle
}>

export const DTHoverhueButton = ({ text, href, style }: Props) => {
	return (
		<a href={href} style={style} className={`${styles["button"]}`}>
			<span className={`${styles["span"]}`}>{text}</span>
			<span className={`${styles["span"]}`}>{text}</span>
		</a>
	)
}
