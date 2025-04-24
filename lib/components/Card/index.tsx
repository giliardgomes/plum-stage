import { forwardRef } from "react"
import { clsx } from "clsx"
import { Button } from "@/components/Button"
import { Text } from "@mantine/core"
import { Menu } from "@/components/Menu"
import { Stack } from "@mantine/core"
import { Group, Flex } from "@mantine/core"
import { EllipsisVerticalFarFAIcon } from "@/components/Icons"
import { Link } from "@/components/Link"
import classes from "./Card.module.css"

export interface CardProps {
    /** Set a static selector for engagement tracking with third party tools (ie: Pendo) */
    "data-plum-id"?: string
    /** Card icon */
    icon?: React.ReactNode
    /** Card title */
    title?: string
    /** Card description */
    description?: string
    /** Call to action link */
    ctaLink?: string
    /** Call to action text */
    ctaText?: string
    /** Menu items */
    menuItems?: Array<{
        label: string
        icon?: React.ReactNode
        onClick: () => void
        danger?: boolean
        "data-danger"?: boolean
    }>
    /** Additional CSS class names */
    className?: string
    /** Click handler */
    onClick?: () => void
    /** Additional content */
    children?: React.ReactNode
    /** Card variant */
    variant?: "horizontal" | "vertical"
}

export const Card = forwardRef<HTMLDivElement, CardProps>(({
    "data-plum-id": dataPlumId,
    icon,
    title,
    description,
    ctaLink,
    ctaText,
    menuItems,
    className,
    onClick,
    children,
    variant = "horizontal",
    ...rest
}, ref) => {
    return (
        <div
            ref={ref}
            className={clsx(classes.root, classes[variant], className)}
            onClick={onClick}
            role={onClick ? "button" : undefined}
            tabIndex={onClick ? 0 : undefined}
            data-plum-id={dataPlumId}
            {...rest}
        >
            <Stack gap="md">
                <Flex direction={variant === "vertical" ? "column" : "row"} justify="space-between" align={variant === "vertical" ? "center" : "flex-start"}>
                    <Flex direction={variant === "vertical" ? "column" : "row"} gap="md" align={variant === "vertical" ? "center" : "flex-start"}>
                        {icon && (
                            <div className={classes.icon}>
                                {icon}
                            </div>
                        )}
                        {(title || description) && (
                            <Stack gap={12} align={variant === "vertical" ? "center" : "flex-start"}>
                                <Stack gap={2}>
                                    {title && (
                                        <Text fw={500} c="gray.9" className={classes.title} ta={variant === "vertical" ? "center" : "left"}>{title}</Text>
                                    )}
                                    {description && (
                                        <Text c="gray.7" className={classes.description} ta={variant === "vertical" ? "center" : "left"}>{description}</Text>
                                    )}
                                </Stack>
                                {ctaLink && ctaText && (
                                    <Group justify={variant === "vertical" ? "center" : "flex-start"}>
                                        <Link
                                            href={ctaLink}
                                            className={classes.cta}
                                            onClick={(e) => e.stopPropagation()}
                                            variant="standalone"
                                        >
                                            <Group gap="xs">
                                                <Text size="sm">{ctaText}</Text>
                                            </Group>
                                        </Link>
                                    </Group>
                                )}
                            </Stack>
                        )}
                    </Flex>
                    {menuItems && menuItems.length > 0 && (
                        <Menu>
                            <Menu.Target>
                                <Button
                                    variant="tertiary"
                                    aria-haspopup="menu"
                                    aria-label="Card menu"
                                >
                                    <EllipsisVerticalFarFAIcon />
                                </Button>
                            </Menu.Target>
                            <Menu.Dropdown>
                                {menuItems.map((item, index) => (
                                    <Menu.Item
                                        key={index}
                                        leftSection={item.icon}
                                        onClick={item.onClick}
                                        data-danger={item["data-danger"]}
                                    >
                                        {item.label}
                                    </Menu.Item>
                                ))}
                            </Menu.Dropdown>
                        </Menu>
                    )}
                </Flex>
                {children}
            </Stack>
        </div>
    )
})

Card.displayName = "Card"
