import type { Meta, StoryObj } from "@storybook/react"
import { DTStackedSpectra } from "./DTStackedSpectra"

const meta = {
	title: "Random/DTStackedSpectra",
	component: DTStackedSpectra,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {},
	args: {},
} satisfies Meta<typeof DTStackedSpectra>

export default meta
type Story = StoryObj<typeof meta>

export const StackedSpectra: Story = {
	args: {},
}
