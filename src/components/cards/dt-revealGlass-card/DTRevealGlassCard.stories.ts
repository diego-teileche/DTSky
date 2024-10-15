import type { Meta, StoryObj } from "@storybook/react"
import { DTRevealGlassCard } from "./DTRevealGlassCard"

const meta = {
	title: "Cards/DTRevealGlassCard",
	component: DTRevealGlassCard,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {},
	args: {},
} satisfies Meta<typeof DTRevealGlassCard>

export default meta
type Story = StoryObj<typeof meta>

export const RevealGlass: Story = {
	args: {
		children: "",
	},
}
