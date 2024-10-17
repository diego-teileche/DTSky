import { CSSProperties } from "react"
import styles from "./styles.module.sass"

interface CustomStyle extends CSSProperties {
	"--color"?: string
	"--gradient1"?: string
	"--gradient2"?: string
	"--gradient3"?: string
	"--p"?: string
	"--rounded"?: string
	"--bg"?: string
	"--fontSize"?: string
}

type Props = Readonly<{
	children: React.ReactNode
	href?: string
	style?: CustomStyle
}>

export const DTModernButton = ({ children, href, style }: Props) => {
	return (
		<a href={href} style={style} className={`${styles["button"]}`}>
			<span className={`${styles["span"]}`}>{children}</span>
		</a>
	)
}
