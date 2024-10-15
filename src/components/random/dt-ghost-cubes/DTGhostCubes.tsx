import { CSSProperties } from "react"
import styles from "./styles.module.sass"

interface CustomStyle extends CSSProperties {
	"--i"?: number
	"--clr"?: string
	"--size"?: string
}

type Props = Readonly<{
	style?: CustomStyle
}>

export const DTGhostCubes = ({ style }: Props) => {
	return (
		<div style={style} className={`${styles["container"]}`}>
			<div className={`${styles["cube"]}`}>
				<div className={`${styles["big"]}`}>
					<span style={{ "--i": 0, "--clr": "#e2e2e2" } as CustomStyle}></span>
					<span style={{ "--i": 1, "--clr": "#f0f0f0" } as CustomStyle}></span>
					<span style={{ "--i": 2, "--clr": "#e2e2e2" } as CustomStyle}></span>
					<span style={{ "--i": 3, "--clr": "#f0f0f0" } as CustomStyle}></span>
					<span
						className={`${styles["top"]}`}
						style={{ "--clr": "#fff" } as CustomStyle}
					></span>
				</div>
			</div>

			<div className={`${styles["cube2"]}`}>
				<div className={`${styles["big"]}`}>
					<span style={{ "--i": 0, "--clr": "#ffa20d" } as CustomStyle}></span>
					<span style={{ "--i": 1, "--clr": "#ff8502" } as CustomStyle}></span>
					<span style={{ "--i": 2, "--clr": "#ffa20d" } as CustomStyle}></span>
					<span style={{ "--i": 3, "--clr": "#ff8502" } as CustomStyle}></span>
					<span
						className={`${styles["top"]}`}
						style={{ "--clr": "#ffbb56" } as CustomStyle}
					></span>
				</div>
			</div>
		</div>
	)
}
