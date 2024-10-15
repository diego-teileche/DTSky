import { CSSProperties } from "react"
import styles from "./styles.module.sass"

interface CustomStyle extends CSSProperties {
	"--w"?: string
	"--h"?: string
	"--rounded"?: string
	"--p"?: string
}

type Props = Readonly<{
	children?: React.ReactNode
	style?: CustomStyle
}>

export const DTRevealGlassCard = ({ children, style }: Props) => {
	return (
		<div style={style} className={`${styles["card"]}`}>
			<div className={`${styles["content"]}`}>{children}</div>
		</div>
	)
}
