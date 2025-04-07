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

export const XMarkFarFAIcon = React.forwardRef<SVGSVGElement, FAIconProps>(({ ariaHidden = "true", color, filled = false, size = 16, style, ...others }, ref) => (
    <svg
        // Provided by FontAwesome SVG
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 384 512"
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
            d="M345 137c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-119 119L73 103c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l119 119L39 375c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l119-119L311 409c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-119-119L345 137z"
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

export const CheckFarFAIcon = React.forwardRef<SVGSVGElement, FAIconProps>(({ ariaHidden = "true", color, filled = false, size = 16, style, ...others }, ref) => (
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
        {/* <!--!Font Awesome Pro 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2025 Fonticons, Inc.--> */}
        <path
            fill="currentColor"
            d={filled
                ? "M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                : "M441 103c9.4 9.4 9.4 24.6 0 33.9L177 401c-9.4 9.4-24.6 9.4-33.9 0L7 265c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l119 119L407 103c9.4-9.4 24.6-9.4 33.9 0z"}
        />
    </svg>
))

export const SearchFarFAIcon = React.forwardRef<SVGSVGElement, FAIconProps>(({ ariaHidden = "true", color, filled = false, size = 16, style, ...others }, ref) => (
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
                ? "M368 208A160 160 0 1 0 48 208a160 160 0 1 0 320 0zM337.1 371.1C301.7 399.2 256.8 416 208 416C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208c0 48.8-16.8 93.7-44.9 129.1L505 471c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L337.1 371.1z"
                : "M368 208A160 160 0 1 0 48 208a160 160 0 1 0 320 0zM337.1 371.1C301.7 399.2 256.8 416 208 416C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208c0 48.8-16.8 93.7-44.9 129.1L505 471c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L337.1 371.1z"}
        />
    </svg>
))

export const StarFarFAIcon = React.forwardRef<SVGSVGElement, FAIconProps>(({ ariaHidden = "true", color, filled = false, size = 16, style, ...others }, ref) => (
    <svg
        // Provided by FontAwesome SVG
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 576 512"
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
                ? "M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                : "M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.7 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z"}
        />
    </svg>
))

export const BellFarFAIcon = React.forwardRef<SVGSVGElement, FAIconProps>(({ ariaHidden = "true", color, filled = false, size = 16, style, ...others }, ref) => (
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
            d="M224 0c-17.7 0-32 14.3-32 32l0 19.2C119 66 64 130.6 64 208l0 25.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416l400 0c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4l0-25.4c0-77.4-55-142-128-156.8L256 32c0-17.7-14.3-32-32-32zm0 96c61.9 0 112 50.1 112 112l0 25.4c0 47.9 13.9 94.6 39.7 134.6L72.3 368C98.1 328 112 281.3 112 233.4l0-25.4c0-61.9 50.1-112 112-112zm64 352l-64 0-64 0c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z"
        />
    </svg>
))

export const QLogo = React.forwardRef<SVGSVGElement, FAIconProps>(() => (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask0_14311_32184" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="8" y="9" width="28" height="19">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.52236 9.95036H36V27.117H8.52236V9.95036Z" fill="white" />
        </mask>
        <g mask="url(#mask0_14311_32184)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M35.6003 25.4109C31.5776 22.5915 26.5528 21.7033 21.8139 22.9747L18.1565 23.9557C18.1564 23.9557 18.1564 23.9558 18.1563 23.9558C17.1525 24.2246 16.1392 24.227 15.1906 24.0085C13.0381 23.5127 11.2198 21.8743 10.6096 19.5941C10.1835 18.0026 10.4023 16.3404 11.2254 14.9135C12.0483 13.4868 13.3773 12.4661 14.967 12.0395C15.498 11.8972 16.0367 11.827 16.5719 11.827C17.6395 11.827 18.6934 12.1072 19.6429 12.656C21.0682 13.4797 22.088 14.8099 22.5141 16.4014C22.876 17.7533 22.7708 19.1561 22.2266 20.4227C22.9213 20.2772 23.6198 20.1718 24.3188 20.1051C24.6895 18.7477 24.6976 17.311 24.3239 15.9157C23.7685 13.8404 22.4387 12.1057 20.5799 11.0314C18.721 9.95714 16.5549 9.67186 14.4821 10.2279C12.4086 10.7838 10.6757 12.1149 9.60236 13.9757C8.52932 15.8363 8.24403 18.0041 8.79965 20.0794C9.64113 23.2231 12.2422 25.4338 15.2587 25.9345C15.6867 26.0057 16.123 26.0426 16.5639 26.0426C17.25 26.0426 17.9475 25.9536 18.641 25.7676C18.6413 25.7674 18.6415 25.7674 18.6417 25.7674L22.2991 24.7864C26.5011 23.6598 30.9579 24.447 34.5258 26.9475C34.6893 27.0623 34.8767 27.117 35.0621 27.117C35.3575 27.117 35.6482 26.9777 35.8305 26.7171C36.1273 26.2928 36.0242 25.7079 35.6003 25.4109" fill="#7259EF" />
        </g>
        <mask id="mask1_14311_32184" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="1" width="34" height="34">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 1.42424H33.1249V34.5758H0V1.42424Z" fill="white" />
        </mask>
        <g mask="url(#mask1_14311_32184)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M24.0186 31.2113L20.3613 32.1923C16.5742 33.2079 12.6174 32.6868 9.22128 30.7242C5.8253 28.7615 3.3961 25.5924 2.38113 21.8011C1.3663 18.0094 1.88707 14.0494 3.84777 10.6499C5.80846 7.25045 8.97432 4.81892 12.7623 3.80293C20.5814 1.70635 28.6476 6.3673 30.7425 14.194C31.3178 16.3436 31.4007 18.5368 31.0038 20.667C31.6113 20.8303 32.2116 21.0237 32.8022 21.2478C33.3022 18.7706 33.2229 16.2129 32.5525 13.7085C30.1901 4.88281 21.0952 -0.374998 12.2772 1.9912C8.0061 3.13683 4.4359 5.87862 2.22506 9.71203C0.0140629 13.5451 -0.573202 18.0111 0.57113 22.2863C1.71561 26.562 4.45492 30.1355 8.28441 32.3485C10.8354 33.823 13.6662 34.5759 16.5349 34.5758C17.9726 34.5758 19.4204 34.3865 20.8465 34.0041L24.5038 33.023C26.4879 32.4911 28.5997 32.9809 30.1513 34.3339C30.5415 34.6739 31.1332 34.6336 31.4733 34.2429C31.8132 33.8522 31.7724 33.2598 31.3823 32.9197C29.359 31.1557 26.6061 30.5168 24.0186 31.2113" fill="#7259EF" />
        </g>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M34.5299 29.8732L33.4595 29.1229C33.4583 29.122 33.4567 29.1214 33.4556 29.1205C33.3009 29.0051 33.1428 28.8962 32.9841 28.7887C32.9076 28.737 32.8308 28.6862 32.7534 28.6362C32.6453 28.5664 32.536 28.4986 32.4259 28.4324C32.3281 28.3736 32.2301 28.3157 32.131 28.2599C32.0422 28.2097 31.9526 28.161 31.8628 28.1131C31.7401 28.0478 31.6167 27.9836 31.4921 27.9226C31.4263 27.8904 31.36 27.8593 31.2936 27.8283C31.1442 27.7584 30.9941 27.6903 30.8423 27.6268C30.801 27.6093 30.7594 27.5928 30.718 27.5759C30.5417 27.5044 30.3646 27.4356 30.1859 27.3724C30.1689 27.3664 30.1518 27.3608 30.1349 27.3548C28.4685 26.7719 26.6951 26.5544 24.9204 26.7291C24.8813 26.733 24.8423 26.7393 24.8032 26.7433C24.6215 26.7628 24.4401 26.7841 24.2589 26.8117C24.1342 26.8307 24.0099 26.8557 23.8855 26.8786C23.7883 26.8965 23.6907 26.9114 23.5936 26.9316C23.3674 26.979 23.1415 27.0327 22.9161 27.0931L19.2588 28.0739C13.7099 29.5626 7.98261 26.2535 6.49536 20.6973C5.0081 15.1415 8.31377 9.41021 13.8646 7.92121C19.4153 6.43294 25.1411 9.74152 26.6283 15.2974C27.047 16.8626 27.0932 18.4782 26.7837 20.0322C27.4122 20.0547 28.0382 20.1095 28.6597 20.1944C28.9813 18.4236 28.9141 16.5902 28.4382 14.8122C26.6838 8.25702 19.9273 4.35305 13.3795 6.10947C6.83073 7.8659 2.93068 14.6279 4.68551 21.1831C6.44004 27.7381 13.1957 31.6415 19.7442 29.8857L23.4015 28.9047C26.5139 28.0704 29.7792 28.703 32.3596 30.6413C32.3642 30.6447 32.3691 30.6469 32.3737 30.65C32.3776 30.653 32.3805 30.6566 32.3845 30.6595L33.455 31.4098C33.6184 31.5243 33.806 31.5794 33.9916 31.5794C34.2869 31.5794 34.5777 31.44 34.7599 31.1795C35.0568 30.7552 34.9536 30.1704 34.5299 29.8732" fill="#7259EF" />
    </svg>
))

export const CircleQuestionFarFAIcon = React.forwardRef<SVGSVGElement, FAIconProps>(({ ariaHidden = "true", color, filled = false, size = 16, style, ...others }, ref) => (
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
                ? "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM169.8 165.3l.4-1.2c1.1-3.2 4.1-5.3 7.5-5.3l58.3 0c8.3 0 15.1 6.7 15.1 15.1c0 5.4-2.9 10.4-7.6 13.1l-44.3 25.4c-7.5 4.3-12.1 12.2-12.1 20.8l0 13.5c0 13.3 10.7 24 24 24c13.1 0 23.8-10.6 24-23.6l32.3-18.5c19.6-11.3 31.7-32.2 31.7-54.8c0-34.8-28.2-63.1-63.1-63.1l-58.3 0c-23.7 0-44.9 15-52.8 37.3l-.4 1.2c-4.4 12.4 2.1 26.2 14.6 30.6s26.2-2.1 30.6-14.6zM256 320a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
                : "M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm169.8-90.7c7.9-22.3 29.1-37.3 52.8-37.3l58.3 0c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24l0-13.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1l-58.3 0c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"}
        />
    </svg>
))

export const GlobeFarFAIcon = React.forwardRef<SVGSVGElement, FAIconProps>(({ ariaHidden = "true", color, filled = false, size = 16, style, ...others }, ref) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        aria-hidden={ariaHidden}
        color={color}
        ref={ref}
        role="img"
        style={{ width: rem(size), height: rem(size), ...style }}
        {...others}
    >
        <path
            fill="currentColor"
            d="M256 64a192 192 0 1 1 0 384 192 192 0 1 1 0-384zm0 448A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM160 256c0-38.7 27.5-71 64-78.4c-.1-1.2-.1-2.4-.1-3.6c0-21.6 12.5-40.3 30.7-49.3c-4.8-9.5-14.7-16-26-16h-17.1c-11.4 0-21.8 6.5-26.8 16.7l-16 32c-4.9 9.9-18.3 9.9-23.2 0l-16-32C124.5 115.5 114.1 109 102.7 109H80c-17.7 0-32 14.3-32 32v37.5c0 17.1 6.8 33.5 18.8 45.6l36.2 36.2c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-36.2-36.2c-4-4-6.2-9.4-6.2-15.1V141c0-.6 .4-1 1-1h22.7c.3 0 .5 .1 .6 .3l16 32c14.8 29.6 54.8 29.6 69.6 0l16-32c.1-.2 .4-.3 .6-.3H224c2.8 0 5.4 .7 7.8 1.8c7.4-5.3 16.4-8.4 26.2-8.4h2c-13.9 0-25.3 11-25.9 24.8c-17.4 10.3-29.1 29.1-29.1 50.7zm96 112h-8c-13.3 0-24-10.7-24-24V318c0-13.3 10.7-24 24-24h48c13.3 0 24 10.7 24 24v26c0 13.3-10.7 24-24 24h-8v32c0 8.8-7.2 16-16 16s-16-7.2-16-16V368zm24-82c-4.4 0-8 3.6-8 8v26c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V294c0-4.4-3.6-8-8-8H280z"
        />
    </svg>
))

