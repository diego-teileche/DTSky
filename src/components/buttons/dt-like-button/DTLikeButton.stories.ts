import type { Meta, StoryObj } from "@storybook/react"
import { DTLikeButton } from "./DTLikeButton"

const meta = {
	title: "Buttons/DTLikeButton",
	component: DTLikeButton,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {},
	args: {},
} satisfies Meta<typeof DTLikeButton>

export default meta
type Story = StoryObj<typeof meta>

export const Like: Story = {
	args: {
		text: "Like!",
		onClick: () => {},
	},
}
