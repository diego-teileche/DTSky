import type { Meta, StoryObj } from "@storybook/react"
import { DTSquaresLoader } from "./DTSquaresLoader"

const meta = {
	title: "Loaders/DTSquaresLoader",
	component: DTSquaresLoader,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {},
	args: {},
} satisfies Meta<typeof DTSquaresLoader>

export default meta
type Story = StoryObj<typeof meta>

export const Squares: Story = {
	args: {},
}
