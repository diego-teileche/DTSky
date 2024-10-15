import type { Meta, StoryObj } from "@storybook/react"
import { DTSyncHavoc } from "./DTSyncHavoc"

const meta = {
	title: "Random/DTSyncHavoc",
	component: DTSyncHavoc,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {},
	args: {},
} satisfies Meta<typeof DTSyncHavoc>

export default meta
type Story = StoryObj<typeof meta>

export const SyncHavoc: Story = {
	args: {},
}
