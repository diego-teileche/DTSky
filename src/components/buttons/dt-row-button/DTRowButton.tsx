import { CSSProperties } from "react"
import styles from "./styles.module.sass"

interface CustomStyle extends CSSProperties {
	"--w"?: string
	"--h"?: string
	"--bg"?: string
	"--gap"?: string
	"--color"?: string
	"--tracking"?: string
	"--fontSize"?: string
	"--bgHover"?: string
	"--color-hover"?: string
	"--line-h"?: string
	"--line-hover-w"?: string
}

type Props = Readonly<{
	text: string
	href?: string
	style?: CustomStyle
}>

export const DTRowButton = ({ text, href, style }: Props) => {
	return (
		<a href={href} style={style} className={`${styles["button"]}`}>
			<i></i>
			<span>{text}</span>
		</a>
	)
}
