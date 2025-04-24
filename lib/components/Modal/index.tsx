import { Button } from "@/components/Button"
import { Title } from "@/components/Title"
import { TrashFarFAIcon, PaperPlaneTopFarFAIcon, TriangleExclamationFarFAIcon, XMarkFarFAIcon } from "@/components/Icons"
import classes from "@/components/Modal/Modal.module.css"
import { forwardRef, useEffect } from "react"
import { Transition, MantineTransition, Stack } from "@mantine/core"

export type ModalVariant = "confirmation" | "warning" | "danger" | "default"

export interface ModalAction {
    label: string
    onClick: () => void
    variant?: "primary" | "secondary" | "tertiary" | "accent"
    danger?: boolean
    position?: "left" | "right"
}

export interface ModalProps extends React.PropsWithChildren {
    centered?: boolean
    children: React.ReactNode
    className?: string
    classNames?: {
        wrapper?: string
        overlay?: string
        body?: string
        header?: string
        footer?: string
    }
    onClose: () => void
    opened: boolean
    position?: "top" | "bottom" | "left" | "right" | "center"
    size?: string
    title?: string
    actions?: ModalAction[]
    variant?: ModalVariant
    message?: string
    primaryActionLabel?: string
    secondaryActionLabel?: string
    onPrimaryAction?: () => void
    onSecondaryAction?: () => void
    "data-plum-id"?: string
    transition?: MantineTransition
    transitionDuration?: number
    transitionTimingFunction?: string
}

export const Modal = forwardRef<HTMLDivElement, ModalProps>(({
    centered = true,
    children,
    className,
    classNames = {},
    onClose,
    opened,
    position = "center",
    size = "360px",
    title,
    actions = [],
    variant = "default",
    message,
    primaryActionLabel,
    secondaryActionLabel,
    onPrimaryAction,
    onSecondaryAction,
    transition = "slide-up",
    transitionDuration = 200,
    transitionTimingFunction = "ease",
    ...rest
}, ref) => {
    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape" && opened) {
                onClose()
            }
        }

        if (opened) {
            document.body.style.overflow = "hidden"
            document.addEventListener("keydown", handleEscape)
        }

        return () => {
            document.body.style.overflow = "unset"
            document.removeEventListener("keydown", handleEscape)
        }
    }, [opened, onClose])

    const renderContent = () => {
        if (variant === "default") {
            const leftActions = actions.filter((action) => action.position === "left")
            const rightActions = actions.filter((action) => action.position !== "left")

            return (
                <>
                    {title && (
                        <div className={`${classes.header} ${classNames.header || ""}`}>
                            <Title order={4} className={classes.title}>{title}</Title>
                            <Button
                                className={classes.closeButton}
                                onClick={onClose}
                                variant="tertiary"
                                size="lg"
                            >
                                <XMarkFarFAIcon />
                            </Button>
                        </div>
                    )}
                    <div className={`${classes.contentWrapper} ${classNames.body || ""}`}>
                        {children}
                    </div>
                    {actions.length > 0 && (
                        <div className={`${classes.footer} ${classNames.footer || ""}`}>
                            {leftActions.map((action, index) => (
                                <Button
                                    key={`left-${index}`}
                                    variant={action.variant || "tertiary"}
                                    onClick={action.onClick}
                                    danger={action.danger}
                                    style={{ marginLeft: "-0.5rem" }}
                                >
                                    {action.label}
                                </Button>
                            ))}
                            <div style={{ flex: 1 }} />
                            {rightActions.map((action, index) => (
                                <Button
                                    key={`right-${index}`}
                                    variant={action.variant || (index === rightActions.length - 1 ? "accent" : "secondary")}
                                    onClick={action.onClick}
                                    danger={action.danger}
                                >
                                    {action.label}
                                </Button>
                            ))}
                        </div>
                    )}
                </>
            )
        }

        return (
            <div className={`${classes.variantContainer} ${classNames.body || ""}`}>
                <Stack className={classes.variantIcon} data-variant={variant}>
                    {variant === "confirmation" && <PaperPlaneTopFarFAIcon size={16} />}
                    {variant === "warning" && <TriangleExclamationFarFAIcon size={16} />}
                    {variant === "danger" && <TrashFarFAIcon size={16} />}
                </Stack>
                <Stack gap="xxs">
                    {title && <Title order={4} className={classes.variantTitle}>{title}</Title>}
                    {message && <p className={classes.variantMessage}>{message}</p>}
                </Stack>
                <div className={classes.variantActions}>
                    {variant === "confirmation" && (
                        <>
                            <Button variant="tertiary" onClick={onSecondaryAction}>
                                {secondaryActionLabel || "Edit"}
                            </Button>
                            <Button variant="accent" onClick={onPrimaryAction}>
                                {primaryActionLabel}
                            </Button>
                        </>
                    )}
                    {variant === "warning" && (
                        <>
                            <Button variant="tertiary" onClick={onSecondaryAction}>
                                {secondaryActionLabel || "Cancel"}
                            </Button>
                            <Button variant="accent" onClick={onPrimaryAction}>
                                {primaryActionLabel || "Leave"}
                            </Button>
                        </>
                    )}
                    {variant === "danger" && (
                        <>
                            <Button variant="tertiary" onClick={onSecondaryAction}>
                                {secondaryActionLabel || "Cancel"}
                            </Button>
                            <Button danger onClick={onPrimaryAction}>
                                {primaryActionLabel || "Delete"}
                            </Button>
                        </>
                    )}
                </div>
            </div>
        )
    }

    return (
        <div className={`${classes.wrapper} ${classNames.wrapper || ""}`}>
            <Transition
                mounted={opened}
                transition="fade"
                duration={transitionDuration}
                timingFunction={transitionTimingFunction}
            >
                {(styles) => (
                    <div className={`${classes.overlay} ${classNames.overlay || ""}`} onClick={onClose} style={styles} />
                )}
            </Transition>

            <Transition
                mounted={opened}
                transition={transition}
                duration={transitionDuration}
                timingFunction={transitionTimingFunction}
            >
                {(styles) => (
                    <div
                        className={`${classes.modal} ${className || ""}`}
                        style={{
                            ...styles,
                            maxWidth: size,
                            ...(position === "center" && centered
                                ? {
                                    top: "50%",
                                    transform: `${styles.transform || ""} translateY(-50%)`,
                                }
                                : {}),
                        }}
                        ref={ref}
                        {...rest}
                    >
                        {renderContent()}
                    </div>
                )}
            </Transition>
        </div>
    )
})

Modal.displayName = "Modal"
