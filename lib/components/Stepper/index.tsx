import React from "react"
import { Stepper as MantineStepper, StepperProps as MantineStepperProps } from "@mantine/core"
import { CheckFarFAIcon, PenFarFAIcon, CircleXmarkFarFAIcon } from "@/components/Icons"
import { ProgressIndicator } from "@/components/ProgressIndicator"
import classes from "./Stepper.module.css"

export interface StepperProps extends Omit<MantineStepperProps, "classNames"> {
    /** Set a static selector for engagement tracking with third party tools (ie: Pendo) */
    "data-plum-id"?: string
    /** Orientation of the stepper */
    orientation?: "horizontal" | "vertical"
    /** Steps with error state */
    errorSteps?: number[]
    /** Steps with loading state */
    loadingSteps?: number[]
}

export const Stepper = React.forwardRef<HTMLDivElement, StepperProps>(({
    orientation = "horizontal",
    errorSteps = [],
    loadingSteps = [],
    ...props
}, ref) => {
    return (
        <MantineStepper
            ref={ref}
            classNames={classes}
            orientation={orientation}
            completedIcon={(
                <>
                    <CheckFarFAIcon className={classes.checkIcon} />
                    <PenFarFAIcon className={classes.penIcon} />
                </>
            )}
            {...props}
        >
            {React.Children.map(props.children, (child, index) => {
                if (!React.isValidElement(child)) return child

                const isError = errorSteps.includes(index)
                const isLoading = loadingSteps.includes(index)

                return React.cloneElement(child, {
                    ...child.props,
                    icon: isError
                        ? <CircleXmarkFarFAIcon />
                        : isLoading
                            ? <ProgressIndicator size="xs" className={classes.stepLoader} />
                            : child.props.icon,
                    className: `${child.props.className || ""} ${isError ? classes.stepError : ""} ${isLoading ? classes.stepLoading : ""}`,
                    "data-error": isError || undefined,
                    classNames: {
                        ...child.props.classNames,
                        stepIcon: `${classes.stepIcon} ${isError ? classes.stepIconError : ""}`,
                        stepLabel: `${classes.stepLabel} ${isError ? classes.stepLabelError : ""}`,
                    },
                })
            })}
        </MantineStepper>
    )
})

Stepper.displayName = "Stepper"
export const Step = MantineStepper.Step
Step.displayName = "Step"
