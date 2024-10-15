import type { Meta, StoryObj } from "@storybook/react"
import { DTRowButton } from "./DTRowButton"

const meta = {
	title: "Buttons/DTRowButton",
	component: DTRowButton,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {},
	args: {},
} satisfies Meta<typeof DTRowButton>

export default meta
type Story = StoryObj<typeof meta>

export const Row: Story = {
	args: {
		text: "Button",
		href: "#",
	},
}
