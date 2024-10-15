import type { Meta, StoryObj } from "@storybook/react"
import { DTModernSwitch } from "./DTModernSwitch"

const meta = {
	title: "Switchs/DTModernSwitch",
	component: DTModernSwitch,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {},
	args: {},
} satisfies Meta<typeof DTModernSwitch>

export default meta
type Story = StoryObj<typeof meta>

export const ModernSwitch: Story = {
	args: {},
}
