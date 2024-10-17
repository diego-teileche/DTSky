import { CSSProperties } from "react"
import styles from "./styles.module.sass"

interface CustomStyle extends CSSProperties {
	"--i"?: number
	"--size"?: string
}

type Props = Readonly<{
	style?: CustomStyle
}>

const items = Array.from({ length: 16 }, (_, i) => i + 1)

export const DTColliderLoader = ({ style }: Props) => {
	return (
		<div style={style} className={`${styles["box"]}`}>
			{items.map((i) => (
				<span
					key={i}
					style={{ "--i": i } as CustomStyle}
					className={`${styles["span"]}`}
				>
					<i className={`${styles["i"]}`}></i>
				</span>
			))}
		</div>
	)
}
