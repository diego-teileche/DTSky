import { CSSProperties } from "react"
import styles from "./styles.module.sass"

interface CustomStyle extends CSSProperties {
	"--fontSize"?: string
	"--p"?: string
	"--bg"?: string
	"--squareSize"?: string
}

type Props = Readonly<{
	children?: React.ReactNode
	href?: string
	style?: CustomStyle
}>

export const DTSquaresButton = ({ children, href, style }: Props) => {
	return (
		<a href={href} style={style} className={`${styles["button"]}`}>
			<span className={`${styles["span"]}`}>{children}</span>
			<i className={`${styles["i"]}`}></i>
		</a>
	)
}
