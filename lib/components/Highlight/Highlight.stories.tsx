import type { Meta, StoryObj } from "@storybook/react"
import { Highlight, HighlightProps } from "@/components/Highlight"

const meta: Meta<typeof Highlight> = {
    component: Highlight,
    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: "Documentation: https://plum.quorum.us/4a128e208/p/3311f2-text-field",
            },
        },
    },
}

export default meta

type Story = StoryObj<typeof Highlight>

export const Default: Story = {
    args: {
        text: "The quick brown fox jumped over the lazy dog.",
        highlight: "quick brown fox",
    },
    render: (props: HighlightProps) => (
        <div>
            <Highlight
                {...props}
            />
        </div>
    ),
}

export const DifferentColors: Story = {
    args: {
        highlight: "quick brown fox",
        highlightColor: "yellow",
        text: "The quick brown fox jumped over the lazy dog.",
        textColor: "unset",
    },
    render: (props: HighlightProps) => (
        <div>
            <Highlight
                {...props}
            />
        </div>
    ),
}
