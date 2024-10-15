import { CSSProperties } from "react"
import styles from "./styles.module.sass"

interface CustomStyle extends CSSProperties {
	"--size"?: string
}

type Props = Readonly<{
	style?: CustomStyle
}>

export const DTModernSwitch = ({ style }: Props) => {
	return (
		<input type="checkbox" style={style} className={`${styles["input"]}`} />
	)
}
