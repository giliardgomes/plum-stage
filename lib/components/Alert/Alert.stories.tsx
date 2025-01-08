import type { Meta, StoryObj } from "@storybook/react"
import { Alert, AlertProps } from "@/components/Alert"
import { useState } from "react"
import { Button } from "../Button"

const meta: Meta<typeof Alert> = {
    component: Alert,
    parameters: {
        docs: {
            description: {
                component: (
                    "Documentation: https://plum.quorum.us/4a128e208/p/490d52-alert/b/32e1a2<br>"
                    + "Figma: https://www.figma.com/design/mjUSsYy7JxOtylceOQgr3r/Design-System?node-id=10677-10611&t=CLzemVINLDxnqA0b-0"
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
        title: "Alert Title",
        variant: "info",
    },
    render: (props: AlertProps) => (
        <Alert {...props}>
            This is a basic inline info alert.
        </Alert>
    ),
}

/**
 * Inline Alert with Action
 * Providing a function as the action prop will render an Action button; you must also supply an actionLabel.
 */
export const InlineWarningAlertWithAction: Story = {
    args: {
        title: "Warning Title",
        variant: "warning",
        action: () => alert("Action!"),
        actionLabel: "Action",
    },
    render: (props: AlertProps) => (
        <Alert {...props}>
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>
        </Alert>
    ),
}

/**
 * Dismissible alerts can be closed by the user.
 * An alert is made Dismissible (rather than inline) by providing a function as the onClose prop.
 */
export const DismissibleErrorAlert: Story = {
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
