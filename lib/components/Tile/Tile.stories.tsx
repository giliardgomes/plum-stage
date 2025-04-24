import type { Meta, StoryObj } from "@storybook/react"
import { Badge } from "../Badge"
import {
    CreditCardFarFAIcon,
    UserFarFAIcon,
    ShieldFarFAIcon,
    StarFarFAIcon,
    BellFarFAIcon,
    EnvelopeFarFAIcon,
    HomeFarFAIcon,
    FileAltFarFAIcon,
} from "../Icons"
import { Grid } from "@mantine/core"
import { Tile } from "./index"

const meta = {
    title: "Components/Tile",
    component: Tile,
    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: (
                    "<a href='https://www.figma.com/file/mjUSsYy7JxOtylceOQgr3r/Design-System' target='_blank' rel='noopener noreferrer'><i class='fa-brands fa-figma'></i>  Figma</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
                    + "<a href='https://plum.quorum.us' target='_blank' rel='noopener noreferrer'><i class='fa-regular fa-folder'></i>  Documentation</a>"
                ),
            },
        },
    },
} satisfies Meta<typeof Tile>

export default meta

type Story = StoryObj<typeof Tile>

export const Default: Story = {
    render: () => (
        <Tile
            icon={<HomeFarFAIcon />}
            data-variant="primary"
            data-orientation="vertical"
        >
            Default
        </Tile>
    ),
}

export const Sizes: Story = {
    render: () => (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "var(--mantine-spacing-xs)",
            width: "100%",
        }}
        >
            <Tile
                size="sm"
                icon={<BellFarFAIcon />}
                variant="primary"
                data-size="sm"
                data-variant="primary"
                data-orientation="vertical"
            >
                Small
            </Tile>
            <Tile
                size="md"
                icon={<EnvelopeFarFAIcon />}
                variant="primary"
                data-size="md"
                data-variant="primary"
                data-orientation="vertical"
            >
                Medium
            </Tile>
            <Tile
                size="lg"
                icon={<UserFarFAIcon />}
                variant="primary"
                data-size="lg"
                data-variant="primary"
                data-orientation="vertical"
            >
                Large
            </Tile>
        </div>
    ),
}

export const WithBadge: Story = {
    name: "Badge",
    render: () => (
        <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--mantine-spacing-xs)",
            alignItems: "flex-start",
        }}
        >
            <Tile
                variant="primary"
                icon={<UserFarFAIcon />}
                badge={<Badge>2</Badge>}
                data-variant="primary"
                data-size="sm"
                data-orientation="vertical"
                data-badged={true}
            >
                Tile with badge
            </Tile>
            <Tile
                variant="primary"
                icon={<StarFarFAIcon />}
                badge={<Badge>New</Badge>}
                data-variant="primary"
                data-size="sm"
                data-orientation="vertical"
                data-badged={true}
            >
                Another badge
            </Tile>
        </div>
    ),
}

export const States: Story = {
    render: () => (
        <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--mantine-spacing-xs)",
            alignItems: "flex-start",
        }}
        >
            <Tile
                variant="primary"
                icon={<CreditCardFarFAIcon />}
                onClick={() => alert("Clicked!")}
                data-variant="primary"
                data-size="sm"
                data-orientation="vertical"
            >
                Interactive
            </Tile>
            <Tile
                variant="primary"
                icon={<UserFarFAIcon />}
                disabled
                data-variant="primary"
                data-size="sm"
                data-orientation="vertical"
            >
                Disabled
            </Tile>
            <Tile
                variant="primary"
                icon={<StarFarFAIcon />}
                component="a"
                href="#"
                target="_blank"
                data-variant="primary"
                data-size="sm"
                data-orientation="vertical"
            >
                Link
            </Tile>
        </div>
    ),
}

export const ComplexExample: Story = {
    name: "Grid",
    render: () => (
        <Grid gutter="xs" maw="640px" mx="auto">
            {[
                { icon: <HomeFarFAIcon />, text: "Dashboard", badge: "New" },
                { icon: <UserFarFAIcon />, text: "Team members" },
                { icon: <EnvelopeFarFAIcon />, text: "Messages" },
                { icon: <CreditCardFarFAIcon />, text: "Billing" },
                { icon: <ShieldFarFAIcon />, text: "Security" },
                { icon: <BellFarFAIcon />, text: "Notifications" },
                { icon: <StarFarFAIcon />, text: "Favorites" },
                { icon: <FileAltFarFAIcon />, text: "Documents" },
            ].map((item, index) => (
                <Grid.Col span={3} key={index}>
                    <Tile
                        variant="primary"
                        icon={item.icon}
                        orientation="vertical"
                        w="100%"
                        data-variant="primary"
                        data-size="sm"
                        data-orientation="vertical"
                        badge={item.badge ? <Badge>{item.badge}</Badge> : undefined}
                        data-badged={!!item.badge}
                    >
                        {item.text}
                    </Tile>
                </Grid.Col>
            ))}
        </Grid>
    ),
}
