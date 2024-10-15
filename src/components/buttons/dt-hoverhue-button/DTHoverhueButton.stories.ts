import type { Meta, StoryObj } from "@storybook/react"
import { DTHoverhueButton } from "./DTHoverhueButton"

const meta = {
	title: "Buttons/DTHoverhueButton",
	component: DTHoverhueButton,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {},
	args: {},
} satisfies Meta<typeof DTHoverhueButton>

export default meta
type Story = StoryObj<typeof meta>

export const Hoverhue: Story = {
	args: {
		text: "Button",
		href: "#",
	},
}
