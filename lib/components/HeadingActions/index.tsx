import { ReactNode } from "react"
import { Button } from "../Button"
import classes from "./HeadingActions.module.css"

export interface HeadingActionsProps {
    /** Heading text */
    heading: string | ReactNode
    /** Primary action button label */
    primaryActionLabel?: string
    /** Primary action button icon */
    primaryActionIcon?: ReactNode
    /** Primary action click handler */
    onPrimaryAction?: () => void
    /** Secondary actions to be displayed */
    secondaryActions?: Array<{
        /** Action label for accessibility */
        label: string
        /** Action icon */
        icon: ReactNode
        /** Action click handler */
        onClick: () => void
    }>
}

export function HeadingActions({
    heading,
    primaryActionLabel,
    primaryActionIcon,
    onPrimaryAction,
    secondaryActions = [],
}: HeadingActionsProps) {
    return (
        <div className={classes.root}>
            <div className={classes.heading}>
                {heading}
            </div>
            <div className={classes.actions}>
                {secondaryActions.map((action, index) => (
                    <Button
                        key={index}
                        variant="tertiary"
                        aria-label={action.label}
                        onClick={action.onClick}
                    >
                        {action.icon}
                    </Button>
                ))}
                {primaryActionLabel && (
                    <Button
                        variant="primary"
                        leftSection={primaryActionIcon}
                        onClick={onPrimaryAction}
                    >
                        {primaryActionLabel}
                    </Button>
                )}
            </div>
        </div>
    )
}
