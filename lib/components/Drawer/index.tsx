import { forwardRef, useEffect } from "react"
import { Drawer as MantineDrawer, Stack } from "@mantine/core"
import { Button } from "@/components/Button"
import { Title } from "@/components/Title"
import { XMarkFarFAIcon } from "@/components/Icons"
import classes from "./Drawer.module.css"

export type DrawerSize = "xs" | "sm" | "md" | "lg" | "xl"

const DRAWER_SIZES: Record<DrawerSize, number> = {
    xs: 320,
    sm: 380,
    md: 440,
    lg: 620,
    xl: 780,
}

export interface DrawerAction {
    label: string
    onClick: () => void
    variant?: "primary" | "secondary" | "tertiary" | "accent"
    danger?: boolean
    position?: "left" | "right"
}

export interface DrawerProps extends React.PropsWithChildren {
    /** Set a static selector for engagement tracking with third party tools (ie: Pendo) */
    "data-plum-id"?: string
    /** Whether the drawer is currently open */
    opened: boolean
    /** Called when the drawer should close */
    onClose: () => void
    /** Drawer title */
    title?: string
    /** Optional description text */
    description?: string
    /** Drawer size */
    size?: DrawerSize
    /** Position of the drawer */
    position?: "left" | "right"
    /** Array of action buttons */
    actions?: DrawerAction[]
    /** Additional class name */
    className?: string
    /** Class names for drawer parts */
    classNames?: {
        root?: string
        overlay?: string
        body?: string
        header?: string
        footer?: string
    }
}

export const Drawer = forwardRef<HTMLDivElement, DrawerProps>(({
    "data-plum-id": dataPlumId,
    opened,
    onClose,
    title,
    description,
    size = "md",
    position = "right",
    actions = [],
    children,
    className,
    classNames = {},
    ...rest
}, ref) => {
    useEffect(() => {
        if (opened) {
            document.body.style.overflow = "hidden"
        }
        return () => {
            document.body.style.overflow = "unset"
        }
    }, [opened])

    const leftActions = actions.filter((action) => action.position === "left")
    const rightActions = actions.filter((action) => action.position !== "left")

    return (
        <MantineDrawer
            ref={ref}
            opened={opened}
            onClose={onClose}
            position={position}
            size={DRAWER_SIZES[size]}
            classNames={{
                root: `${classes.root} ${classNames.root || ""}`,
                overlay: `${classes.overlay} ${classNames.overlay || ""}`,
                body: `${classes.body} ${classNames.body || ""}`,
                header: `${classes.header} ${classNames.header || ""}`,
                ...classNames,
            }}
            withCloseButton={false}
            data-plum-id={dataPlumId}
            {...rest}
        >
            <div className={classes.inner}>
                <div className={classes.content}>
                    <div className={classes.headerSection}>
                        <Stack gap="xs" w="100%">
                            {title && (
                                <Title order={4} className={classes.title}>
                                    {title}
                                </Title>
                            )}
                            {description && (
                                <p className={classes.description}>{description}</p>
                            )}
                        </Stack>
                        <Button
                            className={classes.closeButton}
                            onClick={onClose}
                            variant="tertiary"
                            size="sm"
                        >
                            <XMarkFarFAIcon />
                        </Button>
                    </div>

                    {children}
                </div>

                {actions.length > 0 && (
                    <div className={classes.footer}>
                        <div className={classes.leftActions}>
                            {leftActions.map((action, index) => (
                                <Button
                                    key={index}
                                    onClick={action.onClick}
                                    variant={action.variant || "tertiary"}
                                    data-danger={action.danger}
                                >
                                    {action.label}
                                </Button>
                            ))}
                        </div>
                        <div className={classes.rightActions}>
                            {rightActions.map((action, index) => (
                                <Button
                                    key={index}
                                    onClick={action.onClick}
                                    variant={action.variant || (index === rightActions.length - 1 ? "accent" : "primary")}
                                    data-danger={action.danger}
                                >
                                    {action.label}
                                </Button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </MantineDrawer>
    )
})

Drawer.displayName = "Drawer"
