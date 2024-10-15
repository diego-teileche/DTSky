import type { Meta, StoryObj } from "@storybook/react"
import { DTExpandButtons } from "./DTExpandButtons"

const meta = {
	title: "Buttons/DTExpandButtons",
	component: DTExpandButtons,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {},
	args: {},
} satisfies Meta<typeof DTExpandButtons>

export default meta
type Story = StoryObj<typeof meta>

export const Expand: Story = {
	args: {
		icon1: "",
		text1: "Home",
		href1: "#",
		icon2: "",
		text2: "Messages",
		href2: "#",
		icon3: "",
		text3: "Favourite",
		href3: "#",
		icon4: "",
		text4: "Videos",
		href4: "#",
		icon5: "",
		text5: "Photos",
		href5: "#",
	},
}
