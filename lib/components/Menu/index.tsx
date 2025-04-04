import React, { cloneElement, createContext, isValidElement, useContext } from "react"

import { Button } from "@/components/Button"
import { Menu as MantineMenu, MenuProps as MantineMenuProps } from "@mantine/core"

import classes from "./Menu.module.css"

export interface MenuProps extends MantineMenuProps {
    /** Set a static selector for engagement tracking with third party tools (ie: Pendo) */
    "data-plum-id"?: string
    /** Set the Menu to be disabled */
    disabled?: boolean
    /** Set the Menu to close on any item click */
    closeOnItemClick?: boolean
}

interface TargetProps {
    variant?: "accent" | "primary" | "secondary" | "tertiary" | "danger"
}

const MenuContext = createContext({ disabled: false })

export const Menu = ({ disabled, closeOnItemClick = true, children, ...rest }: MenuProps) => {
    return (
        <MenuContext.Provider value={{ disabled: disabled ?? false }}>
            <MantineMenu
                position="bottom-start"
                offset={2}
                classNames={classes}
                trigger="click" // discourage hover action for accessibility
                {...rest}
            >
                {children}
            </MantineMenu>
        </MenuContext.Provider>
    )
}
const Target = ({ children, ...rest }: React.PropsWithChildren<TargetProps>) => {
    const { disabled } = useContext(MenuContext)
    const newProps: any = { ...rest, disabled }
    if (typeof children === "string")
        return (
            <MantineMenu.Target>
                <Button {...newProps}>{children}</Button>
            </MantineMenu.Target>
        )
    if (isValidElement(children)) return <MantineMenu.Target>{cloneElement(children, newProps)}</MantineMenu.Target>
}

Menu.Target = Target
Menu.Item = MantineMenu.Item
Menu.Dropdown = MantineMenu.Dropdown
Menu.Divider = MantineMenu.Divider
