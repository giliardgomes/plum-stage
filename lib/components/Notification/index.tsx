import React from "react"
import clsx from "clsx"
import { Group, Stack, Transition } from "@mantine/core"
import { CheckCircleFarFAIcon, TriangleExclamationFarFAIcon, CircleExclamationFarFAIcon, XMarkFarFAIcon } from "@/components/Icons"
import { Button } from "@/components/Button"

import classes from "./Notification.module.css"

export interface NotificationProps {
    /** The message content of the notification */
    message: string
    /** The variant determines the color and icon of the notification */
    variant: "success" | "warning" | "error"
    /** Whether to show the close button */
    withCloseButton?: boolean
    /** Function to call when the close button is clicked */
    onClose?: () => void
    /** Whether the notification is visible */
    visible?: boolean
    /** Additional class name */
    className?: string
    /** Label for the action button */
    actionLabel?: string
    /** Function to call when the action button is clicked */
    onAction?: () => void
    /** Transition properties */
    transition?: "slide-right" | "slide-left" | "slide-up" | "slide-down" | "fade" | "scale" | "scale-y" | "scale-x" | "skew-up" | "skew-down" | "rotate-left" | "rotate-right" | "pop" | "pop-top-left" | "pop-top-right" | "pop-bottom-left" | "pop-bottom-right"
    /** Transition duration in ms */
    transitionDuration?: number
    /** Transition timing function */
    transitionTimingFunction?: string
    /** Position of the notification */
    position?: "top-right" | "top-left" | "bottom-right" | "bottom-left"
}

export const Notification = React.forwardRef<HTMLDivElement, NotificationProps>(({
    message,
    variant,
    withCloseButton = true,
    onClose,
    className,
    visible = true,
    actionLabel,
    onAction,
    transition = "slide-left",
    transitionDuration = 200,
    transitionTimingFunction = "ease",
    position = "bottom-right",
    ...props
}, ref) => {
    const variantConfig = {
        success: {
            icon: <CheckCircleFarFAIcon size={16} filled={true} />,
            color: "var(--mantine-color-green-5)",
        },
        warning: {
            icon: <TriangleExclamationFarFAIcon size={16} filled={true} />,
            color: "var(--mantine-color-orange-5)",
        },
        error: {
            icon: <CircleExclamationFarFAIcon size={16} filled={true} />,
            color: "var(--mantine-color-red-5)",
        },
    }

    const { icon, color } = variantConfig[variant]

    const positionStyles = {
        "top-right": { top: 32, right: 32 },
        "top-left": { top: 32, left: 32 },
        "bottom-right": { bottom: 32, right: 32 },
        "bottom-left": { bottom: 32, left: 32 },
    }

    const content = (
        <Stack gap="xs" className="notificationStack">
            <div
                className={clsx(classes.notification, classes[variant], className)}
                ref={ref}
                role="alert"
                {...props}
            >
                <div className={classes.content}>
                    <Group gap="xs" align="center" wrap="nowrap">
                        <div className={classes.icon} style={{ color }}>
                            {icon}
                        </div>
                        <div className={classes.message}>{message}</div>
                    </Group>
                </div>
                <div className={classes.actions}>
                    {actionLabel && onAction && (
                        <Button
                            variant="tertiary"
                            size="sm"
                            onClick={onAction}
                            className={classes.notificationActionBtn}
                        >
                            {actionLabel}
                        </Button>
                    )}
                    {withCloseButton && (
                        <Button
                            variant="tertiary"
                            size="sm"
                            onClick={onClose}
                            aria-label="Close notification"
                            className={classes.closeButton}
                            leftSection={<XMarkFarFAIcon size={16} />}
                        />
                    )}
                </div>
            </div>
        </Stack>
    )

    return (
        <div style={{ position: "fixed", zIndex: 999, ...positionStyles[position] }}>
            <Transition
                mounted={visible}
                transition={transition}
                duration={transitionDuration}
                timingFunction={transitionTimingFunction}
            >
                {(styles) => <div style={styles}>{content}</div>}
            </Transition>
        </div>
    )
})

Notification.displayName = "Notification"
