import { CSSProperties } from "react"
import styles from "./styles.module.sass"

interface CustomStyle extends CSSProperties {
	"--size"?: string
}

type Props = Readonly<{
	style?: CustomStyle
}>

export const DTClimbCube = ({ style }: Props) => {
	return (
		<div style={style} className={`${styles["cubeBox"]}`}>
			<div className={`${styles["container"]}`}>
				<div className={`${styles["box"]}`}>
					<div className={`${styles["cube"]}`}></div>
				</div>
			</div>
		</div>
	)
}
