import { useMemo } from "react"
import {
    Checkbox,
    CloseButton,
    Combobox,
    Flex,
    Group,
    Input,
    Pill,
    PillsInput,
    getOptionsLockup,
    getParsedComboboxData,
    useCombobox,
    type ComboboxItem,
} from "@mantine/core"
import { useUncontrolled } from "@mantine/hooks"

import { ComboboxChevron } from "@/icons/ComboboxChevron"

import classes from "@/components/MultiSelect/MultiSelect.module.css"

export interface MultiSelectProps {
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
    value?: string[]

    /** Uncontrolled component default value */
    defaultValue?: string[]

    /** Called when value changes */
    onChange?: (value: string[] | null, options: ComboboxItem[]) => void
}

export const MultiSelect = (
    {
        defaultValue,
        description,
        disabled,
        error,
        data,
        label,
        placeholder,
        onChange,
        value,
        ...rest
    }: MultiSelectProps,
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
        defaultValue: defaultValue || [],
        onChange,
    })

    const handleValueSelect = (selectedValue: string) => {
        const selectedOption = optionsLockup[selectedValue]

        handleChange(
            _value.includes(selectedValue)
                ? _value.filter((v) => v !== selectedValue)
                : [..._value, selectedValue],
            selectedOption,
        )
    }

    const handleValueRemove = (selectedValue: string) => handleChange(_value.filter((v) => v !== selectedValue))

    const pills = _value.map((item) => (
        <Pill key={item} withRemoveButton onRemove={() => handleValueRemove(item)} className={classes.pill}>
            {optionsLockup[item].label}
        </Pill>
    ))

    const options = parsedData.map((item, index) => (
        <Combobox.Option
            key={item.value}
            active={_value.includes(item.value)}
            value={item.value}
            onMouseOver={() => combobox.selectOption(index)}
            className={classes.option}
            disabled={item.disabled}
        >
            <Group gap="sm">
                <Checkbox.Indicator checked={_value.includes(item.value)} aria-hidden tabIndex={-1} style={{ pointerEvents: "none" }} />
                <span>{item.label}</span>
            </Group>
        </Combobox.Option>
    ))

    return (
        <Combobox store={combobox} onOptionSubmit={handleValueSelect} withinPortal={false} disabled={disabled}>
            <Combobox.DropdownTarget>
                <PillsInput
                    disabled={disabled}
                    onClick={() => combobox.toggleDropdown()}
                    pointer
                    data-expanded={combobox.dropdownOpened || undefined}
                    rightSection={<ComboboxChevron size="xs" error={error} />}
                    rightSectionPointerEvents="none"
                    classNames={{ input: classes.pillsInput }}
                    label={label}
                    description={description}
                    descriptionProps={{ c: "gray.8" }}
                    error={error}
                    // Render either the error or the description
                    inputWrapperOrder={["label", "input", error ? "error" : "description"]}
                    // Spread additional props like data-* attributes
                    {...rest}
                >
                    <Pill.Group role="group" aria-label="Selected options">
                        {
                            _value.length > 0
                                ? pills
                                : <Input.Placeholder>{placeholder}</Input.Placeholder>
                        }

                        <Combobox.EventsTarget>
                            <PillsInput.Field
                                type="hidden"
                                onBlur={() => combobox.closeDropdown()}
                                onKeyDown={(event) => {
                                    if (event.key === "Backspace") {
                                        event.preventDefault()
                                        handleValueRemove(_value[_value.length - 1])
                                    }
                                }}
                            />
                        </Combobox.EventsTarget>
                    </Pill.Group>

                    {_value.length > 0 && (
                        <Flex align="center">
                            <CloseButton
                                size="sm"
                                aria-label="Clear selection"
                                onClick={(e) => {
                                    e.stopPropagation()
                                    handleChange([])
                                }}
                            />
                        </Flex>
                    )}
                </PillsInput>
            </Combobox.DropdownTarget>

            <Combobox.Dropdown>
                <Combobox.Options aria-label={label} className={classes.options}>
                    {options}
                </Combobox.Options>
            </Combobox.Dropdown>
        </Combobox>
    )
}
