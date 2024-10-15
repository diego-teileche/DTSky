import { CSSProperties } from "react"
import styles from "./styles.module.sass"

interface CustomStyle extends CSSProperties {
	"--i"?: number
	"--size"?: string
}

type Props = Readonly<{
	style?: CustomStyle
}>

const items = Array.from({ length: 10 }, (_, i) => 10 - i)

export const DTStackedSpectra = ({ style }: Props) => {
	return (
		<div style={style} className={`${styles["loader"]}`}>
			{items.map((i) => (
				<span key={i} style={{ "--i": i } as CustomStyle}></span>
			))}
		</div>
	)
}
