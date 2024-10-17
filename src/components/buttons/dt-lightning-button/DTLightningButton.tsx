import { CSSProperties } from "react"
import styles from "./styles.module.sass"

interface CustomStyle extends CSSProperties {
	"--p"?: string
	"--color"?: string
	"--tracking"?: string
	"--borderColor"?: string
	"--hoverColor"?: string
	"--layerColor"?: string
}

type Props = Readonly<{
	children?: React.ReactNode
	href?: string
	style?: CustomStyle
}>

export const DTLightningButton = ({ children, href, style }: Props) => {
	return (
		<a href={href} style={style} className={`${styles["button"]}`}>
			<span className={`${styles["span"]}`}></span>
			<span className={`${styles["span"]}`}></span>
			<span className={`${styles["span"]}`}></span>
			<span className={`${styles["span"]}`}></span>
			{children}
		</a>
	)
}
