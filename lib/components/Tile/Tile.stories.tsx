import type { Meta, StoryObj } from "@storybook/react"
import { Badge } from "@mantine/core"

import { Tile, TileProps } from "./index"

const meta: Meta<typeof Tile> = {
    component: Tile,
    tags: ["autodocs"],
    argTypes: {
        badge: { control: "text" },
        children: { control: "text" },
        component: { table: { disable: true } },
        icon: { control: "text", defaultValue: "plus-circle" },
    },
}

export default meta

type Story = StoryObj<typeof Tile>

export const Text: Story = {
    args: {
        children: "Tile Label",
        orientation: "vertical",
        size: "md",
        disabled: false,
        variant: "secondary",
    },
    render: (props: TileProps) => (
        <Tile
            badge={props.badge && <Badge>{props.badge}</Badge>}
            orientation={props.orientation}
            size={props.size}
            variant={props.variant}
            disabled={props.disabled}
            icon={props.icon}
        >
            {props.children}
        </Tile>
    ),
}
