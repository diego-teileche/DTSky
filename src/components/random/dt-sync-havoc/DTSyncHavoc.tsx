import { CSSProperties } from "react"
import styles from "./styles.module.sass"

interface CustomStyle extends CSSProperties {
	"--i"?: number
	"--size"?: string
}

type Props = Readonly<{
	style?: CustomStyle
}>

const items = Array.from({ length: 10 }, (_, i) => i + 1)

export const DTSyncHavoc = ({ style }: Props) => {
	return (
		<div style={style} className={`${styles["loader"]}`}>
			{items.map((i) => (
				<span
					key={i}
					style={{ "--i": i } as CustomStyle}
					className={`${styles["span"]}`}
				></span>
			))}
		</div>
	)
}
