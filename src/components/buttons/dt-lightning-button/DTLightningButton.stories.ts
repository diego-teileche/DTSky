import type { Meta, StoryObj } from "@storybook/react"
import { DTLightningButton } from "./DTLightningButton"

const meta = {
	title: "Buttons/DTLightningButton",
	component: DTLightningButton,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {},
	args: {},
} satisfies Meta<typeof DTLightningButton>

export default meta
type Story = StoryObj<typeof meta>

export const Lightning: Story = {
	args: {
		children: "DTSky Button",
		href: "#",
	},
}
