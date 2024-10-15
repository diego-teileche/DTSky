import type { Meta, StoryObj } from "@storybook/react"
import { DTNeonText } from "./DTNeonText"

const meta = {
	title: "Texts/DTNeonText",
	component: DTNeonText,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {},
	args: {},
} satisfies Meta<typeof DTNeonText>

export default meta
type Story = StoryObj<typeof meta>

export const NeonText: Story = {
	args: {
		text: "DTSky",
	},
}