export const ArrowLeftFAIcon = React.forwardRef<SVGSVGElement, FAIconProps>(({ ariaHidden = "true", color, filled = false, size = 16, style, ...others }, ref) => (
    <svg
        // Provided by FontAwesome SVG
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        // Plum properties
        aria-hidden={ariaHidden}
        color={color}
        ref={ref}
        role="img"
        style={{ width: rem(size), height: rem(size), ...style }}
        {...others}
    >
        <path
            fill="currentColor"
            d="M8.20994 15.7721L8.92462 15.0932C9.10329 14.9145 9.10329 14.6286 8.92462 14.4857L3.38582 8.94689L15.5712 8.94689C15.8213 8.94689 16 8.73248 16 8.51808L16 7.51752C16 7.26738 15.8213 7.08871 15.5712 7.08871L3.38582 7.08871L8.92462 1.51417C9.1033 1.37123 9.1033 1.08536 8.92462 0.906685L8.20994 0.227735C8.067 0.0490638 7.78113 0.0490638 7.60246 0.227735L0.134003 7.69619C-0.0446682 7.87486 -0.0446683 8.125 0.134003 8.30367L7.60246 15.7721C7.78113 15.9508 8.067 15.9508 8.20994 15.7721Z"
        />
    </svg>
))

export const PlusFarFAIcon = React.forwardRef<SVGSVGElement, FAIconProps>(({ ariaHidden = "true", color, filled = false, size = 16, style, ...others }, ref) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
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
            d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
        />
    </svg>
))

