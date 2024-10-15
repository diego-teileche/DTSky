import { CSSProperties } from "react"
import styles from "./styles.module.sass"

interface CustomStyle extends CSSProperties {
	"--w"?: string
	"--h"?: string
	"--bgFront"?: string
	"--bgBack"?: string
}

type Props = Readonly<{
	childrenFront?: React.ReactNode
	childrenBack?: React.ReactNode
	style?: CustomStyle
}>

export const DTFlipFluxCard = ({
	childrenFront,
	childrenBack,
	style,
}: Props) => {
	return (
		<div style={style} className={`${styles["flip-card"]}`}>
			<div className={`${styles["flip-card-inner"]}`}>
				<div className={`${styles["flip-card-front"]}`}>{childrenFront}</div>
				<div className={`${styles["flip-card-back"]}`}>{childrenBack}</div>
			</div>
		</div>
	)
}
