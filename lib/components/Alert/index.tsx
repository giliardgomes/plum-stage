import React from "react"
import { Grid, Alert as MantineAlert, AlertProps as MantineAlertProps, Text, useMantineTheme } from "@mantine/core"

import { Button } from "@/components/Button"
import { CircleInfoFarFAIcon, CircleXmarkFarFAIcon, TriangleExclamationFarFAIcon } from "@/components/Icons"

import classes from "@/components/Alert/Alert.module.css"

interface StandardAlertProps extends Omit<MantineAlertProps, "color" | "icon" | "radius" | "withCloseButton"> {
    /** Function to call when the Action button is clicked */
    action?: () => void
    /** Label for the Action button */
    actionLabel?: string
    /** Variant of the Alert */
    variant: "error" | "info" | "warning"
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

    let color, icon
    switch (variant) {
        case "error":
            color = "red"
            icon = <CircleXmarkFarFAIcon color={theme.colors.red[9]} filled />
            break
        case "info":
            color = "blue"
            icon = <CircleInfoFarFAIcon color={theme.colors.blue[7]} filled />
            break
        case "warning":
            color = "yellow"
            icon = <TriangleExclamationFarFAIcon color={theme.colors.yellow[7]} filled />
            break
    }

    const titleElement = title ? <Text c="black" fw={700}>{title}</Text> : undefined

    const getInner = () => {
        if (action) {
            return (
                <div className={classes.innerContainer}>
                    <Grid classNames={{ root: classes.grid, inner: classes.gridInner }}>
                        <Grid.Col className={classes.gridCol} span="auto">
                            {children}
                        </Grid.Col>
                        <Grid.Col className={classes.gridCol} span="content">
                            <Button data-plum-id="alert-action-button" onClick={action} variant="secondary">{actionLabel}</Button>
                        </Grid.Col>
                    </Grid>
                </div>
            )
        }
        return children
    }

    return (
        <MantineAlert
            {...props}
            classNames={{ root: classes.root, closeButton: classes.closeButton }}
            radius="8px"
            title={titleElement}
            {...{
                color,
                icon,
                onClose,
                ref,
            }}
            withCloseButton={Boolean(onClose) || undefined}
        >
            {getInner()}
        </MantineAlert>
    )
})
