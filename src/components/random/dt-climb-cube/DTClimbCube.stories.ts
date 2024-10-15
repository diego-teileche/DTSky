import type { Meta, StoryObj } from "@storybook/react"
import { DTClimbCube } from "./DTClimbCube"

const meta = {
	title: "Random/DTClimbCube",
	component: DTClimbCube,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {},
	args: {},
} satisfies Meta<typeof DTClimbCube>

export default meta
type Story = StoryObj<typeof meta>

export const ClimbCube: Story = {
	args: {},
}
