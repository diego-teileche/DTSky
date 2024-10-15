import { CSSProperties } from "react"
import styles from "./styles.module.sass"

interface CustomStyle extends CSSProperties {
	"--size"?: string
	"--upBg"?: string
	"--downBg"?: string
}

type Props = Readonly<{
	children?: React.ReactNode
	style?: CustomStyle
}>

export const DTInvertedBorderCard = ({ children, style }: Props) => {
	return (
		<div style={style} className={`${styles["card"]}`}>
			<div className={`${styles["imgBx"]}`}></div>
			<div className={`${styles["content"]}`}>
				<span className={`${styles["price"]}`}>{children}</span>
			</div>
		</div>
	)
}
