import type { Meta, StoryObj } from "@storybook/react"
import { DTGhostText } from "./DTGhostText"

const meta = {
	title: "Texts/DTGhostText",
	component: DTGhostText,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {},
	args: {},
} satisfies Meta<typeof DTGhostText>

export default meta
type Story = StoryObj<typeof meta>

export const GhostText: Story = {
	args: {
		text1: "DTSky",
		text2: "Diego",
	},
}
