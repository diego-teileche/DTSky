import { CSSProperties } from "react"
import styles from "./styles.module.sass"

interface CustomStyle extends CSSProperties {
	"--size"?: string
	"--bg"?: string
	"--hoverBg1"?: string
	"--hoverBg2"?: string
	"--iconColor"?: string
	"--icon-fontSize"?: string
	"--titleColor"?: string
	"--title-fontSize"?: string
}

type Props = Readonly<{
	icon1?: React.ReactNode
	text1: string
	href1?: string
	icon2?: React.ReactNode
	text2: string
	href2?: string
	icon3?: React.ReactNode
	text3: string
	href3?: string
	icon4?: React.ReactNode
	text4: string
	href4?: string
	icon5?: React.ReactNode
	text5: string
	href5?: string
	style?: CustomStyle
}>

export const DTExpandButtons = ({
	icon1,
	icon2,
	icon3,
	icon4,
	icon5,
	text1,
	text2,
	text3,
	text4,
	text5,
	href1,
	href2,
	href3,
	href4,
	href5,
	style,
}: Props) => {
	return (
		<ul style={style}>
			<li>
				<a href={href1}>
					<span className={`${styles["icon"]}`}>{icon1}</span>
					<span className={`${styles["title"]}`}>{text1}</span>
				</a>
			</li>
			<li>
				<a href={href2}>
					<span className={`${styles["icon"]}`}>{icon2}</span>
					<span className={`${styles["title"]}`}>{text2}</span>
				</a>
			</li>
			<li>
				<a href={href3}>
					<span className={`${styles["icon"]}`}>{icon3}</span>
					<span className={`${styles["title"]}`}>{text3}</span>
				</a>
			</li>
			<li>
				<a href={href4}>
					<span className={`${styles["icon"]}`}>{icon4}</span>
					<span className={`${styles["title"]}`}>{text4}</span>
				</a>
			</li>
			<li>
				<a href={href5}>
					<span className={`${styles["icon"]}`}>{icon5}</span>
					<span className={`${styles["title"]}`}>{text5}</span>
				</a>
			</li>
		</ul>
	)
}

{
	/* <li style="--i:#a955ff;--j:#ea51ff">
            <span className="icon"></span>
            <span className="title">Home</span>
        </li>
        <li style="--i:#56ccf2;--j:#2f80ed">
            <span className="icon"></span>
            <span className="title">Messages</span>
        </li>
        <li style="--i:#ff9966;--j:#ff5e62">
            <span className="icon"></span>
            <span className="title">Favourite</span>
        </li>
        <li style="--i:#80ff72;--j:#7ee8fa">
            <span className="icon"></span>
            <span className="title">Videos</span>
        </li>
        <li style="--i:#ffa9c6;--j:#f434e2">
            <span className="icon"></span>
            <span className="title">Photos</span>
        </li> */
}
