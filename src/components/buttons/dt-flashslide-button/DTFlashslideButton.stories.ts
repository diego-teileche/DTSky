import type { Meta, StoryObj } from "@storybook/react"
import { DTFlashslideButton } from "./DTFlashslideButton"

const meta = {
	title: "Buttons/DTFlashslideButton",
	component: DTFlashslideButton,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {},
	args: {},
} satisfies Meta<typeof DTFlashslideButton>

export default meta
type Story = StoryObj<typeof meta>

export const Flashslide: Story = {
	args: {
		text: "Button",
		href: "#",
	},
}
