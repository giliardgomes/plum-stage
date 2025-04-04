import { Modal as MantineModal } from "@mantine/core"
import type { ModalBaseStylesNames } from "@mantine/core"
import classes from "@/components/Modal/Modal.module.css"
import { forwardRef } from "react"

export interface ModalProps extends React.PropsWithChildren {
    /** Center the modal vertically in the view */
    centered?: boolean

    /** Displayed content of the Modal */
    children: React.ReactNode

    className?: string
    classNames?: Partial<Record<ModalBaseStylesNames, string>>

    /** Handler when user closes modal without clicking EITHER button */
    onClose: () => void

    opened: boolean

    /** Modal MAX Width - Defaults to 360px (can shrink to fit window) */
    size?: string
}

export const Modal = forwardRef<HTMLDivElement, ModalProps>(({
    centered = true,
    children,
    className,
    classNames,
    size = "360px",
    ...rest
}: ModalProps, ref) => {
    const { body, content, ...otherClassNames } = classNames || {}
    return (
        <MantineModal
            centered={centered}
            className={className || undefined}
            classNames={{
                body: `${classes.body} ${classNames?.body || ""}`,
                content: `${classes.content} ${classNames?.content || ""}`,
                ...otherClassNames,
            }}
            overlayProps={{
                blur: 2,
                backgroundOpacity: 0.40,
            }}
            ref={ref}
            size={size}
            withCloseButton={false}
            {...rest}
        >
            {children}
        </MantineModal>
    )
})
