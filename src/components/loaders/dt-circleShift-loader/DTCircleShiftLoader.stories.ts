import type { Meta, StoryObj } from "@storybook/react"
import { DTCircleShiftLoader } from "./DTCircleShiftLoader"

const meta = {
	title: "Loaders/DTCircleShiftLoader",
	component: DTCircleShiftLoader,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {},
	args: {},
} satisfies Meta<typeof DTCircleShiftLoader>

export default meta
type Story = StoryObj<typeof meta>

export const CircleShift: Story = {
	args: {},
}
