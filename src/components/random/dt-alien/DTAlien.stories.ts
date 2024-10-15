import type { Meta, StoryObj } from "@storybook/react"
import { DTAlien } from "./DTAlien"

const meta = {
	title: "Random/DTAlien",
	component: DTAlien,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {},
	args: {},
} satisfies Meta<typeof DTAlien>

export default meta
type Story = StoryObj<typeof meta>

export const Alien: Story = {
	args: {},
}
