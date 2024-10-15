import { CSSProperties } from "react"
import styles from "./styles.module.sass"

interface CustomStyle extends CSSProperties {
	"--circleSize"?: string
	"--circle1"?: string
	"--circle2"?: string
	"--circle3"?: string
	"--circle4"?: string
}

type Props = Readonly<{
	style?: CustomStyle
}>

export const DTCircleShiftLoader = ({ style }: Props) => {
	return (
		<div style={style} className={`${styles["loader"]}`}>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
		</div>
	)
}
