import type { Meta, StoryObj } from "@storybook/react"
import { DTInvertedBorderCard } from "./DTInvertedBorderCard"

const meta = {
	title: "Cards/DTInvertedBorderCard",
	component: DTInvertedBorderCard,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {},
	args: {},
} satisfies Meta<typeof DTInvertedBorderCard>

export default meta
type Story = StoryObj<typeof meta>

export const RevealGlass: Story = {
	args: {
		children: "",
	},
}
