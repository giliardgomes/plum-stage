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

export const CogFarFAIcon = React.forwardRef<SVGSVGElement, FAIconProps>(({ ariaHidden = "true", color, filled = false, size = 16, style, ...others }, ref) => (
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
            d="M256 0c17 0 33.6 1.7 49.8 4.8c7.9 1.5 21.8 6.1 29.4 20.1c2 3.7 3.6 7.6 4.6 11.8l9.3 38.5C350.5 81 360.3 86.7 366 85l38-11.2c4-1.2 8.1-1.8 12.2-1.9c16.1-.5 27 9.4 32.3 15.4c22.1 25.1 39.1 54.6 49.9 86.3c2.6 7.6 5.6 21.8-2.7 35.4c-2.2 3.6-4.9 7-8 10L459 246.3c-4.2 4-4.2 15.5 0 19.5l28.7 27.3c3.1 3 5.8 6.4 8 10c8.2 13.6 5.2 27.8 2.7 35.4c-10.8 31.7-27.8 61.1-49.9 86.3c-5.3 6-16.3 15.9-32.3 15.4c-4.1-.1-8.2-.8-12.2-1.9L366 427c-5.7-1.7-15.5 4-16.9 9.8l-9.3 38.5c-1 4.2-2.6 8.2-4.6 11.8c-7.7 14-21.6 18.5-29.4 20.1C289.6 510.3 273 512 256 512s-33.6-1.7-49.8-4.8c-7.9-1.5-21.8-6.1-29.4-20.1c-2-3.7-3.6-7.6-4.6-11.8l-9.3-38.5c-1.4-5.8-11.2-11.5-16.9-9.8l-38 11.2c-4 1.2-8.1 1.8-12.2 1.9c-16.1 .5-27-9.4-32.3-15.4c-22-25.1-39.1-54.6-49.9-86.3c-2.6-7.6-5.6-21.8 2.7-35.4c2.2-3.6 4.9-7-8-10L53 265.7c4.2-4 4.2-15.5 0-19.5L24.2 218.9c-3.1-3-5.8-6.4-8-10C8 195.3 11 181.1 13.6 173.6c10.8-31.7 27.8-61.1 49.9-86.3c5.3-6 16.3-15.9 32.3-15.4c4.1 .1 8.2 .8 12.2 1.9L146 85c5.7 1.7 15.5-4 16.9-9.8l9.3-38.5c1-4.2 2.6-8.2 4.6-11.8c7.7-14 21.6-18.5 29.4-20.1C222.4 1.7 239 0 256 0zM218.1 51.4l-8.5 35.1c-7.8 32.3-45.3 53.9-77.2 44.6L97.9 120.9c-16.5 19.3-29.5 41.7-38 65.7l26.2 24.9c24 22.8 24 66.2 0 89L59.9 325.4c8.5 24 21.5 46.4 38 65.7l34.6-10.2c31.8-9.4 69.4 12.3 77.2 44.6l8.5 35.1c24.6 4.5 51.3 4.5 75.9 0l8.5-35.1c7.8-32.3 45.3-53.9 77.2-44.6l34.6 10.2c16.5-19.3 29.5-41.7 38-65.7l-26.2-24.9c-24-22.8-24-66.2 0-89l26.2-24.9c-8.5-24-21.5-46.4-38-65.7l-34.6 10.2c-31.8 9.4-69.4-12.3-77.2-44.6l-8.5-35.1c-24.6-4.5-51.3-4.5-75.9 0zM208 256a48 48 0 1 0 96 0 48 48 0 1 0 -96 0zm48 96a96 96 0 1 1 0-192 96 96 0 1 1 0 192z"
        />
    </svg>
))

export const UserFarFAIcon = React.forwardRef<SVGSVGElement, FAIconProps>(({ ariaHidden = "true", color, filled = false, size = 16, style, ...others }, ref) => (
    <svg
        // Provided by FontAwesome SVG
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
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
            d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464l349.5 0c-8.9-63.3-63.3-112-129-112l-91.4 0c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z"
        />
    </svg>
))
