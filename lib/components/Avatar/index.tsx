import { forwardRef } from "react"
import { Avatar as MantineAvatar, AvatarProps as MantineAvatarProps, rem } from "@mantine/core"
import { UserFarFAIcon } from "@/components/Icons"

import classes from "./Avatar.module.css"

export interface AvatarProps extends Omit<MantineAvatarProps, "radius" | "size"> {
    /** Set a static selector for engagement tracking with third party tools (ie: Pendo) */
    "data-plum-id"?: string
    /** Size of the avatar */
    size?: "xs" | "sm" | "md" | "lg" | "xl"
    /** Variant of the avatar */
    variant?: "default" | "republican" | "democrat"
}

const sizeToPixels = {
    xs: 16,
    sm: 32,
    md: 48,
    lg: 64,
    xl: 88,
}

const iconSizes = {
    xs: 8,
    sm: 14,
    md: 20,
    lg: 24,
    xl: 40,
}

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(({
    className,
    src,
    alt,
    children,
    size = "md",
    variant = "default",
    ...rest
}, ref) => {
    const iconSize = rem(iconSizes[size])

    return (
        <MantineAvatar
            className={className}
            classNames={classes}
            ref={ref}
            src={src}
            alt={alt}
            radius="100%"
            size={sizeToPixels[size]}
            mod={{ size, variant }}
            {...rest}
        >
            {children || <UserFarFAIcon style={{ width: iconSize, height: iconSize }} />}
        </MantineAvatar>
    )
})

Avatar.displayName = "Avatar"
