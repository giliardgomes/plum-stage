import React from "react"
import { rem } from "@mantine/core"

interface FAIconProps extends React.ComponentPropsWithRef<"svg"> {
    // Default is "true" to match FontAwesome icons, which are decorative by default.
    // If using SVG as a semantic icon, set to "false" and provide props like
    // title/id/aria-labelledby to SVG component as suggested in:
    // https://docs.fontawesome.com/web/dig-deeper/accessibility
    ariaHidden?: "true" | "false" | undefined
    color?: string
    filled?: boolean
    size?: number | string
    style?: React.CSSProperties
}

export const CircleInfoFarFAIcon = React.forwardRef<SVGSVGElement, FAIconProps>(({ ariaHidden = "true", color, filled = false, size = 16, style, ...others }, ref) => (
    <svg
        // Provided by FontAwesome SVG
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        // Plum properties
        aria-hidden={ariaHidden}
        color={color}
        ref={ref}
        role="img"
        style={{ width: rem(size), height: rem(size), ...style }}
        {...others}
    >
        {/* <!--!Font Awesome Pro 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2024 Fonticons, Inc.--> */}

        <path
            fill="currentColor"
            d={filled
                ? "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
                : "M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336c-13.3 0-24 10.7-24 24s10.7 24 24 24l80 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-8 0 0-88c0-13.3-10.7-24-24-24l-48 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l24 0 0 64-24 0zm40-144a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"}
        />
    </svg>
))

export const TriangleExclamationFarFAIcon = React.forwardRef<SVGSVGElement, FAIconProps>(({ ariaHidden = "true", color, filled = false, size = 16, style, ...others }, ref) => (
    <svg
        // Provided by FontAwesome SVG
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        // Plum properties
        aria-hidden={ariaHidden}
        color={color}
        ref={ref}
        role="img"
        style={{ width: rem(size), height: rem(size), ...style }}
        {...others}
    >
        {/* <!--!Font Awesome Pro 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2024 Fonticons, Inc.--> */}
        <path
            fill="currentColor"
            d={filled
                ? "M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480L40 480c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"
                : "M248.4 84.3c1.6-2.7 4.5-4.3 7.6-4.3s6 1.6 7.6 4.3L461.9 410c1.4 2.3 2.1 4.9 2.1 7.5c0 8-6.5 14.5-14.5 14.5H62.5c-8 0-14.5-6.5-14.5-14.5c0-2.7 .7-5.3 2.1-7.5L248.4 84.3zm-41-25L9.1 385c-6 9.8-9.1 21-9.1 32.5C0 452 28 480 62.5 480h387c34.5 0 62.5-28 62.5-62.5c0-11.5-3.2-22.7-9.1-32.5L304.6 59.3C294.3 42.4 275.9 32 256 32s-38.3 10.4-48.6 27.3zM288 368a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm-8-184c0-13.3-10.7-24-24-24s-24 10.7-24 24v96c0 13.3 10.7 24 24 24s24-10.7 24-24V184z"}
        />
    </svg>
))

export const CircleExclamationFarFAIcon = React.forwardRef<SVGSVGElement, FAIconProps>(({ ariaHidden = "true", color, filled = false, size = 16, style, ...others }, ref) => (
    <svg
        // Provided by FontAwesome SVG
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        // Plum properties
        aria-hidden={ariaHidden}
        color={color}
        ref={ref}
        role="img"
        style={{ width: rem(size), height: rem(size), ...style }}
        {...others}
    >
        {/* <!--!Font Awesome Pro 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2025 Fonticons, Inc.--> */}
        <path
            fill="currentColor"
            d={filled
                ? "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"
                : "M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"}
        />
    </svg>
))

export const CircleXmarkFarFAIcon = React.forwardRef<SVGSVGElement, FAIconProps>(({ ariaHidden = "true", color, filled = false, size = 16, style, ...others }, ref) => (
    <svg
        // Provided by FontAwesome SVG
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        // Plum properties
        aria-hidden={ariaHidden}
        color={color}
        ref={ref}
        role="img"
        style={{ width: rem(size), height: rem(size), ...style }}
        {...others}
    >
        {/* <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--> */}
        <path
            fill="currentColor"
            d={filled
                ? "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"
                : "M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"}
        />
    </svg>
))
