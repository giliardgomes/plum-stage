import { Modal, Title } from "@mantine/core"
import { Button, ButtonVariant } from "@/components/Button"
import classes from "@/components/SingleActionModal/SingleActionModal.module.css"
import { forwardRef } from "react"

interface modalButtonProps {
    onClick: () => void
    children: React.ReactNode
    ref?: React.RefObject<HTMLButtonElement>
    variant?: ButtonVariant
    danger?: boolean
}

export interface SingleActionModalProps {
    /** Button(s) to be displayed in the Modal; variant for the right-most defaults to Accent, others to Secondary */
    buttonProps: (
        modalButtonProps
        | [modalButtonProps]
        | [modalButtonProps, modalButtonProps]
        | [modalButtonProps, modalButtonProps, modalButtonProps]
    )

    /** Displayed content of the Modal */
    children: React.ReactNode
    icon?: React.ReactNode
    isOpen: boolean

    /** Handler when user closes modal without clicking EITHER button */
    onClose: () => void
    title: string
}

export const SingleActionModal = forwardRef<HTMLDivElement, SingleActionModalProps>(({
    buttonProps,
    children,
    icon,
    isOpen,
    onClose,
    title,
    ...rest
}: SingleActionModalProps, ref) => {
    let leftButton, middleButton, rightButton
    if (Array.isArray(buttonProps)) {
        // Buttons fill from the right to the left; spread the reversed array (use slice to not mutate the prop)
        [rightButton, middleButton, leftButton] = buttonProps.slice().reverse()
    } else {
        rightButton = buttonProps
    }
    return (
        <Modal
            centered
            classNames={{
                body: classes.body,
                content: classes.content,
                title: classes.title,
            }}
            onClose={onClose}
            opened={isOpen}
            overlayProps={{
                blur: 2,
                backgroundOpacity: 0.40,
            }}
            ref={ref}
            size="360px"
            withCloseButton={false}
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
