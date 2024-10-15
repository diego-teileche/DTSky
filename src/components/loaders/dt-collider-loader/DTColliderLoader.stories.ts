import type { Meta, StoryObj } from "@storybook/react"
import { DTColliderLoader } from "./DTColliderLoader"

const meta = {
	title: "Loaders/DTColliderLoader",
	component: DTColliderLoader,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {},
	args: {},
} satisfies Meta<typeof DTColliderLoader>

export default meta
type Story = StoryObj<typeof meta>

export const Collider: Story = {
	args: {},
}
