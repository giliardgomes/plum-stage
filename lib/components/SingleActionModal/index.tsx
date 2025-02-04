import { Modal, Title } from "@mantine/core"
import { Button } from "@/components/Button"
import classes from "@/components/SingleActionModal/SingleActionModal.module.css"
import { forwardRef } from "react"

interface modalButtonProps {
    onClick: () => void
    children: React.ReactNode
    ref?: React.RefObject<HTMLButtonElement>
}

export interface SingleActionModalProps {
    /** Button to be displayed in the Modal; on the right if there is a Secondary button, receives focus by default */
    buttonProps: modalButtonProps

    /** Displayed content of the Modal */
    children: React.ReactNode
    icon?: React.ReactNode
    isOpen: boolean

    /** Handler when user closes modal without clicking EITHER button */
    onClose: () => void

    /** Secondary button to be displayed in the Modal (on the left) */
    secondaryButtonProps?: modalButtonProps
    title: string
}

export const SingleActionModal = forwardRef<HTMLDivElement, SingleActionModalProps>(({
    buttonProps,
    children,
    icon,
    isOpen,
    onClose,
    secondaryButtonProps,
    title,
    ...rest
}: SingleActionModalProps, ref) => {
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
                {secondaryButtonProps && <Button {...secondaryButtonProps} variant="secondary" />}
                <Button {...buttonProps} variant="accent" data-autofocus />
            </div>
        </Modal>
    )
})
