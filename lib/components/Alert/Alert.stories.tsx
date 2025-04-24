import type { Meta, StoryObj } from "@storybook/react"
import { Alert, AlertProps } from "@/components/Alert"
import { useState } from "react"
import { Button } from "../Button"
import { Stack } from "@mantine/core"

const meta: Meta<typeof Alert> = {
    title: "Components/Alert",
    component: Alert,
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
    tags: ["autodocs"],
    argTypes: {
    },
}

export default meta

type Story = StoryObj<typeof Alert>

export const Default: Story = {
    args: {
        title: "Alert title",
        variant: "info",
    },
    render: (props: AlertProps) => (
        <Alert {...props}>
            This is an alert message with a title
        </Alert>
    ),
}

/**
 * Providing a function as the action prop will render an Action button; you must also supply an actionLabel.
 */
export const ActionButton: Story = {
    name: "Action button",

    args: {
        title: "Warning title",
        variant: "warning",
        action: () => alert("Action!"),
        actionLabel: "Action",
    },
    render: (props: AlertProps) => (
        <Alert {...props}>
            This is an alert message with an action button
        </Alert>
    ),
}

export const Multiline: Story = {
    args: {
        variant: "warning",
        action: () => alert("Action!"),
        actionLabel: "Action",
    },
    render: (props: AlertProps) => {
        const [showAlert, setShowAlert] = useState(true)
        if (!showAlert) {
            return <Button onClick={() => setShowAlert(true)}>Bring back the alert!</Button>
        }
        props.onClose = () => setShowAlert(false)
        return (
            <Alert {...props}>
                <Stack gap={0}>
                    This is an example of a multiline alert
                    <ul>
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                    </ul>
                </Stack>
            </Alert>
        )
    },
}

/**
 * Dismissible alerts can be closed by the user.
 * An alert is made Dismissible (rather than inline) by providing a function as the onClose prop.
 */
export const CloseButton: Story = {
    name: "Close button",

    args: {
        variant: "error",
    },
    render: (props: AlertProps) => {
        const [showAlert, setShowAlert] = useState(true)
        if (!showAlert) {
            return <Button onClick={() => setShowAlert(true)}>Bring back the alert!</Button>
        }
        props.onClose = () => setShowAlert(false)
        return (
            <Alert {...props}>
                This alert can be dismissed!
            </Alert>
        )
    },
}

export const Dismissible: Story = {
    args: {
        action: () => alert("Action!"),
        actionLabel: "Action",
        variant: "error",
    },
    render: (props: AlertProps) => {
        const [showAlert, setShowAlert] = useState(true)
        if (!showAlert) {
            return <Button onClick={() => setShowAlert(true)}>Bring back the alert!</Button>
        }
        props.onClose = () => setShowAlert(false)
        return (
            <Alert {...props}>
                This alert can be dismissed!
            </Alert>
        )
    },
}

/**
 * Loading alerts are used to indicate that an action is in progress.
 */
export const Loading: Story = {
    args: {
        variant: "loading",
    },
    render: (props: AlertProps) => (
        <Alert {...props}>
            This is a loading alert.
        </Alert>
    ),
}
