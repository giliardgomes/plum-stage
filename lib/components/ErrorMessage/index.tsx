import { FC } from "react"
import classes from "./ErrorMessage.module.css"
import { CircleInfoFarFAIcon } from "@/components/Icons"

export interface ErrorMessageProps {
    error: string
}

export const ErrorMessage: FC<ErrorMessageProps> = ({ error }: ErrorMessageProps) => {
    return (
        <div className={classes.error}>
            <CircleInfoFarFAIcon size={12} />
            <p>{error}</p>
        </div>
    )
}
