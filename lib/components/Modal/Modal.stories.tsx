import type { Meta, StoryObj } from "@storybook/react"
import { Modal, ModalProps } from "@/components/Modal"
import { TriangleExclamationFarFAIcon } from "@/components/Icons/index"
import { Button } from "@/components/Button"
import { useState } from "react"
import { Group, rem } from "@mantine/core"
import classes from "@/components/Modal/Modal.stories.module.css"

const meta: Meta<typeof Modal> = {
    component: Modal,
    parameters: {
        docs: {
            description: {
                component: (
                    "Documentation: Not Available Yet (see documentation for Single Action Modal)"
                    + "<br>"
                    + "Figma: Not Available Yet (see documentation for Single Action Modal)"
                ),
            },
        },
    },
    tags: ["autodocs"],
    argTypes: {
    },
}

export default meta

type Story = StoryObj<typeof Modal>

export const Default: Story = {
    args: {
        children: "You have triggered a Modal.",
    },
    render: (props: ModalProps) => {
        const [opened, setOpened] = useState(false)
        return (
            <>
                <Button onClick={() => setOpened(true)}>Open Modal</Button>
                <Modal
                    opened={opened}
                    onClose={() => setOpened(false)}
                >
                    {props.children}
                </Modal>
            </>
        )
    },
}

/** Modals can contain whatever you want to pass into them, and you can also use either the Style or className attribute */
export const ModalWithLongContent: Story = {
    render: () => {
        const [opened, setOpened] = useState(false)
        const Icon = () => (
            <div style={{ width: rem("48px"), height: rem("48px"), borderRadius: "50%", backgroundColor: "#FDDFB2", display: "flex",
                alignItems: "center", justifyContent: "center" }}
            >
                <TriangleExclamationFarFAIcon color="#B34E1E" size={16} />
            </div>
        )
        return (
            <>
                <Button onClick={() => setOpened(true)}>Open Modal</Button>
                <Modal
                    classNames={{ body: classes.body }}
                    data-plum-id="Testing"
                    opened={opened}
                    onClose={() => {
                        setOpened(false)
                    }}
                    size="800px"
                >
                    <div style={{
                        alignItems: "center",
                        color: "#495057",
                        display: "flex",
                        flexDirection: "column",
                        textAlign: "left",
                        paddingLeft: rem("24px"),
                        paddingRight: rem("24px"),
                        gap: rem("24px"),
                    }}
                    >

                        <Icon />
                        Some really long lorem ipsum: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                        aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit anim id est laborum.
                        <Button onClick={() => null}>Larry</Button>
                        <Button onClick={() => null}>Curly</Button>
                        <Button onClick={() => null}>Moe</Button>
                    </div>
                    <Group style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "end",
                        gap: "0.75rem",
                        padding: "0.75rem",
                        borderTop: "1px solid #E9ECEF",
                        width: "100%",
                        "& .mantine-Button-root[disabled]": {
                            backgroundColor: "var(--mantine-color-violet-1)",
                            color: "var(--mantine-color-violet-3)",
                        },
                    }}
                    >
                        <Button onClick={() => setOpened(false)}>Save and Close</Button>
                    </Group>

                </Modal>
            </>
        )
    },
}
