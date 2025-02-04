import type { Meta, StoryObj } from "@storybook/react"
import { SingleActionModal, SingleActionModalProps } from "@/components/SingleActionModal"
import { TriangleExclamationFarFAIcon } from "@/components/Icons/index"
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
        buttonProps: {
            onClick: () => null,
            children: "Close",
        },
    },
    render: (props: SingleActionModalProps) => {
        const [isOpen, setIsOpen] = useState(false)
        props.buttonProps.onClick = () => setIsOpen(false)
        return (
            <>
                <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
                <SingleActionModal
                    isOpen={isOpen}
                    buttonProps={props.buttonProps}
                    onClose={() => setIsOpen(false)}
                    title={props.title}
                >
                    {props.children}
                </SingleActionModal>
            </>
        )
    },
}

export const IconAndTwoButtons: Story = {
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
                    isOpen={isOpen}
                    buttonProps={{
                        children: "Yes",
                        onClick: () => clickButton("Yes"),
                    }}
                    onClose={() => {
                        alert("User closed modal")
                        setIsOpen(false)
                    }}
                    title="Modal Title"
                    icon={icon}
                    data-plum-id="Testing"
                    secondaryButtonProps={{
                        children: "No",
                        onClick: () => clickButton("No"),
                    }}
                >
                    You have done something that requires confirmation.  Do you wish to proceed?
                </SingleActionModal>
            </>
        )
    },
}
