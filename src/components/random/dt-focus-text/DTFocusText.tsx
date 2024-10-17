import { CSSProperties } from "react"
import styles from "./styles.module.sass"

interface CustomStyle extends CSSProperties {
	"--gap"?: string
	"--p"?: string
	"--color"?: string
}

type Props = Readonly<{
	word: string
	style?: CustomStyle
}>

export const DTFocusText = ({ word, style }: Props) => {
	return (
		<h2 style={style} className={`${styles["h2"]}`}>
			{word.split("").map((letter, index) => (
				<span key={index} className={`${styles["span"]}`}>
					<i className={`${styles["i"]}`}></i>
					{letter}
				</span>
			))}
		</h2>
	)
}
