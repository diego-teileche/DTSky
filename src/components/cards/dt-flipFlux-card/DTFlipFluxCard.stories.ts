import type { Meta, StoryObj } from "@storybook/react"
import { DTFlipFluxCard } from "./DTFlipFluxCard"

const meta = {
	title: "Cards/DTFlipFluxCard",
	component: DTFlipFluxCard,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {},
	args: {},
} satisfies Meta<typeof DTFlipFluxCard>

export default meta
type Story = StoryObj<typeof meta>

export const FlipFlux: Story = {
	args: {
		childrenFront: "",
		childrenBack: "",
	},
}
