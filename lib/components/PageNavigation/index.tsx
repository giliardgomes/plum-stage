import { forwardRef } from "react"
import { Stack } from "@mantine/core"
import { clsx } from "clsx"

import classes from "@/components/PageNavigation/PageNavigation.module.css"
import { Button } from "@/components/Button"
import { Title } from "@/components/Title"
import { ArrowLeftFAIcon } from "@/components/Icons"

export interface PageNavigationProps {
    /** Set a static selector for engagement tracking with third party tools (ie: Pendo) */
    "data-plum-id"?: string
    /** The title text to display */
    title: string
    /** Optional click handler for the back button */
    onBackClick?: () => void
    /** Optional className for custom styling */
    className?: string
}

export const PageNavigation = forwardRef<HTMLDivElement, PageNavigationProps>(({
    title,
    onBackClick,
    className,
    "data-plum-id": dataPlumId,
    ...rest
}, ref) => {
    return (
        <Stack
            align="flex-start"
            ref={ref}
            className={clsx(classes.root, className)}
            gap="xxs"
            data-plum-id={dataPlumId}
            {...rest}
        >
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
            <Title
                className={classes.title}
                order={1}
                size="xl"
            >
                {title}
            </Title>
        </Stack>
    )
})

PageNavigation.displayName = "PageNavigation"
