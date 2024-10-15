import type { Meta, StoryObj } from "@storybook/react"
import { DTTextCube3d } from "./DTTextCube3d"

const meta = {
	title: "Random/DTTextCube3d",
	component: DTTextCube3d,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {},
	args: {},
} satisfies Meta<typeof DTTextCube3d>

export default meta
type Story = StoryObj<typeof meta>

export const TextCube3d: Story = {
	args: {
		text: "DTSky",
	},
}
