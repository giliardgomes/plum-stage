import { forwardRef, useEffect } from "react"
import { Stack, Flex } from "@mantine/core"
import { Button } from "@/components/Button"
import { XMarkFarFAIcon } from "@/components/Icons"
import classes from "./SearchPopdown.module.css"

export interface SearchPopdownProps {
    /** Set a static selector for engagement tracking with third party tools (ie: Pendo) */
    "data-plum-id"?: string
    /** Whether the popdown is opened */
    opened: boolean
    /** Callback to handle opening/closing the popdown */
    onOpenChange: (opened: boolean) => void
    /** Content to be displayed in the popdown */
    children: React.ReactNode
    /** The target element that triggers the popdown */
    target: React.ReactNode
}

export const SearchPopdown = forwardRef<HTMLDivElement, SearchPopdownProps>(({
    opened,
    onOpenChange,
    children,
    target,
    ...rest
}, ref) => {
    useEffect(() => {
        const handleEscapeKey = (event: KeyboardEvent) => {
            if (event.key === "Escape" && opened) {
                onOpenChange(false)
            }
        }

        document.addEventListener("keydown", handleEscapeKey)

        return () => {
            document.removeEventListener("keydown", handleEscapeKey)
        }
    }, [opened, onOpenChange])

    return (
        <div className={classes.container} style={{ width: "100%" }} ref={ref} {...rest}>
            <div className={classes.target}>
                {target}
            </div>
            <div className={`${classes.dropdown} ${opened ? classes.dropdownOpen : ""}`}>
                <Stack>
                    {children}
                </Stack>
            </div>
        </div>
    )
})

SearchPopdown.displayName = "SearchPopdown"