export const HomeFarFAIcon = React.forwardRef<SVGSVGElement, FAIconProps>(({ ariaHidden = "true", color, filled = false, size = 16, style, ...others }, ref) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 576 512"
        aria-hidden={ariaHidden}
        color={color}
        ref={ref}
        role="img"
        style={{ width: rem(size), height: rem(size), ...style }}
        {...others}
    >
        <path
            fill="currentColor"
            d="M303.5 5.7c-9-7.6-22.1-7.6-31.1 0l-264 224c-10.1 8.6-11.3 23.7-2.8 33.8s23.7 11.3 33.8 2.8L64 245.5V432c0 44.2 35.8 80 80 80H432c44.2 0 80-35.8 80-80V245.5l24.5 20.8c10.1 8.6 25.2 7.3 33.8-2.8s7.3-25.2-2.8-33.8l-264-224zM464 204.8V432c0 17.7-14.3 32-32 32H144c-17.7 0-32-14.3-32-32V204.8L288 55.5 464 204.8z"
        />
    </svg>
))

export const UserCircleFarFAIcon = React.forwardRef<SVGSVGElement, FAIconProps>(({ ariaHidden = "true", color, filled = false, size = 16, style, ...others }, ref) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        aria-hidden={ariaHidden}
        color={color}
        ref={ref}
        role="img"
        style={{ width: rem(size), height: rem(size), ...style }}
        {...others}
    >
        <path
            fill="currentColor"
            d="M406.5 399.6C387.4 352.9 341.5 320 288 320H224c-53.5 0-99.4 32.9-118.5 79.6C69.9 362.2 48 311.7 48 256C48 141.1 141.1 48 256 48s208 93.1 208 208c0 55.7-21.9 106.2-57.5 143.6zm-40.1 32.7C334.4 452.4 296.6 464 256 464s-78.4-11.6-110.5-31.7c7.3-36.7 39.7-64.3 78.5-64.3h64c38.8 0 71.2 27.6 78.5 64.3zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-272a40 40 0 1 1 0-80 40 40 0 1 1 0 80zm-88-40a88 88 0 1 0 176 0 88 88 0 1 0 -176 0z"
        />
    </svg>
))

