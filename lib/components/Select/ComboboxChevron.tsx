// Borrowed from Mantine's ComboboxChevron component, but swaps in the angle-down icon from FA
// https://github.com/mantinedev/mantine/blob/master/packages/%40mantine/core/src/components/Combobox/ComboboxChevron/ComboboxChevron.tsx
import {
    Box,
    BoxProps,
    createVarsResolver,
    ElementProps,
    Factory,
    factory,
    getSize,
    MantineSize,
    StylesApiProps,
    useProps,
    useStyles,
} from "@mantine/core"
import classes from "./Select.module.css"

export type ComboboxChevronStylesNames = "chevron"
export type ComboboxChevronCSSVariables = {
    chevron: "--combobox-chevron-size"
}

export interface ComboboxChevronProps
    extends BoxProps,
    StylesApiProps<ComboboxChevronFactory>,
    ElementProps<"svg", "opacity" | "display"> {
    size?: MantineSize | (string & {})
    error?: React.ReactNode
}

export type ComboboxChevronFactory = Factory<{
    props: ComboboxChevronProps
    ref: SVGSVGElement
    stylesNames: ComboboxChevronStylesNames
    vars: ComboboxChevronCSSVariables
}>

const defaultProps: Partial<ComboboxChevronProps> = {
    error: null,
}

const varsResolver = createVarsResolver<ComboboxChevronFactory>((_, { size }) => ({
    chevron: {
        "--combobox-chevron-size": getSize(size, "combobox-chevron-size"),
    },
}))

export const ComboboxChevron = factory<ComboboxChevronFactory>((_props, ref) => {
    const props = useProps("ComboboxChevron", defaultProps, _props)
    const { size, error, style, className, classNames, styles, unstyled, vars, mod, ...others } = props

    const getStyles = useStyles<ComboboxChevronFactory>({
        name: "ComboboxChevron",
        classes,
        props,
        style,
        className,
        classNames,
        styles,
        unstyled,
        vars,
        varsResolver,
        rootSelector: "chevron",
    })

    return (
        <Box
            component="svg"
            {...others}
            {...getStyles("chevron")}
            size={size}
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            mod={["combobox-chevron", { error }, mod]}
            ref={ref}
        >
            {/* Font Awesome Pro 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2024 Fonticons, Inc. */}
            <path
                d="M5.75078 8.8567L1.14019 4.27726C0.953271 4.09034 0.953271 3.91381 1.14019 3.74766L1.73209 3.12461C1.919 2.95846 2.09553 2.95846 2.26168 3.12461L6 6.83178L9.73832 3.12461C9.90447 2.95846 10.081 2.95846 10.2679 3.12461L10.8598 3.74766C11.0467 3.91381 11.0467 4.09034 10.8598 4.27726L6.24922 8.8567C6.08307 9.02284 5.91693 9.02284 5.75078 8.8567Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
            />
        </Box>
    )
})
