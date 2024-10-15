import type { Meta, StoryObj } from "@storybook/react"
import { DTGlassCard } from "./DTGlassCard"

const meta = {
	title: "Cards/DTGlassCard",
	component: DTGlassCard,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {},
	args: {},
} satisfies Meta<typeof DTGlassCard>

export default meta
type Story = StoryObj<typeof meta>

export const Glass: Story = {
	args: {
		children: "",
	},
}
