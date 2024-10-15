import styles from "./styles.module.sass"

type Props = Readonly<{
	text: string
	href?: string
}>

export const DTFlashslideButton = ({ text, href }: Props) => {
	return (
		<a href={href} className={`${styles["button"]}`}>
			{text}
			<span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
					/>
				</svg>
			</span>
		</a>
	)
}
