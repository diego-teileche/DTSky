import type { Meta, StoryObj } from "@storybook/react"
import { DTFlipFrameCard } from "./DTFlipFrameCard"

const meta = {
	title: "Cards/DTFlipFrameCard",
	component: DTFlipFrameCard,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {},
	args: {},
} satisfies Meta<typeof DTFlipFrameCard>

export default meta
type Story = StoryObj<typeof meta>

export const FlipFrame: Story = {
	args: {
		children: "",
		img1: "",
		img2: "",
	},
}
