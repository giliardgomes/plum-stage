import type { Meta, StoryObj } from "@storybook/react"

import { Button } from "@/components/Button"
import { Menu, MenuProps } from "@/components/Menu"

const meta: Meta<typeof Menu> = {
    component: Menu,
    parameters: {
        docs: {
            description: {
                component: "Documentation: https://plum.quorum.us/4a128e208/p/450258-menu",
            },
        },
    },
    tags: ["autodocs"],
    argTypes: {
    },
}

export default meta

type Story = StoryObj<typeof Menu>

export const Default: Story = {
    render: (props: MenuProps) => (
        <Menu {...props}>
            <Menu.Target>
                <Button variant="secondary">Toggle Menu</Button>
            </Menu.Target>
            <Menu.Dropdown>
                <Menu.Item leftSection="♺" onClick={() => window.alert("clicked!")}>
                    Show alert
                </Menu.Item>
                <Menu.Item leftSection="♺">Super very long text, too long for this menu item</Menu.Item>
                <Menu.Divider />
                <Menu.Item leftSection="♺" data-danger>
                    Item danger
                </Menu.Item>
                <Menu.Item leftSection="♺" disabled>
                    Disabled item
                </Menu.Item>
                <Menu.Item leftSection="♺" data-danger disabled>
                    Danger and disabled
                </Menu.Item>
            </Menu.Dropdown>
        </Menu>
    ),
}
