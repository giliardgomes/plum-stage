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
}

export const SearchBar = forwardRef<HTMLInputElement, SearchBarProps>(({
    placeholder = "Search...",
    onChange,
    onFavorite,
    defaultValue = "",
    ...rest
}, ref) => {
    const [value, setValue] = useState(defaultValue)
    const [isFavorite, setIsFavorite] = useState(false)

    const handleChange = (newValue: string) => {
        setValue(newValue)
        onChange?.(newValue)
    }

    const handleFavorite = () => {
        setIsFavorite(!isFavorite)
        onFavorite?.()
    }

    const handleClear = () => {
        setValue("")
        onChange?.("")
    }

    return (
        <Input
            ref={ref}
            classNames={{
                ...classes,
                section: classes.section,
                wrapper: `${classes.leftSectionParent} ${classes.rightSectionParent}`,
            }}
            placeholder={placeholder}
            value={value}
            onChange={(event) => handleChange(event.currentTarget.value)}
            leftSection={(
                <div className={classes.leftSection}>
                    <SearchFarFAIcon />
                </div>
            )}
            rightSection={(
                <div className={classes.rightSection}>
                    {value && (
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
    )
})

SearchBar.displayName = "SearchBar"