export const EnvelopeOpenFarFAIcon = React.forwardRef<SVGSVGElement, FAIconProps>(({ ariaHidden = "true", color, filled = false, size = 16, style, ...others }, ref) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
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
            d="M255.4 48.2c.2-.1 .4-.2 .6-.2s.4 .1 .6 .2L460.6 194c2.1 1.5 3.4 3.9 3.4 6.5v13.6L291.5 355.7c-20.7 17-50.4 17-71.1 0L48 214.1V200.5c0-2.6 1.2-5 3.4-6.5L255.4 48.2zM48 276.2L190 392.8c38.4 31.5 93.7 31.5 132 0L464 276.2V456c0 4.4-3.6 8-8 8H56c-4.4 0-8-3.6-8-8V276.2zM256 0c-10.2 0-20.2 3.2-28.5 9.1L23.5 154.9C8.7 165.4 0 182.4 0 200.5V456c0 30.9 25.1 56 56 56H456c30.9 0 56-25.1 56-56V200.5c0-18.1-8.7-35.1-23.5-45.6L284.5 9.1C276.2 3.2 266.2 0 256 0z"
        />
    </svg>
))

export const LocationFarFAIcon = React.forwardRef<SVGSVGElement, FAIconProps>(({ ariaHidden = "true", color, filled = false, size = 16, style, ...others }, ref) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 384 512"
        aria-hidden={ariaHidden}
        color={color}
        ref={ref}
        role="img"
        style={{ width: rem(size), height: rem(size), ...style }}
        {...others}
    >
        <path
            fill="currentColor"
            d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192zM192 48c-79.5 0-144 64.5-144 144c0 66.5 90.8 195.2 142.3 250.9c3.5 3.8 9.9 3.8 13.4 0C255.2 387.2 346 258.5 346 192c0-79.5-64.5-144-144-144zm0 240a96 96 0 1 0 0-192 96 96 0 1 0 0 192zm0-144a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
        />
    </svg>
))

