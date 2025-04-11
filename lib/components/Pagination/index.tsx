import { Group } from "@mantine/core"
import { ChevronLeftFAIcon, ChevronRightFAIcon } from "@/components/Icons"
import classes from "./Pagination.module.css"

export interface PaginationProps {
    /** Set a static selector for engagement tracking with third party tools (ie: Pendo) */
    "data-plum-id"?: string
    /** Total number of pages */
    total: number
    /** Current page */
    value: number
    /** Called when page changes */
    onChange: (page: number) => void
    /** Controlled component boundaries */
    boundaries?: number
    /** Number of siblings to show */
    siblings?: number
    /** Disable pagination */
    disabled?: boolean
    /** Custom className */
    className?: string
}

export const Pagination = ({
    total,
    value,
    onChange,
    boundaries = 1,
    siblings = 1,
    disabled = false,
    "data-plum-id": dataPlumId,
    className,
}: PaginationProps) => {
    const getRange = (start: number, end: number) => {
        const length = end - start + 1
        return Array.from({ length }, (_, index) => index + start)
    }

    const renderDots = (key: string) => (
        <span key={key} className={classes.dots}>
            •••
        </span>
    )

    const renderPageButton = (pageNumber: number) => (
        <button
            key={pageNumber}
            className={classes.paginationButton}
            onClick={() => onChange(pageNumber)}
            disabled={disabled}
            data-active={pageNumber === value}
            type="button"
        >
            {pageNumber}
        </button>
    )

    const renderPaginationItems = () => {
        const range = getRange(1, total)
        const items: React.ReactNode[] = []

        // Previous button
        items.push(
            <button
                key="prev"
                className={classes.navButton}
                onClick={() => onChange(value - 1)}
                disabled={disabled || value === 1}
                type="button"
            >
                <ChevronLeftFAIcon size={14} />
            </button>,
        )

        const leftBoundary = boundaries
        const rightBoundary = total - boundaries
        const totalVisibleNumbers = boundaries * 2 + siblings * 2 + 1

        // Simple case with no dots
        if (total <= totalVisibleNumbers) {
            range.forEach((page) => items.push(renderPageButton(page)))
        } else {
            // Complex case with dots
            const leftSiblingIndex = Math.max(value - siblings, boundaries)
            const rightSiblingIndex = Math.min(value + siblings, total - boundaries + 1)

            const showLeftDots = leftSiblingIndex > boundaries + 2
            const showRightDots = rightSiblingIndex < total - (boundaries + 1)

            if (!showLeftDots && showRightDots) {
                const leftItemCount = 3 + 2 * siblings
                const leftRange = getRange(1, leftItemCount)
                leftRange.forEach((page) => items.push(renderPageButton(page)))
                items.push(renderDots("dots-1"))
                getRange(total - (boundaries - 1), total).forEach((page) =>
                    items.push(renderPageButton(page)),
                )
            } else if (showLeftDots && !showRightDots) {
                getRange(1, boundaries).forEach((page) =>
                    items.push(renderPageButton(page)),
                )
                items.push(renderDots("dots-2"))
                const rightRange = getRange(
                    total - (2 + 2 * siblings),
                    total,
                )
                rightRange.forEach((page) => items.push(renderPageButton(page)))
            } else if (showLeftDots && showRightDots) {
                getRange(1, boundaries).forEach((page) =>
                    items.push(renderPageButton(page)),
                )
                items.push(renderDots("dots-3"))
                getRange(leftSiblingIndex, rightSiblingIndex).forEach((page) =>
                    items.push(renderPageButton(page)),
                )
                items.push(renderDots("dots-4"))
                getRange(total - (boundaries - 1), total).forEach((page) =>
                    items.push(renderPageButton(page)),
                )
            }
        }

        // Next button
        items.push(
            <button
                key="next"
                className={classes.navButton}
                onClick={() => onChange(value + 1)}
                disabled={disabled || value === total}
                type="button"
            >
                <ChevronRightFAIcon size={14} />
            </button>,
        )

        return items
    }

    return (
        <Group
            gap="xs"
            data-plum-id={dataPlumId}
            className={`${classes.root} pagination ${className || ''}`}
        >
            {renderPaginationItems()}
        </Group>
    )
}
