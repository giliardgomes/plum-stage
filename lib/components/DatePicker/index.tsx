import { forwardRef } from "react"
import { DatePickerInput, DatePickerType, DatesRangeValue } from "@mantine/dates"
import type { DatePickerInputProps } from "@mantine/dates"
import {
    CalendarDayFarFAIcon,
    ChevronLeftFAIcon,
    ChevronRightFAIcon,
} from "@/components/Icons"
import { Label } from "@/components/Label"
import classes from "./DatePicker.module.css"

export type DatePickerVariant = "single" | "range"

export interface PlumDatePickerProps extends Omit<
    DatePickerInputProps,
    "classNames" | "component" | "type" | "value" | "onChange"
> {
    /** Set a static selector for engagement tracking with third party tools (ie: Pendo) */
    "data-plum-id"?: string
    /** Description text for the date picker */
    description?: string
    /** Error message */
    error?: string
    /** DatePicker variant */
    variant?: DatePickerVariant
    /** Selected value */
    value?: Date | DatesRangeValue
    /** Called when value changes */
    onChange?: (value: Date | DatesRangeValue) => void
    /** Label for the date picker */
    label: string
}

export const DatePicker = forwardRef<HTMLDivElement, PlumDatePickerProps>((props, ref) => {
    const {
        "data-plum-id": dataPlumId,
        leftSection = <CalendarDayFarFAIcon size={14} />,
        nextIcon = <ChevronRightFAIcon size={10} />,
        previousIcon = <ChevronLeftFAIcon size={10} />,
        valueFormat = "MMM DD, YYYY",
        size = "sm",
        clearable = true,
        label,
        description,
        error,
        variant = "single",
        value,
        onChange,
        ...rest
    } = props

    const type: DatePickerType = variant === "range" ? "range" : "default"

    const numberOfColumns = variant === "range" ? 2 : 1

    return (
        <div className={classes.DatePicker} data-dates-variant={variant} ref={ref}>
            <DatePickerInput<typeof type>
                classNames={classes}
                data-plum-id={dataPlumId}
                popoverProps={{
                    ["data-dates-dropdown" as any]: true,
                    ["data-dates-range" as any]: variant === "range",
                    classNames: {
                        dropdown: variant === "range" ? classes.rangeDropdown : undefined,
                    },
                }}
                leftSection={leftSection}
                nextIcon={nextIcon}
                previousIcon={previousIcon}
                valueFormat={valueFormat}
                size={size}
                clearable={clearable}
                label={<Label label={label} />}
                type={type}
                allowDeselect={true}
                error={error}
                placeholder={
                    variant === "range"
                        ? "Select dates"
                        : "Select a date"
                }
                weekdayFormat={(date) =>
                    new Date(date)
                        .toLocaleDateString("en-US", { weekday: "long" })
                        .charAt(0)}
                weekendDays={[0]}
                numberOfColumns={numberOfColumns}
                value={value as any}
                onChange={onChange as any}
                {...rest}
            />
            {description && !error && (
                <div className={classes.description}>{description}</div>
            )}
        </div>
    )
})

DatePicker.displayName = "DatePicker"
