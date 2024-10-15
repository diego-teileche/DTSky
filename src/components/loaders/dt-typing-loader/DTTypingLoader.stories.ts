import type { Meta, StoryObj } from "@storybook/react"
import { DTTypingLoader } from "./DTTypingLoader"

const meta = {
	title: "Loaders/DTTypingLoader",
	component: DTTypingLoader,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {},
	args: {},
} satisfies Meta<typeof DTTypingLoader>

export default meta
type Story = StoryObj<typeof meta>

export const Typing: Story = {
	args: {},
}
