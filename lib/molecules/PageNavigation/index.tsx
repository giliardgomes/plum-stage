import { forwardRef } from "react"
import { Flex, Group } from "@mantine/core"
import { clsx } from "clsx"

import classes from "./PageNavigation.module.css"
import { Button, ButtonProps } from "../../components/Button"
import { Title } from "../../components/Title"
import { ArrowLeftFAIcon } from "../../components/Icons"

export interface PageNavigationProps {
    /** Set a static selector for engagement tracking with third party tools (ie: Pendo) */
    "data-plum-id"?: string
    /** The title text to display */
    title: string
    /** Optional click handler for the back button */
    onBackClick?: () => void
    /** Optional className for custom styling */
    className?: string
    /** Optional array of button props for action buttons */
    actions?: ButtonProps[]
}

export const PageNavigation = forwardRef<HTMLDivElement, PageNavigationProps>(({
    title,
    onBackClick,
    className,
    actions,
    "data-plum-id": dataPlumId,
    ...rest
}, ref) => {
    return (
        <div
            ref={ref}
            className={clsx(classes.root, className)}
            data-plum-id={dataPlumId}
            {...rest}
        >
            <div className={classes.container}>
                <Flex gap="xxs" w="100%">
                    {onBackClick && (
                        <Button
                            variant="tertiary"
                            aria-label="Go back"
                            size="md"
                            onClick={onBackClick}
                            color="gray"
                            className={classes.backButton}
                        >
                            <ArrowLeftFAIcon size={16} />
                        </Button>
                    )}
                    <Group justify="space-between" align="center" w="100%">
                        <Title
                            className={classes.title}
                            order={1}
                            size="xl"
                        >
                            {title}
                        </Title>

                        {actions && actions.length > 0 && (
                            <Group gap="xs">
                                {actions.map((actionProps, index) => (
                                    <Button
                                        key={index}
                                        size="sm"
                                        {...actionProps}
                                    />
                                ))}
                            </Group>
                        )}
                    </Group>
                </Flex>
            </div>
        </div>
    )
})

PageNavigation.displayName = "PageNavigation"
