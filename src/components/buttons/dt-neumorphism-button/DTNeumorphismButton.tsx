import { CSSProperties } from "react"
import styles from "./styles.module.sass"

interface CustomStyle extends CSSProperties {
	"--color"?: string
	"--p"?: string
	"--fontSize"?: string
	"--rounded"?: string
	"--bg"?: string
	"--shadow1"?: string
	"--shadow2"?: string
}

type Props = Readonly<{
	children: React.ReactNode
	href?: string
	style?: CustomStyle
}>

export const DTNeumorphismButton = ({ children, href, style }: Props) => {
	return (
		<a href={href} style={style} className={`${styles["button"]}`}>
			{children}
		</a>
	)
}
