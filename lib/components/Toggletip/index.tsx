import { useState } from "react"
import { Popover } from "@mantine/core"
import { Button } from "@/components/Button"
import { CircleInfoFarFAIcon } from "@/components/Icons"
import { Title } from "@/components/Title"
import { Link } from "@/components/Link"
import classes from "./Toggletip.module.css"

export type TogglePosition = "top" | "top-start" | "top-end" | "bottom" | "bottom-start" | "bottom-end" | "left" | "left-start" | "left-end" | "right" | "right-start" | "right-end"

export interface ToggleAction {
    label: string
    onClick: () => void
    variant?: "primary" | "secondary" | "tertiary"
}

export interface ToggleLink {
    label: string
    href: string
    target?: string
}

export interface ToggletipProps {
    /** Set a static selector for engagement tracking with third party tools (ie: Pendo) */
    "data-plum-id"?: string
    /** The content to display in the toggletip */
    content: string
    /** Optional title for the heading variant */
    title?: string
    /** Position of the toggletip */
    position?: TogglePosition
    /** Actions to display at the bottom */
    actions?: ToggleAction[]
    /** Link action to display at the bottom */
    link?: ToggleLink
    /** Additional class name */
    className?: string
}

export const Toggletip = ({
    "data-plum-id": dataPlumId,
    content,
    title,
    position = "bottom",
    actions,
    link,
    className,
}: ToggletipProps) => {
    const [opened, setOpened] = useState(false)

    return (
        <Popover
            opened={opened}
            onChange={setOpened}
            position={position}
            classNames={classes}
            withArrow
            offset={8}
        >
            <Popover.Target>
                <Button
                    variant="tertiary"
                    size="sm"
                    onClick={() => setOpened((o) => !o)}
                    data-plum-id={dataPlumId}
                    className={className}
                >
                    <CircleInfoFarFAIcon />
                </Button>
            </Popover.Target>

            <Popover.Dropdown>
                <div className={classes.content}>
                    {title && (
                        <Title order={6} className={classes.title}>
                            {title}
                        </Title>
                    )}
                    <p className={classes.text}>{content}</p>

                    {(actions || link) && (
                        <div className={classes.footer}>
                            {actions && (
                                <div className={classes.actions}>
                                    {actions.map((action, index) => (
                                        <Button
                                            key={index}
                                            onClick={action.onClick}
                                            variant={action.variant || "primary"}
                                            size="sm"
                                        >
                                            {action.label}
                                        </Button>
                                    ))}
                                </div>
                            )}
                            {link && (
                                <Link
                                    href={link.href}
                                    target={link.target as "_blank" | "_self" | "_parent" | "_top"}
                                    className={classes.link}
                                    variant="standalone"
                                >
                                    {link.label}
                                </Link>
                            )}
                        </div>
                    )}
                </div>
            </Popover.Dropdown>
        </Popover>
    )
}

Toggletip.displayName = "Toggletip"
