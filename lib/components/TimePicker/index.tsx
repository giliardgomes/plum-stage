import { forwardRef } from "react"
import { TimeInput, type TimeInputProps } from "@mantine/dates"
import { Select } from "@/components/Select"
import { ClockFarFAIcon } from "@/components/Icons"
import { Group } from "@mantine/core"
import { Label } from "@/components/Label"
import classes from "./TimePicker.module.css"

export interface TimePickerProps extends Omit<TimeInputProps, "classNames" | "value" | "onChange" | "label"> {
    /** Set a static selector for engagement tracking with third party tools (ie: Pendo) */
    "data-plum-id"?: string
    /** Description text for the time picker */
    description?: string
    /** Error message */
    error?: string
    /** TimePicker variant */
    variant?: "regular" | "timezone"
    /** Selected time value */
    value?: string
    /** Selected timezone (only for timezone variant) */
    timezone?: string
    /** Called when time changes */
    onChange?: (value: string) => void
    /** Called when timezone changes */
    onTimezoneChange?: (value: string) => void
    /** Label for the time picker */
    label: string
}

export const TimePicker = forwardRef<HTMLInputElement, TimePickerProps>((props, ref) => {
    const {
        "data-plum-id": dataPlumId,
        leftSection = <ClockFarFAIcon size={14} />,
        size = "sm",
        label,
        description,
        error,
        variant = "regular",
        value,
        timezone = "EST",
        onChange,
        onTimezoneChange,
        ...rest
    } = props

    const timezones = [
        { value: "EST", label: "EST" },
        { value: "CST", label: "CST" },
        { value: "MST", label: "MST" },
        { value: "PST", label: "PST" },
        // Add more timezones as needed
    ]

    return (
        <div className={classes.TimePicker} data-time-variant={variant} ref={ref}>
            {
                variant === "timezone"
                    ? (
                        <Group gap={0} align="flex-end">
                            <TimeInput
                                classNames={classes}
                                data-plum-id={dataPlumId}
                                leftSection={leftSection}
                                size={size}
                                label={<Label label={label} />}
                                error={error}
                                value={value}
                                onChange={(event) => onChange?.(event.currentTarget.value)}
                                {...rest}
                            />
                            <div className={classes.timezoneSelect}>
                                <Select
                                    data={timezones}
                                    value={timezone}
                                    onChange={(value) => value && onTimezoneChange?.(value)}
                                    label=" " // Empty label to maintain alignment
                                />
                            </div>
                        </Group>
                    )
                    : (
                        <TimeInput
                            classNames={classes}
                            data-plum-id={dataPlumId}
                            leftSection={leftSection}
                            size={size}
                            label={<Label label={label} />}
                            error={error}
                            value={value}
                            onChange={(event) => onChange?.(event.currentTarget.value)}
                            {...rest}
                        />
                    )
            }
            {description && !error && (
                <div className={classes.description}>{description}</div>
            )}
        </div>
    )
})

TimePicker.displayName = "TimePicker"
