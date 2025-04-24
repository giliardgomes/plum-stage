import { forwardRef, useState, useEffect } from "react"
import { Button, ColorInput as MantineColorInput, ColorInputProps as MantineColorInputProps } from "@mantine/core"
import { Label } from "@/components/Label"
import { ErrorMessage } from "@/molecules/ErrorMessage"
import classes from "./ColorPicker.module.css"
import { CrosshairsFarFAIcon } from "@/components/Icons"

interface EyeDropperResult {
    sRGBHex: string
}

interface EyeDropper {
    open: () => Promise<EyeDropperResult>
}

declare global {
    interface Window {
        EyeDropper?: {
            new (): EyeDropper
        }
    }
}

export interface ColorPickerProps extends Omit<MantineColorInputProps, "classNames" | "size"> {
    /** Set a static selector for engagement tracking with third party tools (ie: Pendo) */
    "data-plum-id"?: string
    /** Label for the color picker */
    label: string
    /** Description text */
    description?: string
    /** Error message */
    error?: string
    /** Whether the field is required */
    required?: boolean
}

export const ColorPicker = forwardRef<HTMLInputElement, ColorPickerProps>((
    {
        "data-plum-id": dataPlumId,
        label,
        description,
        error,
        required,
        onChange,
        value: externalValue,
        defaultValue,
        ...props
    },
    ref,
) => {
    const [internalValue, setInternalValue] = useState(externalValue || defaultValue || "")

    useEffect(() => {
        if (externalValue !== undefined) {
            setInternalValue(externalValue)
        }
    }, [externalValue])

    const handleColorChange = (newColor: string) => {
        setInternalValue(newColor)
        if (onChange) {
            onChange(newColor)
        }
    }

    const handleEyeDropper = async (e: React.MouseEvent) => {
        e.preventDefault()
        e.stopPropagation()

        if (!window.EyeDropper) {
            console.log("EyeDropper not supported")
            return
        }

        try {
            const dropper = new window.EyeDropper()
            const result = await dropper.open()

            if (result?.sRGBHex) {
                handleColorChange(result.sRGBHex)
            }
        } catch (e) {
            console.log("Eyedropper was cancelled")
        }
    }

    return (
        <MantineColorInput
            ref={ref}
            data-plum-id={dataPlumId}
            classNames={{
                root: classes.root,
                wrapper: classes.wrapper,
                dropdown: classes.dropdown,
                colorPreview: classes.colorPreview,
                swatches: classes.swatches,
                swatch: classes.swatch,
            }}
            label={<Label label={label} withAsterisk={required} />}
            description={description}
            error={error && <ErrorMessage error={error} />}
            inputWrapperOrder={["label", "input", "description", "error"]}
            rightSectionPointerEvents="all"
            rightSection={(
                <Button
                    variant="tertiary"
                    size="sm"
                    onClick={handleEyeDropper}
                >
                    <CrosshairsFarFAIcon size={12} />
                </Button>
            )}
            required={required}
            value={internalValue}
            onChange={handleColorChange}
            {...props}
        />
    )
})

ColorPicker.displayName = "ColorPicker"
