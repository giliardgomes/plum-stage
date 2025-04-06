import { FC, ReactNode } from "react"
import { Group, Text } from "@mantine/core"
import classes from "@/components/Label/Label.module.css"

export interface LabelProps extends React.PropsWithChildren {
    // Class name to apply to the label.
    className?: string

    // The label to display; can also pass in Children instead
    label?: string

    // Optionally, something to render to the right of the label, e.g. a tool tip or other icon.
    rightSection?: ReactNode

    // If not able to use built-in Mantine `required` attribute, show "Is Required" asterisk after the label
    // NOTE: For almost all Mantine components, adding the `required` HTML attribute will automatically add an asterisk
    //     next to the label, AND marks the field required, which is better for accessibility; try that approach first
    withAsterisk?: boolean
}

export const Label: FC<LabelProps> = ({ children, className = "", label, rightSection, withAsterisk }: LabelProps & { className?: string }) => {
    return (
        <Group className={classes.group}>
            <Text className={`${classes.label} ${className}`}>{children || label}</Text>
            {rightSection && (
                <div className={classes.rightSection}>
                    {rightSection}
                </div>
            )}
            {withAsterisk && (
                <Text aria-hidden={true} className={classes.asterisk}>
                    {" "}
                    *
                    {" "}
                </Text>
            )}
        </Group>
    )
}
