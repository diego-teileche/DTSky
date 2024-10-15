import { CSSProperties } from "react"
import styles from "./styles.module.sass"

interface CustomStyle extends CSSProperties {
	"--i"?: number
	"--size"?: string
	"--color"?: string
	"--fontSize"?: string
}

type Props = Readonly<{
	text?: string
	style?: CustomStyle
}>

export const DTTextCube3d = ({ text, style }: Props) => {
	return (
		<div style={style} className={`${styles["cube"]}`}>
			<div className={`${styles["top"]}`}></div>
			<div>
				<span style={{ "--i": 0 } as CustomStyle}>
					<h2>{text}</h2>
					<h2>{text}</h2>
				</span>
				<span style={{ "--i": 1 } as CustomStyle}>
					<h2>{text}</h2>
					<h2>{text}</h2>
				</span>
				<span style={{ "--i": 2 } as CustomStyle}>
					<h2>{text}</h2>
					<h2>{text}</h2>
				</span>
				<span style={{ "--i": 3 } as CustomStyle}>
					<h2>{text}</h2>
					<h2>{text}</h2>
				</span>
			</div>
		</div>
	)
}
