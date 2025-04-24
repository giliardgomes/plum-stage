import { forwardRef } from "react"
import { Collapse as MantineCollapse, CollapseProps as MantineCollapseProps } from "@mantine/core"
import { ChevronDownFarFAIcon, ChevronUpFarFAIcon } from "@/components/Icons"
import classes from "./Collapse.module.css"
import { clsx } from "clsx"

export interface CollapseProps extends Omit<MantineCollapseProps, "classNames"> {
    /** Set a static selector for engagement tracking with third party tools (ie: Pendo) */
    "data-plum-id"?: string
    /** Content that will be rendered when collapse is opened */
    children: React.ReactNode
    /** If true collapse content will be visible */
    in: boolean
    /** Called each time transition ends */
    onTransitionEnd?: () => void
    /** Transition duration in ms */
    transitionDuration?: number
    /** Transition timing function */
    transitionTimingFunction?: string
    /** Key of theme.animation or any valid CSS transition timing function */
    animateOpacity?: boolean
    /** Label for the trigger button */
    label: string
    /** Callback when trigger is clicked */
    onToggle: () => void
    /** Variant of the collapse */
    variant?: "default" | "card"
}

export const Collapse = forwardRef<HTMLDivElement, CollapseProps>(({
    "data-plum-id": dataPlumId,
    children,
    in: opened,
    transitionDuration = 200,
    transitionTimingFunction = "ease",
    animateOpacity = true,
    label,
    onToggle,
    variant = "default",
    ...rest
}, ref) => {
    return (
        <div className={clsx(classes.root, classes[variant])}>
            <button
                onClick={onToggle}
                className={classes.button}
            >
                {label}
                {opened ? <ChevronUpFarFAIcon /> : <ChevronDownFarFAIcon />}
            </button>

            <MantineCollapse
                ref={ref}
                in={opened}
                transitionDuration={transitionDuration}
                transitionTimingFunction={transitionTimingFunction}
                animateOpacity={animateOpacity}
                className={classes.root}
                data-plum-id={dataPlumId}
                {...rest}
            >
                <div className={classes.collapseContent}>
                    {children}
                </div>
            </MantineCollapse>
        </div>
    )
})

Collapse.displayName = "Collapse"
