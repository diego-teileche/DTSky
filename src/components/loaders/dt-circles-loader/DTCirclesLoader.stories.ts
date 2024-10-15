import type { Meta, StoryObj } from "@storybook/react"
import { DTCirclesLoader } from "./DTCirclesLoader"

const meta = {
	title: "Loaders/DTCirclesLoader",
	component: DTCirclesLoader,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {},
	args: {},
} satisfies Meta<typeof DTCirclesLoader>

export default meta
type Story = StoryObj<typeof meta>

export const Circles: Story = {
	args: {},
}
