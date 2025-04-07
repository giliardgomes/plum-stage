import { forwardRef } from "react"
import { SegmentedControl as MantineSegmentedControl, SegmentedControlProps as MantineSegmentedControlProps } from "@mantine/core"

import classes from "./SegmentedControl.module.css"

export interface SegmentedControlProps extends Omit<MantineSegmentedControlProps, "classNames" | "size"> {
    /** Set a static selector for engagement tracking with third party tools (ie: Pendo) */
    "data-plum-id"?: string
    /** Size of the SegmentedControl. Defaults to "md" */
    size?: "sm" | "md" | "lg"
}

const SegmentedControl = forwardRef<HTMLDivElement, SegmentedControlProps>(
    ({ className, size = "md", ...rest }, ref) => {
        return (
            <MantineSegmentedControl
                ref={ref}
                classNames={{
                    ...classes,
                    indicator: classes.indicator,
                }}
                transitionDuration={200}
                transitionTimingFunction="ease"
                {...rest}
                mod={{ size }}
            />
        )
    },
)

SegmentedControl.displayName = "SegmentedControl"

export { SegmentedControl }
