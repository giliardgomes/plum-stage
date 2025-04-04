import { Mark, useMantineTheme } from "@mantine/core"
import { escapeRegExp } from "@/components/Highlight/HighlightHelpers"
export interface HighlightProps {
    /** The substrings to highlight within the text, case-insensitive */
    highlight: string
    /** What color the highlighting should be; defaults to mantine theme primary color */
    highlightColor?: string
    /** The displayed text */
    text: string
    /** What color the text should be when it is highlighted; "unset" to inherit */
    textColor?: string
}
export const Highlight = ({ highlight = "", highlightColor, text = "", textColor }: HighlightProps) => {
    const theme = useMantineTheme()

    if (!highlight.trim()) {
        return text
    }
    const regex = new RegExp(`(${escapeRegExp(highlight)})`, "gi")
    const markIfMatches = (part: string, i: number) => {
        if (regex.test(part)) {
            return (
                <Mark
                    color={highlightColor || theme.colors[theme.primaryColor][7]}
                    key={i}
                    style={{ color: textColor || theme.white }}
                    data-highlighted
                >
                    {part}
                </Mark>
            )
        }
        return part
    }

    return text
        .split(regex)
        .filter((part) => part)
        .map((part, i) => markIfMatches(part, i))
}
