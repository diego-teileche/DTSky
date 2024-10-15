import type { Meta, StoryObj } from "@storybook/react"
import { DTSpectrumLoader } from "./DTSpectrumLoader"

const meta = {
	title: "Loaders/DTSpectrumLoader",
	component: DTSpectrumLoader,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {},
	args: {},
} satisfies Meta<typeof DTSpectrumLoader>

export default meta
type Story = StoryObj<typeof meta>

export const Spectrum: Story = {
	args: {},
}
