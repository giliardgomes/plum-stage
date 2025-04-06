import { forwardRef, useMemo } from "react"
import {
    Combobox,
    Input,
    InputBase,
    getOptionsLockup,
    getParsedComboboxData,
    useCombobox,
    type ComboboxItem,
} from "@mantine/core"
import { useUncontrolled } from "@mantine/hooks"

import { ErrorMessage } from "@/components/ErrorMessage"
import { ComboboxChevron } from "@/icons/ComboboxChevron"
import { Label } from "@/components/Label"

import classes from "@/components/Select/Select.module.css"

export interface SelectProps {
    /** Determines whether it should be possible to deselect value by clicking on the selected option, `true` by default */
    allowDeselect?: boolean

    /** Set a static selector for engagement tracking with third party tools (ie: Pendo) */
    "data-plum-id"?: string

    /** Description for input */
    description?: string

    /** Disables input */
    disabled?: boolean

    /** Error message */
    error?: string

    /** Label for input */
    label: string

    /** Placeholder for empty value */
    placeholder?: string

    /** Data used to generate options */
    data?: (string | ComboboxItem)[]

    /** Controlled component value */
    value?: string

    /** Uncontrolled component default value */
    defaultValue?: string

    /** Called when value changes */
    onChange?: (value: string | null, option: ComboboxItem) => void

    /** Marks the field as required */
    required?: boolean
}

export const Select = forwardRef<HTMLButtonElement, SelectProps>(
    (
        {
            allowDeselect = true,
            defaultValue,
            description,
            disabled,
            error,
            data,
            label,
            placeholder,
            onChange,
            value,
            required,
            ...rest
        }: SelectProps,
        ref: React.ForwardedRef<HTMLButtonElement>,
    ) => {
        // Normalize string[] and ComboboxItem[] data
        const parsedData = useMemo(() => getParsedComboboxData(data), [data]) as ComboboxItem[]
        // Create a lookup map of option.value to the option itself
        const optionsLockup = useMemo(() => getOptionsLockup(parsedData), [parsedData])

        const combobox = useCombobox({
            onDropdownClose: () => combobox.resetSelectedOption(),
            onDropdownOpen: (eventSource) => {
                if (eventSource === "keyboard") {
                    combobox.selectActiveOption()
                } else {
                    combobox.updateSelectedOptionIndex("active")
                }
            },
        })

        const [_value, handleChange] = useUncontrolled({
            value,
            defaultValue,
            onChange,
        })
        const selectedItem = typeof _value === "string" ? optionsLockup[_value] : undefined

        const handleValueSelect = (selectedValue: string) => {
            const selectedOption = optionsLockup[selectedValue]

            // If allowed, deselect the currently selected option
            if (allowDeselect && selectedValue === _value) {
                handleChange("", selectedOption)
                combobox.updateSelectedOptionIndex("active")
                combobox.closeDropdown()
                return
            }

            handleChange(selectedValue, selectedOption)
            combobox.updateSelectedOptionIndex("active")
            combobox.closeDropdown()
        }

        const options = parsedData.map((item, index) => (
            <Combobox.Option
                key={item.value}
                active={item.value === _value}
                value={item.value}
                onMouseOver={() => combobox.selectOption(index)}
                className={classes.option}
                disabled={item.disabled}
            >
                {item.label}
            </Combobox.Option>
        ))

        return (
            <Combobox store={combobox} onOptionSubmit={handleValueSelect} withinPortal={false} disabled={disabled}>
                <Combobox.Target>
                    <InputBase
                        disabled={disabled}
                        component="button"
                        type="button"
                        onClick={() => combobox.toggleDropdown()}
                        pointer
                        rightSection={<ComboboxChevron size="xs" error={error} />}
                        rightSectionPointerEvents="none"
                        label={<Label label={label} withAsterisk={required} />}
                        description={description}
                        descriptionProps={{ c: "gray.8" }}
                        error={error && <ErrorMessage error={error} />}
                        // Render either the error or the description
                        inputWrapperOrder={["label", "input", error ? "error" : "description"]}
                        classNames={{
                            wrapper: classes.inputWrapper,
                            input: classes.inputBaseInput,
                            root: classes.root,
                        }}
                        ref={ref}
                        // Spread additional props like data-* attributes
                        {...rest}
                    >
                        {selectedItem?.label || <Input.Placeholder>{placeholder}</Input.Placeholder>}
                    </InputBase>
                </Combobox.Target>

                <Combobox.Dropdown>
                    <Combobox.Options aria-label={label} className={classes.options}>
                        {options}
                    </Combobox.Options>
                </Combobox.Dropdown>
            </Combobox>
        )
    },
)
