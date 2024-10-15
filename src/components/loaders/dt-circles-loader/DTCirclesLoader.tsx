import { CSSProperties } from "react"
import styles from "./styles.module.sass"

interface CustomStyle extends CSSProperties {
	"--size"?: string
	"--circle1"?: string
	"--circle2"?: string
	"--circle3"?: string
	"--circle4"?: string
}

type Props = Readonly<{
	style?: CustomStyle
}>

export const DTCirclesLoader = ({ style }: Props) => {
	return (
		<div style={style} className={`${styles["loader"]}`}>
			<span className={`${styles["span"]} ${styles["span1"]}`}></span>
			<span className={`${styles["span"]} ${styles["span2"]}`}></span>
			<span className={`${styles["span"]} ${styles["span3"]}`}></span>
			<span className={`${styles["span"]} ${styles["span4"]}`}></span>
		</div>
	)
}
