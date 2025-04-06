import { forwardRef } from "react"
import { Title as MantineTitle, TitleProps as MantineTitleProps } from "@mantine/core"

export interface TitleProps extends MantineTitleProps {
    /** Set a static selector for engagement tracking with third party tools (ie: Pendo) */
    "data-plum-id"?: string
}

export const Title = forwardRef<HTMLHeadingElement, TitleProps>(({
    className,
    ...rest
}, ref) => {
    return (
        <MantineTitle
            className={className}
            ref={ref}
            {...rest}
        />
    )
})

Title.displayName = "Title"
