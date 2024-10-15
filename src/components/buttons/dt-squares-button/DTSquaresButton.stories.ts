import type { Meta, StoryObj } from "@storybook/react"
import { DTSquaresButton } from "./DTSquaresButton"

const meta = {
	title: "Buttons/DTSquaresButton",
	component: DTSquaresButton,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {},
	args: {},
} satisfies Meta<typeof DTSquaresButton>

export default meta
type Story = StoryObj<typeof meta>

export const Square: Story = {
	args: {
		children: "Button",
		href: "#",
	},
}
