import React from "react"
import { Flex, Alert as MantineAlert, AlertProps as MantineAlertProps, Text, useMantineTheme, rem, Loader } from "@mantine/core"

import { Button } from "@/components/Button"
import { CircleInfoFarFAIcon, CircleExclamationFarFAIcon, TriangleExclamationFarFAIcon, XMarkFarFAIcon } from "@/components/Icons"

import classes from "@/components/Alert/Alert.module.css"

interface StandardAlertProps extends Omit<MantineAlertProps, "color" | "icon" | "radius" | "withCloseButton"> {
    /** Function to call when the Action button is clicked */
    action?: () => void
    /** Label for the Action button */
    actionLabel?: string
    /** Variant of the Alert */
    variant: "error" | "info" | "warning" | "loading"
}

interface InlineAlertProps extends StandardAlertProps {
    onClose?: never
    /** Title of the Alert */
    title?: string
}

interface PopupAlertProps extends StandardAlertProps {
    title?: never
}

export type AlertProps = InlineAlertProps | PopupAlertProps

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(({
    action,
    actionLabel,
    children,
    onClose,
    title,
    variant = "info",
    ...props
}, ref) => {
    const theme = useMantineTheme()

    let icon
    switch (variant) {
        case "error":
            icon = <CircleExclamationFarFAIcon color={theme.colors.red[5]} filled />
            break
        case "info":
            icon = <CircleInfoFarFAIcon color={theme.colors.blue[6]} filled />
            break
        case "warning":
            icon = <TriangleExclamationFarFAIcon color={theme.colors.orange[5]} filled />
            break
        case "loading":
            icon = <Loader size={rem(16)} color={theme.colors.violet[5]} />
            break
    }

    const titleElement = title ? <Text c="black" fw={700} className={classes.title}>{title}</Text> : undefined
    return (
        <MantineAlert
            {...props}
            classNames={{
                closeButton: classes.closeButton,
                icon: Boolean(title) ? classes.iconWithTitle : undefined,
                message: classes.message,
                root: classes.root,
                wrapper: classes.wrapper,
            }}
            radius="8px"
            title={titleElement}
            {...{
                icon,
                ref,
            }}
            data-variant={variant}
            withCloseButton={false}
        >
            <Flex className={classes.flex}>
                {children}
                <div className={classes.buttonsContainer}>
                    {action && (
                        <Button
                            data-plum-id="alert-action-button"
                            onClick={action}
                            variant="secondary"
                        >
                            {actionLabel}
                        </Button>
                    )}
                    {onClose && (
                        <Button
                            onClick={onClose}
                            variant="tertiary"
                            size="sm"
                        >
                            <XMarkFarFAIcon />
                        </Button>
                    )}
                </div>
            </Flex>
        </MantineAlert>
    )
})
