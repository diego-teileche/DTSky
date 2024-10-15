import type { Meta, StoryObj } from "@storybook/react"
import { DTHoverHustleCards } from "./DTHoverHustleCards"

const meta = {
	title: "Cards/DTHoverHustleCards",
	component: DTHoverHustleCards,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {},
	args: {},
} satisfies Meta<typeof DTHoverHustleCards>

export default meta
type Story = StoryObj<typeof meta>

export const HoverHustle: Story = {
	args: {
		children1: "",
		children2: "",
		children3: "",
		children4: "",
	},
}
