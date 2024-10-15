import type { Meta, StoryObj } from "@storybook/react"
import { DTDayNightSwitch } from "./DTDayNightSwitch"

const meta = {
	title: "Switchs/DTDayNightSwitch",
	component: DTDayNightSwitch,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {},
	args: {},
} satisfies Meta<typeof DTDayNightSwitch>

export default meta
type Story = StoryObj<typeof meta>

export const DayNightSwitch: Story = {
	args: {},
}
