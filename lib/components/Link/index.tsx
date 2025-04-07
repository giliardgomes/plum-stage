import React from "react"
import { Anchor as MantineAnchor, AnchorProps as MantineAnchorProps } from "@mantine/core"
import { ArrowRightFarFAIcon } from "@/components/Icons"

import classes from "./Link.module.css"

export type LinkVariant = "inline" | "standalone"

export interface LinkProps extends Omit<MantineAnchorProps, "variant"> {
    /** Set a static selector for engagement tracking with third party tools (ie: Pendo) */
    "data-plum-id"?: string
    /** Link variant type. Defaults to "inline" */
    variant?: LinkVariant
    /** Set the link to be disabled */
    disabled?: boolean
    /** The content of the link */
    children: React.ReactNode
    /** The URL that the hyperlink points to */
    href?: string
    /** The target attribute specifies where to open the linked document */
    target?: "_blank" | "_self" | "_parent" | "_top"
    /** Specifies the relationship between the current document and the linked document */
    rel?: string
    /** Function to call when the link is clicked */
    onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void
    /** Additional CSS class names */
    className?: string
    /** Specifies whether the link is external (adds target="_blank" and rel="noopener noreferrer") */
    external?: boolean
}

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(({
    children,
    variant = "inline",
    disabled,
    className,
    ...rest
}, ref) => {
    const showArrow = variant === "standalone"

    return (
        <MantineAnchor
            ref={ref}
            className={className}
            classNames={classes}
            data-disabled={disabled || undefined}
            mod={{
                variant,
            }}
            {...rest}
        >
            {children}
            {showArrow && <ArrowRightFarFAIcon size={14} className={classes.icon} />}
        </MantineAnchor>
    )
})

Link.displayName = "Link"
