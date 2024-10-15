import { CSSProperties } from "react"
import styles from "./styles.module.sass"

interface CustomStyle extends CSSProperties {
	"--p"?: string
	"--rounded"?: string
}

type Props = Readonly<{
	children?: React.ReactNode
	style?: CustomStyle
}>

export const DTGlassCard = ({ children, style }: Props) => {
	return (
		<div style={style} className={`${styles["card"]}`}>
			{children}
		</div>
	)
}
