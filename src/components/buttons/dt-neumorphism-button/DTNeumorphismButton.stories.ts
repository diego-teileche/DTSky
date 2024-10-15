import type { Meta, StoryObj } from "@storybook/react"
import { DTNeumorphismButton } from "./DTNeumorphismButton"

const meta = {
	title: "Buttons/DTNeumorphismButton",
	component: DTNeumorphismButton,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {},
	args: {},
} satisfies Meta<typeof DTNeumorphismButton>

export default meta
type Story = StoryObj<typeof meta>

export const Neumorphism: Story = {
	args: {
		children: "Button",
		href: "#",
	},
}
