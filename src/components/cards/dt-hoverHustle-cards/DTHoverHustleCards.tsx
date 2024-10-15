import { CSSProperties } from "react"
import styles from "./styles.module.sass"

interface CustomStyle extends CSSProperties {
	"--size"?: string
	"--bg"?: string
	"--p"?: string
	"--rounded"?: string
}

type Props = Readonly<{
	children1?: React.ReactNode
	children2?: React.ReactNode
	children3?: React.ReactNode
	children4?: React.ReactNode
	style?: CustomStyle
}>

export const DTHoverHustleCards = ({
	children1,
	children2,
	children3,
	children4,
	style,
}: Props) => {
	return (
		<div style={style} className={`${styles["cards"]}`}>
			<div className={`${styles["card"]}`}>{children1}</div>
			<div
				className={`${styles["card"]} ${styles["element"]} ${styles["element-1"]}`}
			>
				{children2}
			</div>
			<div
				className={`${styles["card"]} ${styles["element"]} ${styles["element-2"]}`}
			>
				{children3}
			</div>
			<div
				className={`${styles["card"]} ${styles["element"]} ${styles["element-3"]}`}
			>
				{children4}
			</div>
		</div>
	)
}
