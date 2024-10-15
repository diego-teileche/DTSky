import type { Meta, StoryObj } from "@storybook/react"
import { DTGlitchText } from "./DTGlitchText"

const meta = {
	title: "Texts/DTGlitchText",
	component: DTGlitchText,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {},
	args: {},
} satisfies Meta<typeof DTGlitchText>

export default meta
type Story = StoryObj<typeof meta>

export const GlitchText: Story = {
	args: {
		text: "DTSky",
	},
}
