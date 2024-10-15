import { CSSProperties } from "react"
import styles from "./styles.module.sass"

interface CustomStyle extends CSSProperties {
	"--size"?: string
	"--bg"?: string
	"--textColor"?: string
	"--loaderColor"?: string
	"--hover-textColor"?: string
	"--tracking"?: string
	"--typingEffect-width"?: string
}

type Props = Readonly<{
	style?: CustomStyle
}>

export const DTTypingLoader = ({ style }: Props) => {
	return (
		<div style={style} className={`${styles["loader"]}`}>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<h3>Loading...</h3>
		</div>
	)
}
