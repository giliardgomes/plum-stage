import type { Meta, StoryObj } from "@storybook/react"
import { SingleActionModal, SingleActionModalProps } from "@/components/SingleActionModal"
import { CircleInfoFarFAIcon, TriangleExclamationFarFAIcon } from "@/components/Icons/index"
import { Button } from "@/components/Button"
import { useState } from "react"
import { rem } from "@mantine/core"

const meta: Meta<typeof SingleActionModal> = {
    component: SingleActionModal,
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

type Story = StoryObj<typeof SingleActionModal>

export const Default: Story = {
    args: {
        children: "You have triggered a Single Action Modal.",
        title: "Modal Title",
    },
    render: (props: SingleActionModalProps) => {
        const [isOpen, setIsOpen] = useState(false)
        return (
            <>
                <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
                <SingleActionModal
                    buttonProps={{
                        onClick: () => setIsOpen(false),
                        children: "Close",
                    }}
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                    title={props.title}
                >
                    {props.children}
                </SingleActionModal>
            </>
        )
    },
}

export const IconAndTwoButtonsAndDangerVariant: Story = {
    render: () => {
        const [isOpen, setIsOpen] = useState(false)

        const clickButton = (which: string) => {
            alert(`Clicked ${which}`)
            setIsOpen(false)
        }
        const icon = (
            <div style={{ width: rem("48px"), height: rem("48px"), borderRadius: "50%", backgroundColor: "#FDDFB2", display: "flex",
                alignItems: "center", justifyContent: "center" }}
            >
                <TriangleExclamationFarFAIcon color="#B34E1E" size={16} />
            </div>
        )
        return (
            <>
                <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
                <SingleActionModal
                    buttonProps={[{
                        children: "Yes",
                        onClick: () => clickButton("Yes"),
                    }, {
                        children: "Dangerous No",
                        onClick: () => clickButton("No"),
                        danger: true,
                    }]}
                    data-plum-id="Testing"
                    icon={icon}
                    isOpen={isOpen}
                    onClose={() => {
                        alert("User closed modal")
                        setIsOpen(false)
                    }}
                    title="Modal Title"
                >
                    You have done something that requires confirmation.  Do you wish to proceed?
                </SingleActionModal>
            </>
        )
    },
}

/** This modal has three buttons, and the button labels are react nodes rather than plain text. */
export const ThreeButtonModalWithButtonFormatting: Story = {
    render: () => {
        const [isOpen, setIsOpen] = useState(false)

        const clickButton = (which: string) => {
            alert(`Clicked ${which}`)
            setIsOpen(false)
        }
        const icon = (
            <div style={{ width: rem("48px"), height: rem("48px"), borderRadius: "50%", backgroundColor: "#FDDFB2", display: "flex",
                alignItems: "center", justifyContent: "center" }}
            >
                <TriangleExclamationFarFAIcon color="#B34E1E" size={16} />
            </div>
        )
        return (
            <>
                <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
                <SingleActionModal
                    buttonProps={[{
                        children: (
                            <>
                                Larry
                                <CircleInfoFarFAIcon style={{ padding: "3px" }} />
                            </>
                        ),
                        onClick: () => clickButton("Larry"),
                        variant: "tertiary",
                    }, {
                        children: <strong>Curly</strong>,
                        onClick: () => clickButton("Curly"),
                        danger: true,
                    }, {
                        children: "Moe",
                        onClick: () => clickButton("Moe"),
                    }]}
                    data-plum-id="Testing"
                    icon={icon}
                    isOpen={isOpen}
                    onClose={() => {
                        alert("User closed modal")
                        setIsOpen(false)
                    }}
                    title="Modal Title"
                >
                    The three stooges, in the order Larry, Curly, and Moe.
                </SingleActionModal>
            </>
        )
    },
}

/** This modal has three absurdly long buttons. */
export const ThreeButtonModalWithLongContent: Story = {
    render: () => {
        const [isOpen, setIsOpen] = useState(false)

        const clickButton = (which: string) => {
            alert(`Clicked ${which}`)
            setIsOpen(false)
        }
        const icon = (
            <div style={{ width: rem("48px"), height: rem("48px"), borderRadius: "50%", backgroundColor: "#FDDFB2", display: "flex",
                alignItems: "center", justifyContent: "center" }}
            >
                <TriangleExclamationFarFAIcon color="#B34E1E" size={16} />
            </div>
        )
        return (
            <>
                <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
                <SingleActionModal
                    buttonProps={[{
                        children: (
                            <>
                                Really Long Text for A button But What Can You Do
                                <CircleInfoFarFAIcon style={{ padding: "3px" }} />
                            </>
                        ),
                        onClick: () => clickButton("Larry"),
                        variant: "tertiary",
                    }, {
                        children: "Except put up with some weird things once in a while",
                        onClick: () => clickButton("Curly"),
                        danger: true,
                    }, {
                        children: "And Long Buttons Sometimes Happen",
                        onClick: () => clickButton("Moe"),
                    }]}
                    data-plum-id="Testing"
                    icon={icon}
                    isOpen={isOpen}
                    onClose={() => {
                        alert("User closed modal")
                        setIsOpen(false)
                    }}
                    size="800px"
                    title="Modal Title"
                >
                    Some really long lorem ipsum: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                    aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                </SingleActionModal>
            </>
        )
    },
}
