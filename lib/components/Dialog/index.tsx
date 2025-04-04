import { Title } from "@mantine/core"
import { Button, ButtonVariant } from "@/components/Button"
import { Modal } from "@/components/Modal"
import classes from "@/components/Dialog/Dialog.module.css"
import { forwardRef } from "react"

interface ButtonProps {
    danger?: boolean
    children: React.ReactNode
    onClick: () => void
    ref?: React.RefObject<HTMLButtonElement>
    variant?: ButtonVariant
}

export interface DialogProps {
    /** Button(s) to be displayed in the Modal; variant for the right-most defaults to Accent, others to Secondary */
    buttonProps: (
        ButtonProps
        | [ButtonProps]
        | [ButtonProps, ButtonProps]
        | [ButtonProps, ButtonProps, ButtonProps]
    )

    /** Displayed content of the Modal */
    children: React.ReactNode
    icon?: React.ReactNode

    /** Handler when user closes modal without clicking EITHER button */
    onClose: () => void

    opened: boolean

    /** Modal MAX Width - Defaults to 360px (can shrink to fit window) */
    size?: string
    title: string
}

export const Dialog = forwardRef<HTMLDivElement, DialogProps>(({
    buttonProps,
    children,
    icon,
    size = "360px",
    title,
    ...rest
}: DialogProps, ref) => {
    let leftButton, middleButton, rightButton
    if (Array.isArray(buttonProps)) {
        // Buttons fill from the right to the left; spread the reversed array (use slice to not mutate the prop)
        [rightButton, middleButton, leftButton] = buttonProps.slice().reverse()
    } else {
        rightButton = buttonProps
    }
    return (
        <Modal
            ref={ref}
            size={size}
            // Spread additional props like data-* attributes
            {...rest}
        >
            {icon}
            <div className={classes.textContainer}>
                <Title className={classes.title}>{title}</Title>
                {children}
            </div>
            <div className={classes.buttonContainer}>
                {leftButton && <Button variant="secondary" {...leftButton} />}
                {middleButton && <Button variant="secondary" {...middleButton} />}
                <Button variant="accent" data-autofocus {...rightButton} />
            </div>
        </Modal>
    )
})
