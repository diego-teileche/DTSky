import type { Meta, StoryObj } from "@storybook/react"
import { DTIlluminationText } from "./DTIlluminationText"

const meta = {
	title: "Texts/DTIlluminationText",
	component: DTIlluminationText,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {},
	args: {},
} satisfies Meta<typeof DTIlluminationText>

export default meta
type Story = StoryObj<typeof meta>

export const IlluminationText: Story = {
	args: {
		text: "DTSky",
	},
}
