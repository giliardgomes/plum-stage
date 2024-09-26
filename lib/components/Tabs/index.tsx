import { ReactNode } from "react"

import { Tabs as MantineTabs, TabsProps as MantineTabsProps } from "@mantine/core"

import classes from "@/components/Tabs/Tabs.module.css"

export interface TabsProps extends MantineTabsProps {
    /** Default value for uncontrolled component */
    defaultValue?: string | null
    /** Tabs content */
    children: ReactNode
    /** Tabs orientation, `"horizontal"` by default */
    orientation?: "vertical" | "horizontal"
}

export const Tabs = ({ children, ...rest }: TabsProps) => {
    return (
        <MantineTabs
            classNames={classes}
            {...rest}
        >
            {children}
        </MantineTabs>
    )
}

Tabs.List = MantineTabs.List
Tabs.Tab = MantineTabs.Tab
Tabs.Panel = MantineTabs.Panel
