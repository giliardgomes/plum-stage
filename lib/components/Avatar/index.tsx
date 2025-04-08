import { forwardRef } from "react"
import { Avatar as MantineAvatar, AvatarProps as MantineAvatarProps } from "@mantine/core"
import { UserLargeFarFAIcon } from "@/components/Icons"

import classes from "./Avatar.module.css"

export interface AvatarProps extends Omit<MantineAvatarProps, "radius"> {
    /** Set a static selector for engagement tracking with third party tools (ie: Pendo) */
    "data-plum-id"?: string
}

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(({
    className,
    src,
    alt,
    children,
    ...rest
}, ref) => {
    return (
        <MantineAvatar
            className={className}
            classNames={classes}
            ref={ref}
            src={src}
            alt={alt}
            radius="100%"
            size="md"
            {...rest}
        >
            {children || <UserLargeFarFAIcon />}
        </MantineAvatar>
    )
})

Avatar.displayName = "Avatar"
