import { CSSProperties } from "react"
import styles from "./styles.module.sass"

interface CustomStyle extends CSSProperties {
	"--size"?: string
}

type Props = Readonly<{
	style?: CustomStyle
}>

export const DTInfernoRing = ({ style }: Props) => {
	return (
		<>
			<div style={style} className={`${styles["ring-container"]}`}>
				<div className={`${styles["circle"]}`}></div>
			</div>
			<svg>
				<filter id="wavy">
					<feTurbulence
						x="0"
						y="0"
						baseFrequency="0.009"
						numOctaves="5"
						seed="2"
					>
						<animate
							attributeName="baseFrequency"
							dur="60s"
							values="0.02;0.005;0.02"
							repeatCount="indefinite"
						></animate>
					</feTurbulence>
					<feDisplacementMap in="SourceGraphic" scale="15"></feDisplacementMap>
				</filter>
			</svg>
		</>
	)
}
