import type { Meta, StoryObj } from "@storybook/react"
import { DTFlashEdgeCard } from "./DTFlashEdgeCard"

const meta = {
	title: "Cards/DTFlashEdgeCard",
	component: DTFlashEdgeCard,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {},
	args: {},
} satisfies Meta<typeof DTFlashEdgeCard>

export default meta
type Story = StoryObj<typeof meta>

export const FlashEdge: Story = {
	args: {
		children: "",
	},
}
