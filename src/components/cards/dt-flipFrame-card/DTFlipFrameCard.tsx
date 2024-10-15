import { CSSProperties } from "react"
import styles from "./styles.module.sass"

interface CustomStyle extends CSSProperties {
	"--w"?: string
	"--h"?: string
}

type Props = Readonly<{
	children?: React.ReactNode
	img1?: string
	img2?: string
	style?: CustomStyle
}>

export const DTFlipFrameCard = ({ children, img1, img2, style }: Props) => {
	return (
		<div style={style} className={`${styles["card"]}`}>
			<div className={`${styles["imgBox"]}`}>
				{img1 ? (
					<img src={img1} className={`${styles["img"]}`} />
				) : (
					<div className={`${styles["none"]}`}></div>
				)}
				{img2 ? (
					<img src={img2} className={`${styles["img"]}`} />
				) : (
					<div className={`${styles["none"]}`}></div>
				)}
			</div>
			<div className={`${styles["details"]}`}>
				<div className={`${styles["content"]}`}>{children}</div>
			</div>
		</div>
	)
}
