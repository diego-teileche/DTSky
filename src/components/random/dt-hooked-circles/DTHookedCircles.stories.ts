import type { Meta, StoryObj } from "@storybook/react"
import { DTHookedCircles } from "./DTHookedCircles"

const meta = {
	title: "Random/DTHookedCircles",
	component: DTHookedCircles,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {},
	args: {},
} satisfies Meta<typeof DTHookedCircles>

export default meta
type Story = StoryObj<typeof meta>

export const HookedCircles: Story = {
	args: {},
}
