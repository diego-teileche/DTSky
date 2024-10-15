import { CSSProperties } from "react"
import styles from "./styles.module.sass"

interface CustomStyle extends CSSProperties {
	"--size"?: string
}

type Props = Readonly<{
	style?: CustomStyle
}>

export const DTAlien = ({ style }: Props) => {
	return <div style={style} className={`${styles["alien"]}`}></div>
}
