import type { Meta, StoryObj } from "@storybook/react"
import { DTMagicText } from "./DTMagicText"

const meta = {
	title: "Texts/DTMagicText",
	component: DTMagicText,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {},
	args: {},
} satisfies Meta<typeof DTMagicText>

export default meta
type Story = StoryObj<typeof meta>

export const MagicText: Story = {
	args: {
		text: "DTSky",
	},
}
