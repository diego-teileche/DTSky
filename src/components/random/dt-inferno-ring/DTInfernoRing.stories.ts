import type { Meta, StoryObj } from "@storybook/react"
import { DTInfernoRing } from "./DTInfernoRing"

const meta = {
	title: "Random/DTInfernoRing",
	component: DTInfernoRing,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {},
	args: {},
} satisfies Meta<typeof DTInfernoRing>

export default meta
type Story = StoryObj<typeof meta>

export const InfernoRing: Story = {
	args: {},
}
