import { CSSProperties } from "react"
import styles from "./styles.module.sass"

interface CustomStyle extends CSSProperties {
	"--h"?: string
	"--color"?: string
	"--pointColor"?: string
	"--insetBg"?: string
}

type Props = Readonly<{
	style?: CustomStyle
}>

export const DTSpectrumLoader = ({ style }: Props) => {
	return (
		<div style={style} className={`${styles["container"]}`}>
			<div className={`${styles["loader"]}`}>
				<span className={`${styles["span"]}`}></span>
			</div>
			<div className={`${styles["loader"]}`}>
				<span className={`${styles["span"]}`}></span>
			</div>
			<div className={`${styles["loader"]}`}>
				<i className={`${styles["i"]}`}></i>
			</div>
			<div className={`${styles["loader"]}`}>
				<i className={`${styles["i"]}`}></i>
			</div>
		</div>
	)
}
