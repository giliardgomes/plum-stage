import type { Meta, StoryObj } from "@storybook/react"
import { Dialog, DialogProps } from "@/components/Dialog"
import { CircleInfoFarFAIcon, TriangleExclamationFarFAIcon } from "@/components/Icons/index"
import { Button } from "@/components/Button"
import { useState } from "react"
import { rem } from "@mantine/core"

const meta: Meta<typeof Dialog> = {
    component: Dialog,
    parameters: {
        docs: {
            description: {
                component: (
                    "Documentation: https://plum.quorum.us/4a128e208/p/106788-single-action-modal"
                    + "<br>"
                    + "Figma: https://www.figma.com/design/mjUSsYy7JxOtylceOQgr3r/Design-System?node-id=12219-1268&t=P05tyGJnYsfX49Zl-0"
                ),
            },
        },
    },
    tags: ["autodocs"],
    argTypes: {
    },
}

export default meta

type Story = StoryObj<typeof Dialog>

export const Default: Story = {
    args: {
        children: "You have triggered a Dialog.",
        title: "Dialog Title",
    },
    render: (props: DialogProps) => {
        const [opened, setOpened] = useState(false)
        return (
            <>
                <Button onClick={() => setOpened(true)}>Open Dialog</Button>
                <Dialog
                    buttonProps={{
                        onClick: () => setOpened(false),
                        children: "Close",
                    }}
                    opened={opened}
                    onClose={() => setOpened(false)}
                    title={props.title}
                >
                    {props.children}
                </Dialog>
            </>
        )
    },
}

export const IconAndTwoButtonsAndDangerVariant: Story = {
    render: () => {
        const [opened, setOpened] = useState(false)
        const icon = (
            <div style={{ width: rem("48px"), height: rem("48px"), borderRadius: "50%", backgroundColor: "#FDDFB2", display: "flex",
                alignItems: "center", justifyContent: "center" }}
            >
                <TriangleExclamationFarFAIcon color="#B34E1E" size={16} />
            </div>
        )
        return (
            <>
                <Button onClick={() => setOpened(true)}>Open Dialog</Button>
                <Dialog
                    buttonProps={[{
                        children: "Yes",
                        onClick: () => setOpened(false),
                    }, {
                        children: "Dangerous No",
                        onClick: () => setOpened(false),
                        danger: true,
                    }]}
                    data-plum-id="Testing"
                    icon={icon}
                    opened={opened}
                    onClose={() => setOpened(false)}
                    title="Dialog Title"
                >
                    You have done something that requires confirmation.  Do you wish to proceed?
                </Dialog>
            </>
        )
    },
}

/** This Dialog has three buttons, and the button labels are react nodes rather than plain text. */
export const ThreeButtonDialogWithButtonFormatting: Story = {
    render: () => {
        const [opened, setOpened] = useState(false)
        const icon = (
            <div style={{ width: rem("48px"), height: rem("48px"), borderRadius: "50%", backgroundColor: "#FDDFB2", display: "flex",
                alignItems: "center", justifyContent: "center" }}
            >
                <TriangleExclamationFarFAIcon color="#B34E1E" size={16} />
            </div>
        )
        return (
            <>
                <Button onClick={() => setOpened(true)}>Open Dialog</Button>
                <Dialog
                    buttonProps={[{
                        children: (
                            <>
                                Larry
                                <CircleInfoFarFAIcon style={{ padding: "3px" }} />
                            </>
                        ),
                        onClick: () => setOpened(false),
                        variant: "tertiary",
                    }, {
                        children: <strong>Curly</strong>,
                        onClick: () => setOpened(false),
                        danger: true,
                    }, {
                        children: "Moe",
                        onClick: () => setOpened(false),
                    }]}
                    data-plum-id="Testing"
                    icon={icon}
                    opened={opened}
                    onClose={() => setOpened(false)}
                    title="Dialog Title"
                >
                    The three stooges, in the order Larry, Curly, and Moe.
                </Dialog>
            </>
        )
    },
}

/** This Dialog has three absurdly long buttons. */
export const ThreeButtonDialogWithLongContent: Story = {
    render: () => {
        const [opened, setOpened] = useState(false)
        const icon = (
            <div style={{ width: rem("48px"), height: rem("48px"), borderRadius: "50%", backgroundColor: "#FDDFB2", display: "flex",
                alignItems: "center", justifyContent: "center" }}
            >
                <TriangleExclamationFarFAIcon color="#B34E1E" size={16} />
            </div>
        )
        return (
            <>
                <Button onClick={() => setOpened(true)}>Open Dialog</Button>
                <Dialog
                    buttonProps={[{
                        children: (
                            <>
                                Really Long Text for A button But What Can You Do
                                <CircleInfoFarFAIcon style={{ padding: "3px" }} />
                            </>
                        ),
                        onClick: () => setOpened(false),
                        variant: "tertiary",
                    }, {
                        children: "Except put up with some weird things once in a while",
                        onClick: () => setOpened(false),
                        danger: true,
                    }, {
                        children: "And Long Buttons Sometimes Happen",
                        onClick: () => setOpened(false),
                    }]}
                    data-plum-id="Testing"
                    icon={icon}
                    opened={opened}
                    onClose={() => setOpened(false)}
                    size="800px"
                    title="Dialog Title"
                >
                    Some really long lorem ipsum: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                    aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                </Dialog>
            </>
        )
    },
}
