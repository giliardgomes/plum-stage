import { forwardRef } from "react"
import { Chip as MantineChip, ChipProps as MantineChipProps } from "@mantine/core"
import { CheckFarFAIcon } from "@/components/Icons"

import classes from "./SelectableTag.module.css"

export interface SelectableTagProps extends Omit<MantineChipProps, "size" | "radius" | "variant"> {
    /** Set a static selector for engagement tracking with third party tools (ie: Pendo) */
    "data-plum-id"?: string
    /** The size of the tag */
    size?: "sm" | "md" | "lg"
    /** Whether the tag is disabled */
    disabled?: boolean
    /** The label content */
    children: React.ReactNode
}

const SelectableTag = forwardRef<HTMLInputElement, SelectableTagProps>(({
    className,
    size = "md",
    disabled,
    children,
    ...rest
}, ref) => {
    return (
        <MantineChip
            ref={ref}
            classNames={classes}
            size={size}
            variant="filled"
            disabled={disabled}
            icon={<CheckFarFAIcon />}
            {...rest}
        >
            {children}
        </MantineChip>
    )
})

SelectableTag.displayName = "SelectableTag"

export { SelectableTag }
