import type { Meta, StoryObj } from "@storybook/react"
import { DTModernButton } from "./DTModernButton"

const meta = {
	title: "Buttons/DTModernButton",
	component: DTModernButton,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {},
	args: {},
} satisfies Meta<typeof DTModernButton>

export default meta
type Story = StoryObj<typeof meta>

export const Flashslide: Story = {
	args: {
		children: "Button",
		href: "#",
	},
}
