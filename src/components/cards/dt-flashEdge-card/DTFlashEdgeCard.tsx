import { CSSProperties } from "react"
import styles from "./styles.module.sass"

interface CustomStyle extends CSSProperties {
	"--size"?: string
	"--rounded"?: string
	"--inset"?: string
	"--bg"?: string
}

type Props = Readonly<{
	children?: React.ReactNode
	style?: CustomStyle
}>

export const DTFlashEdgeCard = ({ children, style }: Props) => {
	return (
		<div style={style} className={`${styles["box"]}`}>
			<span className={`${styles["span"]}`}>{children}</span>
		</div>
	)
}
