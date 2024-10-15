import type { Meta, StoryObj } from "@storybook/react"
import { DTGhostCubes } from "./DTGhostCubes"

const meta = {
	title: "Random/DTGhostCubes",
	component: DTGhostCubes,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {},
	args: {},
} satisfies Meta<typeof DTGhostCubes>

export default meta
type Story = StoryObj<typeof meta>

export const GhostCubes: Story = {
	args: {},
}