export const FolderFarFAIcon = React.forwardRef<SVGSVGElement, FAIconProps>(({ ariaHidden = "true", color, filled = false, size = 16, style, ...others }, ref) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
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
            d="M0 96C0 60.7 28.7 32 64 32H196.1c19.1 0 37.4 7.6 50.9 21.1L289.9 96H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16H286.6c-10.6 0-20.8-4.2-28.3-11.7L213.1 87c-4.5-4.5-10.6-7-17-7H64z"
        />
    </svg>
))

export const CommentFarFAIcon = React.forwardRef<SVGSVGElement, FAIconProps>(({ ariaHidden = "true", color, filled = false, size = 16, style, ...others }, ref) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
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
            d="M123.6 391.3c12.9-9.4 29.6-11.8 44.6-6.4c26.5 9.6 56.2 15.1 87.8 15.1c124.7 0 208-80.5 208-160s-83.3-160-208-160S48 160.5 48 240c0 32 12.4 62.8 35.7 89.2c8.6 9.7 12.8 22.5 11.8 35.5c-1.4 18.1-5.7 34.7-11.3 49.4c17-7.9 31.1-16.7 39.4-22.7zM21.2 431.9c1.8-2.7 3.5-5.4 5.1-8.1c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208s-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6c-15.1 6.6-32.3 12.6-50.1 16.1c-.8 .2-1.6 .3-2.4 .5c-4.4 .8-8.7 1.5-13.2 1.9c-.2 0-.5 .1-.7 .1c-5.1 .5-10.2 .8-15.3 .8c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c4.1-4.2 7.8-8.7 11.3-13.5c1.7-2.3 3.3-4.6 4.8-6.9c.1-.2 .2-.3 .3-.5z"
        />
    </svg>
))

export const FileTextFarFAIcon = React.forwardRef<SVGSVGElement, FAIconProps>(({ ariaHidden = "true", color, filled = false, size = 16, style, ...others }, ref) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 384 512"
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
            d="M320 464c8.8 0 16-7.2 16-16V160H256c-17.7 0-32-14.3-32-32V48H64c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16H320zM0 64C0 28.7 28.7 0 64 0H229.5c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64z"
        />
    </svg>
))

export const EnvelopeFarFAIcon = React.forwardRef<SVGSVGElement, FAIconProps>(({ ariaHidden = "true", color, filled = false, size = 16, style, ...others }, ref) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        aria-hidden={ariaHidden}
        color={color}
        ref={ref}
        role="img"
        style={{ width: rem(size), height: rem(size), ...style }}
        {...others}
    >
        {/* <!--!Font Awesome Pro 6.7.2 by @fontawesome - https://fontawesome.com/license (Commercial License) Copyright 2025 Fonticons, Inc.--> */}
        <path
            fill="currentColor"
            d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"
        />
    </svg>
))

