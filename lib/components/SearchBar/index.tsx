import { forwardRef, useState } from "react"
import { Input, Flex } from "@mantine/core"
import { XMarkFarFAIcon, StarFarFAIcon, SearchFarFAIcon } from "@/components/Icons"
import { Button } from "@/components/Button"

import classes from "./SearchBar.module.css"

export interface SearchBarProps {
    /** Set a static selector for engagement tracking with third party tools (ie: Pendo) */
    "data-plum-id"?: string
    /** The placeholder text for the search input */
    placeholder?: string
    /** Callback function when search value changes */
    onChange?: (value: string) => void
    /** Callback function when favorite button is clicked */
    onFavorite?: () => void
    /** Initial value for the search input */
    defaultValue?: string
    /** Controlled value for the search input */
    value?: string
    /** Callback function when input is clicked */
    onClick?: () => void
    /** Whether the SearchBar is disabled */
    disabled?: boolean
    /** Whether to show the standalone variant */
    variant?: "default" | "standalone"
}

export const SearchBar = forwardRef<HTMLInputElement, SearchBarProps>(({
    placeholder = "Search...",
    onChange,
    onFavorite,
    defaultValue = "",
    value,
    onClick,
    variant = "default",
    ...rest
}, ref) => {
    const [internalValue, setInternalValue] = useState(defaultValue)
    const [isFavorite, setIsFavorite] = useState(false)
    const [isExpanded, setIsExpanded] = useState(false)

    const currentValue = value !== undefined ? value : internalValue

    const handleChange = (newValue: string) => {
        if (value === undefined) {
            setInternalValue(newValue)
        }
        onChange?.(newValue)
    }

    const handleFavorite = () => {
        setIsFavorite(!isFavorite)
        onFavorite?.()
    }

    const handleClear = () => {
        if (value === undefined) {
            setInternalValue("")
        }
        onChange?.("")
    }

    const handleClick = () => {
        if (variant === "standalone") {
            setIsExpanded(true)
        }
        onClick?.()
    }

    const handleBlur = () => {
        if (variant === "standalone" && !currentValue) {
            setIsExpanded(false)
        }
    }

    if (variant === "standalone" && !isExpanded) {
        return (
            <div className={classes.standalone}>
                <Button
                    variant="tertiary"
                    size="sm"
                    onClick={handleClick}
                    aria-label="Search"
                >
                    <SearchFarFAIcon />
                </Button>
            </div>
        )
    }

    return (
        <div className={`${classes.wrapper} ${variant === "standalone" ? `${classes.standalone} ${classes.standaloneExpanded}` : ""}`}>
            <Input
                ref={ref}
                classNames={{
                    ...classes,
                    section: classes.section,
                    wrapper: `${classes.leftSectionParent} ${classes.rightSectionParent}`,
                }}
                placeholder={placeholder}
                value={currentValue}
                onChange={(event) => handleChange(event.currentTarget.value)}
                onClick={handleClick}
                onBlur={handleBlur}
                leftSection={(
                    <div className={classes.leftSection}>
                        <SearchFarFAIcon />
                    </div>
                )}
                rightSection={(
                    <div className={classes.rightSection}>
                        {currentValue && (
                            <Flex align="center" gap="xxs">
                                <Button
                                    variant="tertiary"
                                    size="sm"
                                    onClick={handleFavorite}
                                    aria-label="Favorite"
                                >
                                    <StarFarFAIcon filled={isFavorite} />
                                </Button>
                                <Button
                                    variant="tertiary"
                                    size="sm"
                                    onClick={handleClear}
                                    aria-label="Clear"
                                >
                                    <XMarkFarFAIcon />
                                </Button>
                            </Flex>
                        )}
                    </div>
                )}
                {...rest}
            />
        </div>
    )
})

SearchBar.displayName = "SearchBar"