export const ReceiptFarFAIcon = React.forwardRef<SVGSVGElement, FAIconProps>(({ ariaHidden = "true", color, filled = false, size = 16, style, ...others }, ref) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 384 512"
        aria-hidden={ariaHidden}
        color={color}
        ref={ref}
        role="img"
        style={{ width: rem(size), height: rem(size), ...style }}
        {...others}
    >
        {/* <!--!Font Awesome Pro 6.7.2 by @fontawesome - https://fontawesome.com/license (Commercial License) Copyright 2025 Fonticons, Inc.--> */}
        <path
            fill="currentColor"
            d="M24 0C10.7 0 0 10.7 0 24V488c0 13.3 10.7 24 24 24H360c13.3 0 24-10.7 24-24V24c0-13.3-10.7-24-24-24H24zM48 48H336V464H48V48zm64 64v48H272V112H112zm0 96v48H272V208H112zm0 96v48H272V304H112z"
        />
    </svg>
))

export const CheckCircleFarFAIcon = React.forwardRef<SVGSVGElement, FAIconProps>(({ ariaHidden = "true", color, filled = false, size = 16, style, ...others }, ref) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
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
                ? "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                : "M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"}
        />
    </svg>
))

export const FileAltFarFAIcon = React.forwardRef<SVGSVGElement, FAIconProps>(({ ariaHidden = "true", color, filled = false, size = 16, style, ...others }, ref) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 384 512"
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
            d="M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"
        />
    </svg>
))

export const ArrowFromBottomFarFAIcon = React.forwardRef<SVGSVGElement, FAIconProps>(({ ariaHidden = "true", color, filled = false, size = 16, style, ...others }, ref) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        aria-hidden={ariaHidden}
        color={color}
        ref={ref}
        role="img"
        style={{ width: rem(size), height: rem(size), ...style }}
        {...others}
    >
        <path
            fill="currentColor"
            d="M2.6011 5.42559L7.88652 0.125886C8.05437 -0.0419619 8.32578 -0.0419619 8.49363 0.125886L13.779 5.42559C13.9469 5.59344 13.9469 5.86485 13.779 6.0327L13.0791 6.73266C12.9077 6.90408 12.6327 6.90051 12.4684 6.72552L9.11859 3.25785V12.1431C9.11859 12.3788 8.92575 12.5716 8.69004 12.5716H7.6901C7.4544 12.5716 7.26155 12.3788 7.26155 12.1431V3.25785L3.91531 6.72552C3.74746 6.89694 3.47248 6.90051 3.30463 6.73266L2.60467 6.0327C2.43325 5.86485 2.43325 5.59344 2.6011 5.42559ZM14.6183 14.143H1.76186C1.52616 14.143 1.33331 14.3358 1.33331 14.5715V15.5715C1.33331 15.8072 1.52616 16 1.76186 16H14.6183C14.854 16 15.0468 15.8072 15.0468 15.5715V14.5715C15.0468 14.3358 14.854 14.143 14.6183 14.143Z"
        />
    </svg>
))

export const ChevronLeftFAIcon = React.forwardRef<SVGSVGElement, FAIconProps>(({ ariaHidden = "true", color, filled = false, size = 16, style, ...others }, ref) => (
    <svg
        // Provided by FontAwesome SVG
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 512"
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
                ? "M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
                : "M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"}
        />
    </svg>
))

export const ChevronRightFAIcon = React.forwardRef<SVGSVGElement, FAIconProps>(({ ariaHidden = "true", color, filled = false, size = 16, style, ...others }, ref) => (
    <svg
        // Provided by FontAwesome SVG
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 512"
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
                ? "M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                : "M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"}
        />
    </svg>
))

export const ArrowRightFarFAIcon = React.forwardRef<SVGSVGElement, FAIconProps>(({ ariaHidden = "true", color, filled = false, size = 16, style, ...others }, ref) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
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
            d="M440.6 273.4c4.7-4.5 7.4-10.8 7.4-17.4s-2.7-12.8-7.4-17.4l-176-168c-9.6-9.2-24.8-8.8-33.9 .8s-8.8 24.8 .8 33.9L364.1 232 24 232c-13.3 0-24 10.7-24 24s10.7 24 24 24l340.1 0L231.4 406.6c-9.6 9.2-9.9 24.3-.8 33.9s24.3 9.9 33.9 .8l176-168z"
        />
    </svg>
))
