import React from "react"
import { rem } from "@mantine/core"

export interface FAIconProps extends React.ComponentPropsWithRef<"svg"> {
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
            d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z"
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
                ? "M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5-45.3 0l-192 192z"
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

export const UserLargeFarFAIcon = React.forwardRef<SVGSVGElement, FAIconProps>(({ ariaHidden = "true", color, filled = false, size = 16, style, ...others }, ref) => (
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
            d="M352 144a96 96 0 1 0 -192 0 96 96 0 1 0 192 0zm-240 0a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zM49.3 464l413.4 0c-8.3-54.4-55.3-96-112-96l-189.4 0c-56.7 0-103.6 41.6-112 96zM0 481.3C0 392.2 72.2 320 161.3 320l189.4 0C439.8 320 512 392.2 512 481.3c0 17-13.8 30.7-30.7 30.7L30.7 512C13.8 512 0 498.2 0 481.3z"
        />
    </svg>
))

export const YouTubeFarFAIcon = React.forwardRef<SVGSVGElement, FAIconProps>(({ ariaHidden = "true", color, filled = false, size = 16, style, ...others }, ref) => (
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
        {/* <!--!Font Awesome Pro 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2025 Fonticons, Inc.--> */}
        <path
            fill="currentColor"
            d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.6 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"
        />
    </svg>
))

export const PlayFarFAIcon = React.forwardRef<SVGSVGElement, FAIconProps>(({ ariaHidden = "true", color, filled = false, size = 16, style, ...others }, ref) => (
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
            d={filled
                ? "M73 39c-14.8-9-33.4-9.4-48.5-.9S0 62.6 0 80v352c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"
                : "M48 432L336 256 48 80l0 352zM24.5 38.1C39.7 29.6 58.2 30 73 39L361 215c14.3 8.7 23 24.2 23 41s-8.7 32.2-23 41L73 473c-14.8 9.1-33.4 9.4-48.5 .9S0 449.4 0 432L0 80C0 62.6 9.4 46.6 24.5 38.1z"}
        />
    </svg>
))

export const ThumbsUpFarFAIcon = React.forwardRef<SVGSVGElement, FAIconProps>(({ ariaHidden = "true", color, filled = false, size = 16, style, ...others }, ref) => (
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
        {/* <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--> */}
        <path
            fill="currentColor"
            d={filled
                ? "M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 18.5-10.5 34.6-25.9 42.6C497 275.4 504 288.9 504 304c0 23.4-16.8 42.9-38.9 47.1c4.4 7.3 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z"
                : "M96 191.1H32c-17.67 0-32 14.33-32 32v192c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32V223.1C128 206.3 113.7 191.1 96 191.1zM512 227c0-36.89-30.05-66.92-66.97-66.92h-99.86C354.7 135.1 360 113.5 360 100.8c0-33.8-26.2-68.78-70.06-68.78c-46.61 0-59.36 32.44-69.61 58.5c-31.66 80.5-60.33 66.39-60.33 93.47c0 12.84 10.36 23.99 24.02 23.99c5.256 0 10.55-1.721 14.97-5.26c76.76-61.37 57.97-122.7 90.95-122.7c16.08 0 22.06 12.75 22.06 20.79c0 7.404-7.594 39.55-25.55 71.59c-2.046 3.646-3.066 7.686-3.066 11.72c0 13.92 11.43 23.1 24 23.1h137.6C455.5 208.1 464 216.6 464 227c0 9.809-7.766 18.03-17.67 18.71c-12.66 .8593-22.36 11.4-22.36 23.94c0 15.47 11.39 15.95 11.39 28.91c0 25.37-35.03 12.34-35.03 42.15c0 11.22 6.392 13.03 6.392 22.25c0 22.66-29.77 13.76-29.77 40.64c0 4.515 1.11 5.961 1.11 9.456c0 10.45-8.516 18.95-18.97 18.95h-52.53c-25.62 0-51.02-8.466-71.5-23.81l-36.66-27.51c-4.315-3.245-9.37-4.811-14.38-4.811c-13.85 0-24.03 11.38-24.03 24.04c0 7.287 3.312 14.42 9.596 19.13l36.67 27.52C235 468.1 270.6 480 306.6 480h52.53c35.33 0 64.36-27.49 66.8-62.2c17.77-12.23 28.83-32.51 28.83-54.83c0-3.046-.2187-6.107-.6406-9.122c17.84-12.15 29.28-32.58 29.28-55.28c0-5.311-.6406-10.54-1.875-15.64C499.9 270.1 512 250.2 512 227z"}
        />
    </svg>
))

export const ThumbsDownFarFAIcon = React.forwardRef<SVGSVGElement, FAIconProps>(({ ariaHidden = "true", color, filled = false, size = 16, style, ...others }, ref) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        aria-hidden={ariaHidden}
        color={color}
        ref={ref}
        role="img"
        style={{
            width: rem(size),
            height: rem(size),
            ...style,
        }}
        {...others}
    >
        {/* <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--> */}
        <path
            fill="currentColor"
            d={filled
                ? "M323.8 477.2c-38.2 10.9-78.1-11.2-89-49.4l-5.7-20c-3.7-13-10.4-25-19.5-35l-51.3-56.4c-8.9-9.8-8.2-25 1.6-33.9s25-8.2 33.9 1.6l51.3 56.4c14.1 15.5 24.4 34 30.1 54.1l5.7 20c3.6 12.7 16.9 20.1 29.7 16.5s20.1-16.9 16.5-29.7l-5.7-20c-5.7-19.9-14.7-38.7-26.6-55.5c-5.2-7.3-5.8-16.9-1.7-24.9s12.3-13 21.3-13L448 288c8.8 0 16-7.2 16-16c0-6.8-4.3-12.7-10.4-15c-7.4-2.8-13-9-14.9-16.7s.1-15.8 5.3-21.7c2.5-2.8 4-6.5 4-10.6c0-7.8-5.6-14.3-13-15.7c-8.2-1.6-15.1-7.3-18-15.2s-1.6-16.7 3.6-23.3c2.1-2.7 3.4-6.1 3.4-9.9c0-6.7-4.2-12.6-10.2-14.9c-11.5-4.5-17.7-16.9-14.4-28.8c.4-1.3 .6-2.8 .6-4.3c0-8.8-7.2-16-16-16l-97.5 0c-12.6 0-25 3.7-35.5 10.7l-61.7 41.1c-11 7.4-25.9 4.4-33.3-6.7s-4.4-25.9 6.7-33.3l61.7-41.1c18.4-12.3 40-18.8 62.1-18.8L384 32c34.7 0 62.9 27.6 64 62c14.6 11.7 24 29.7 24 50c0 4.5-.5 8.8-1.3 13c15.4 11.7 25.3 30.2 25.3 51c0 6.5-1 12.8-2.8 18.7C504.8 238.3 512 254.3 512 272c0 35.3-28.6 64-64 64l-92.3 0c4.7 10.4 8.7 21.2 11.8 32.2l5.7 20c10.9 38.2-11.2 78.1-49.4 89zM32 384c-17.7 0-32-14.3-32-32L0 128c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32l0 224c0 17.7-14.3 32-32 32l-64 0z"
                : "M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2l144 0c26.5 0 48-21.5 48-48c0-18.5-10.5-34.6-25.9-42.6C497 236.6 504 223.1 504 208c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48l-97.5 0c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7l0 38.3 0 48 0 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 384l64 0c17.7 0 32-14.3 32-32l0-224c0-17.7-14.3-32-32-32L32 96C14.3 96 0 110.3 0 128L0 352c0 17.7 14.3 32 32 32z"}
        />
    </svg>
))

export const ShareFarFAIcon = React.forwardRef<SVGSVGElement, FAIconProps>(({ ariaHidden = "true", color, filled = false, size = 16, style, ...others }, ref) => (
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
            d="M288 240l-96 0c-66.2 0-122 44.7-138.8 105.5C49.9 333.1 48 319.3 48 304c0-70.7 57.3-128 128-128l112 0 24 0c13.3 0 24-10.7 24-24l0-24 0-28.1L456.1 208 336 316.1l0-28.1 0-24c0-13.3-10.7-24-24-24l-24 0zm0 48l0 48 0 16c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4s-19 16.6-19 29.2l0 16 0 48-48 0-64 0C78.8 128 0 206.8 0 304c0 78 38.6 126.2 68.7 152.1c4.1 3.5 8.1 6.6 11.7 9.3c3.2 2.4 6.2 4.4 8.9 6.2c4.5 3 8.3 5.1 10.8 6.5c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-6.8-3.6-13.2-8.3-18.1c-.5-.5-.9-.9-1.4-1.4c-2.4-2.3-5.1-5.1-7.7-8.6c-1.7-2.3-3.4-5-5-7.9c-5.3-9.7-9.5-22.9-9.5-40.2c0-53 43-96 96-96l48 0 48 0z"
        />
    </svg>
))

export const TwitterFarFAIcon = React.forwardRef<SVGSVGElement, FAIconProps>(({ ariaHidden = "true", color, filled = false, size = 16, style, ...others }, ref) => (
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
        {/* <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--> */}
        <path
            fill="currentColor"
            d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
        />
    </svg>
))

export const FacebookFarFAIcon = React.forwardRef<SVGSVGElement, FAIconProps>(({ ariaHidden = "true", color, filled = false, size = 16, style, ...others }, ref) => (
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
        {/* <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--> */}
        <path
            fill="currentColor"
            d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"
        />
    </svg>
))

export const LinkedInFarFAIcon = React.forwardRef<SVGSVGElement, FAIconProps>(({ ariaHidden = "true", color, filled = false, size = 16, style, ...others }, ref) => (
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
        {/* <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--> */}
        <path
            fill="currentColor"
            d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
        />
    </svg>
))

export const InstagramFarFAIcon = React.forwardRef<SVGSVGElement, FAIconProps>(({ ariaHidden = "true", color, filled = false, size = 16, style, ...others }, ref) => (
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
        {/* <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--> */}
        <path
            fill="currentColor"
            d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
        />
    </svg>
))

export const TrashFarFAIcon = React.forwardRef<SVGSVGElement, FAIconProps>(({ ariaHidden = "true", color, filled = false, size = 16, style, ...others }, ref) => (
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
            d="M177.1 48l93.7 0c2.7 0 5.2 1.3 6.7 3.6l19 28.4-145 0 19-28.4c1.5-2.2 4-3.6 6.7-3.6zM354.2 80L317.5 24.9C307.1 9.4 289.6 0 270.9 0L177.1 0c-18.7 0-36.2 9.4-46.6 24.9L93.8 80 80.1 80 32 80l-8 0C10.7 80 0 90.7 0 104s10.7 24 24 24l11.6 0L59.6 452.7c2.5 33.4 30.3 59.3 63.8 59.3l201.1 0c33.5 0 61.3-25.9 63.8-59.3L412.4 128l11.6 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-8 0-48.1 0-13.7 0zm10.1 48L340.5 449.2c-.6 8.4-7.6 14.8-16 14.8l-201.1 0c-8.4 0-15.3-6.5-16-14.8L83.7 128l280.6 0z"
        />
    </svg>
))

export const CalendarFarFAIcon = React.forwardRef<SVGSVGElement, FAIconProps>(({ ariaHidden = "true", color, filled = false, size = 16, style, ...others }, ref) => (
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
        {/* <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--> */}
        <path
            fill="currentColor"
            d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L64 64C28.7 64 0 92.7 0 128l0 16 0 48L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-256 0-48 0-16c0-35.3-28.7-64-64-64l-40 0 0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L152 64l0-40zM48 192l352 0 0 256c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256z"
        />
    </svg>
))

export const FavoriteFarFAIcon = React.forwardRef<SVGSVGElement, FAIconProps>(({ ariaHidden = "true", color, filled = false, size = 16, style, ...others }, ref) => (
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
        {/* <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--> */}
        <path
            fill="currentColor"
            d={filled
                ? "M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"
                : "M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"}
        />
    </svg>
))

export const ThreadsFAIcon = React.forwardRef<SVGSVGElement, FAIconProps>(({ ariaHidden = "true", color, size = 16, style, ...others }, ref) => (
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
        {/* <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--> */}
        <path
            fill="currentColor"
            d="M331.5 235.7c2.2 .9 4.2 1.9 6.3 2.8c29.2 14.1 50.6 35.2 61.8 61.4c15.7 36.5 17.2 95.8-30.3 143.2c-36.2 36.2-80.3 52.5-142.6 53h-.3c-70.2-.5-124.1-24.1-160.4-70.2c-32.3-41-48.9-98.1-49.5-169.6V256v-.2C17 184.3 33.6 127.2 65.9 86.2C102.2 40.1 156.2 16.5 226.4 16h.3c70.3 .5 124.9 24 162.3 69.9c18.4 22.7 32 50 40.6 81.7l-40.4 10.8c-7.1-25.8-17.8-47.8-32.2-65.4c-29.2-35.8-73-54.2-130.5-54.6c-57 .5-100.1 18.8-128.2 54.4C72.1 146.1 58.5 194.3 58 256c.5 61.7 14.1 109.9 40.3 143.3c28 35.6 71.2 53.9 128.2 54.4c51.4-.4 85.4-12.6 113.7-40.9c32.3-32.2 31.7-71.8 21.4-95.9c-6.1-14.2-17.1-26-31.9-34.9c-3.7 26.9-11.8 48.3-24.7 64.8c-17.1 21.8-41.4 33.6-72.7 35.3c-23.6 1.3-46.3-4.4-63.9-16c-20.8-13.8-33-34.8-34.3-59.3c-2.5-48.3 35.7-83 95.2-86.4c21.1-1.2 40.9-.3 59.2 2.8c-2.4-14.8-7.3-26.6-14.6-35.2c-10-11.7-25.6-17.7-46.2-17.8H227c-16.6 0-39 4.6-53.3 26.3l-34.4-23.6c19.2-29.1 50.3-45.1 87.8-45.1h.8c62.6 .4 99.9 39.5 103.7 107.7l-.2 .2zm-156 68.8c1.3 25.1 28.4 36.8 54.6 35.3c25.6-1.4 54.6-11.4 59.5-73.2c-13.2-2.9-27.8-4.4-43.4-4.4c-4.8 0-9.6 .1-14.4 .4c-42.9 2.4-57.2 23.2-56.2 41.8l-.1 .1z"
        />
    </svg>
))

export const BlueskyFAIcon = React.forwardRef<SVGSVGElement, FAIconProps>(({ ariaHidden = "true", color, size = 16, style, ...others }, ref) => (
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
        {/* <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--> */}
        <path
            fill="currentColor"
            d="M111.8 62.2C170.2 105.9 233 194.7 256 242.4c23-47.6 85.8-136.4 144.2-180.2c42.1-31.6 110.3-56 110.3 21.8c0 15.5-8.9 130.5-14.1 149.2C478.2 298 412 314.6 353.1 304.5c102.9 17.5 129.1 75.5 72.5 133.5c-107.4 110.2-154.3-27.6-166.3-62.9l0 0c-1.7-4.9-2.6-7.8-3.3-7.8s-1.6 3-3.3 7.8l0 0c-12 35.3-59 173.1-166.3 62.9c-56.5-58-30.4-116 72.5-133.5C100 314.6 33.8 298 15.7 233.1C10.4 214.4 1.5 99.4 1.5 83.9c0-77.8 68.2-53.4 110.3-21.8z"
        />
    </svg>
))

export const PenFarFAIcon = React.forwardRef<SVGSVGElement, FAIconProps>(({ ariaHidden = "true", color, filled = false, size = 16, style, ...others }, ref) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 13"
        aria-hidden={ariaHidden}
        color={color}
        ref={ref}
        role="img"
        style={{ width: rem(size), height: rem(size), ...style }}
        {...others}
    >
        <path
            fill="currentColor"
            d="M12.5547 1.83594C13.1406 2.42188 13.1406 3.35938 12.5547 3.94531L10.7969 5.70312L10 6.5L4.28125 12.2188L1.60938 12.5C1.58594 12.5 1.5625 12.5 1.53906 12.5C1.21094 12.5 0.953125 12.2188 1 11.8906L1.28125 9.21875L7 3.5L7.79688 2.70312L9.55469 0.945312C9.83594 0.664062 10.2344 0.5 10.6094 0.5C10.9844 0.5 11.3828 0.664062 11.6641 0.945312L11.6641 0.945312L12.5547 1.83594ZM3.76562 11.1406L9.20312 5.72656L9.92969 5L8.5 3.57031L7.77344 4.29688L2.35938 9.73438L2.19531 11.3047L3.76562 11.1406ZM11.7578 3.14844C11.8984 3.00781 11.8984 2.77344 11.7578 2.63281L10.8672 1.74219C10.7734 1.64844 10.6562 1.625 10.6094 1.625C10.5625 1.625 10.4453 1.64844 10.3516 1.74219L9.29688 2.77344L10.7266 4.20312L11.7578 3.14844Z"
        />
    </svg>
))

export const CopyFarFAIcon = React.forwardRef<SVGSVGElement, FAIconProps>(({ ariaHidden = "true", color, filled = false, size = 16, style, ...others }, ref) => (
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
            d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l140.1 0L400 115.9 400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-204.1c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-32-48 0 0 32c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l32 0 0-48-32 0z"
        />
    </svg>
))

export const ArrowToBottomFarFAIcon = React.forwardRef<SVGSVGElement, FAIconProps>(({ ariaHidden = "true", color, filled = false, size = 16, style, ...others }, ref) => (
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
            d="M360 480c13.3 0 24-10.7 24-24s-10.7-24-24-24L24 432c-13.3 0-24 10.7-24 24s10.7 24 24 24l336 0zM174.5 344.4c4.5 4.8 10.9 7.6 17.5 7.6s12.9-2.7 17.5-7.6l128-136c9.1-9.7 8.6-24.8-1-33.9s-24.8-8.6-33.9 1L216 267.5l0-83.5 0-128c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 128 0 83.5L81.5 175.6c-9.1-9.7-24.3-10.1-33.9-1s-10.1 24.3-1 33.9l128 136z"
        />
    </svg>
))

export const SquareKanbanFarFAIcon = React.forwardRef<SVGSVGElement, FAIconProps>(({ ariaHidden = "true", color, filled = false, size = 16, style, ...others }, ref) => (
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
            d="M64 432c-8.8 0-16-7.2-16-16L48 96c0-8.8 7.2-16 16-16l320 0c8.8 0 16 7.2 16 16l0 320c0 8.8-7.2 16-16 16L64 432zM0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96L0 416zM128 288c13.3 0 24-10.7 24-24l0-112c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24zm168 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-176c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 176zm-72-72c13.3 0 24-10.7 24-24l0-80c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 80c0 13.3 10.7 24 24 24z"
        />
    </svg>
))

export const PaperPlaneTopFarFAIcon = React.forwardRef<SVGSVGElement, FAIconProps>(({ ariaHidden = "true", color, filled = false, size = 16, style, ...others }, ref) => (
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
            d="M133.9 232L65.8 95.9 383.4 232l-249.5 0zm0 48l249.5 0L65.8 416.1l68-136.1zM44.6 34.6C32.3 29.3 17.9 32.3 8.7 42S-2.6 66.3 3.4 78.3L92.2 256 3.4 433.7c-6 12-3.9 26.5 5.3 36.3s23.5 12.7 35.9 7.5l448-192c11.8-5 19.4-16.6 19.4-29.4s-7.6-24.4-19.4-29.4l-448-192z"
        />
    </svg>
))

export const ShieldFarFAIcon = React.forwardRef<SVGSVGElement, FAIconProps>(({ ariaHidden = "true", color, filled = false, size = 16, style, ...others }, ref) => (
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
            d="M237.5 508.3c11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3l-192-80a48.2 48.2 0 0 0 -36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3zM256 48l192 80c0 173.8-98.4 297-192 336-97.5-40.6-192-166.7-192-336l192-80z"
        />
    </svg>
))

export const CreditCardFarFAIcon = React.forwardRef<SVGSVGElement, FAIconProps>(({ ariaHidden = "true", color, filled = false, size = 16, style, ...others }, ref) => (
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
            d="M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48.1 48h479.8c26.6 0 48.1-21.5 48.1-48V80c0-26.5-21.5-48-48.1-48zM54.1 80h467.8c3.3 0 6 2.7 6 6v42H48.1V86c0-3.3 2.7-6 6-6zm467.8 352H54.1c-3.3 0-6-2.7-6-6V256h479.8v170c0 3.3-2.7 6-6 6zM192 332v40c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v40c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z"
        />
    </svg>
))

export const CalendarDayFarFAIcon = React.forwardRef<SVGSVGElement, FAIconProps>(({ ariaHidden = "true", color, filled = false, size = 16, style, ...others }, ref) => (
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
            d="M128 0c13.3 0 24 10.7 24 24l0 40 144 0 0-40c0-13.3 10.7-24 24-24s24 10.7 24 24l0 40 40 0c35.3 0 64 28.7 64 64l0 16 0 48 0 256c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 192l0-48 0-16C0 92.7 28.7 64 64 64l40 0 0-40c0-13.3 10.7-24 24-24zM400 192L48 192l0 256c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-256zM112 256l96 0c8.8 0 16 7.2 16 16l0 96c0 8.8-7.2 16-16 16l-96 0c-8.8 0-16-7.2-16-16l0-96c0-8.8 7.2-16 16-16z"
        />
    </svg>
))

export const ClockFarFAIcon = React.forwardRef<SVGSVGElement, FAIconProps>(({ ariaHidden = "true", color, filled = false, size = 16, style, ...others }, ref) => (
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
        {/* <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--> */}
        <path
            fill="currentColor"
            d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"
        />
    </svg>
))

export const EllipsisVerticalFarFAIcon = React.forwardRef<SVGSVGElement, FAIconProps>(({ ariaHidden = "true", color, filled = false, size = 16, style, ...others }, ref) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 128 512"
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
            d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"
        />
    </svg>
))

export const UsersFarFAIcon = React.forwardRef<SVGSVGElement, FAIconProps>(({ ariaHidden = "true", color, filled = false, size = 16, style, ...others }, ref) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 640 512"
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
            d="M544 224c44.2 0 80-35.8 80-80s-35.8-80-80-80-80 35.8-80 80 35.8 80 80 80zm0-112c17.6 0 32 14.4 32 32s-14.4 32-32 32-32-14.4-32-32 14.4-32 32-32zM96 224c44.2 0 80-35.8 80-80s-35.8-80-80-80-80 35.8-80 80 35.8 80 80 80zm0-112c17.6 0 32 14.4 32 32s-14.4 32-32 32-32-14.4-32-32 14.4-32 32-32zm396.4 210.9c-27.5-40.8-80.7-56-127.8-41.7-14.2 4.3-29.1 6.7-44.7 6.7s-30.5-2.4-44.7-6.7c-47.1-14.3-100.3 .8-127.8 41.7-12.4 18.4-19.6 40.5-19.6 64.3V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-44.8c.2-23.8-7-45.9-19.4-64.3zM464 432H176v-44.8c0-36.4 29.2-66.2 65.4-67.2 25.5 10.6 51.9 16 78.6 16 26.7 0 53.1-5.4 78.6-16 36.2 1 65.4 30.7 65.4 67.2V432zm92-176h-24c-17.3 0-33.4 5.3-46.8 14.3 13.4 10.1 25.2 22.2 34.4 36.2 3.9-1.4 8-2.5 12.3-2.5h24c19.8 0 36 16.2 36 36 0 13.2 10.8 24 24 24s24-10.8 24-24c.1-46.3-37.6-84-83.9-84zm-236 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm0-176c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zM154.8 270.3c-13.4-9-29.5-14.3-46.8-14.3H84c-46.3 0-84 37.7-84 84 0 13.2 10.8 24 24 24s24-10.8 24-24c0-19.8 16.2-36 36-36h24c4.4 0 8.5 1.1 12.3 2.5 9.3-14 21.1-26.1 34.5-36.2z"
        />
    </svg>
))

export const ChartLineFarFAIcon = React.forwardRef<SVGSVGElement, FAIconProps>(({ ariaHidden = "true", color, filled = false, size = 16, style, ...others }, ref) => (
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
            d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z"
        />
    </svg>
))

export const GearFarFAIcon = React.forwardRef<SVGSVGElement, FAIconProps>(({ ariaHidden = "true", color, filled = false, size = 16, style, ...others }, ref) => (
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
            d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"
        />
    </svg>
))

export const CrosshairsFarFAIcon = React.forwardRef<SVGSVGElement, FAIconProps>(({ ariaHidden = "true", color, filled = false, size = 16, style, ...others }, ref) => (
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
            d="M256 0c13.3 0 24 10.7 24 24l0 17.3C380.1 52.4 459.6 131.9 470.7 232l17.3 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-17.3 0C459.6 380.1 380.1 459.6 280 470.7l0 17.3c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-17.3C131.9 459.6 52.4 380.1 41.3 280L24 280c-13.3 0-24-10.7-24-24s10.7-24 24-24l17.3 0C52.4 131.9 131.9 52.4 232 41.3L232 24c0-13.3 10.7-24 24-24zM89.7 280c10.5 73.6 68.7 131.8 142.3 142.3l0-30.3c0-13.3 10.7-24 24-24s24 10.7 24 24l0 30.3c73.6-10.5 131.8-68.7 142.3-142.3L392 280c-13.3 0-24-10.7-24-24s10.7-24 24-24l30.3 0C411.8 158.4 353.6 100.2 280 89.7l0 30.3c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-30.3C158.4 100.2 100.2 158.4 89.7 232l30.3 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-30.3 0zM256 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
        />
    </svg>
))

export const ChevronDownFarFAIcon = React.forwardRef<SVGSVGElement, FAIconProps>(({ ariaHidden = "true", color, filled = false, size = 16, style, ...others }, ref) => (
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
                ? "M239 401c9.4 9.4 24.6 9.4 33.9 0L465 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-175 175L81 175c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9L239 401z"
                : "M239 401c9.4 9.4 24.6 9.4 33.9 0L465 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-175 175L81 175c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9L239 401z"}
        />
    </svg>
))

export const ChevronUpFarFAIcon = React.forwardRef<SVGSVGElement, FAIconProps>(({ ariaHidden = "true", color, filled = false, size = 16, style, ...others }, ref) => (
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
                ? "M239 111c9.4-9.4 24.6-9.4 33.9 0L465 303c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-175-175L81 337c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9L239 111z"
                : "M239 111c9.4-9.4 24.6-9.4 33.9 0L465 303c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-175-175L81 337c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9L239 111z"}
        />
    </svg>
))

export const GripVerticalFarFAIcon = React.forwardRef<SVGSVGElement, FAIconProps>(({ ariaHidden = "true", color, filled = false, size = 16, style, ...others }, ref) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 512"
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
            d="M40 352l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40zm192 0l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40zM40 320c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0zM232 192l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40zM40 160c-22.1 0-40-17.9-40-40L0 72C0 49.9 17.9 32 40 32l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0zM232 32l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40z"
        />
    </svg>
))

export const ArrowUpFarFAIcon = React.forwardRef<SVGSVGElement, FAIconProps>(({ ariaHidden = "true", color, filled = false, size = 16, style, ...others }, ref) => (
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
            d={filled
                ? "M209.4 39.4C204.8 34.7 198.6 32 192 32s-12.8 2.7-17.4 7.4l-168 176c-9.2 9.6-8.8 24.8 .8 33.9s24.8 8.8 33.9-.8L168 115.9 168 456c0 13.3 10.7 24 24 24s24-10.7 24-24l0-340.1L342.6 248.6c9.2 9.6 24.3 9.9 33.9 .8s9.9-24.3 .8-33.9l-168-176z"
                : "M209.4 39.4C204.8 34.7 198.6 32 192 32s-12.8 2.7-17.4 7.4l-168 176c-9.2 9.6-8.8 24.8 .8 33.9s24.8 8.8 33.9-.8L168 115.9 168 456c0 13.3 10.7 24 24 24s24-10.7 24-24l0-340.1L342.6 248.6c9.2 9.6 24.3 9.9 33.9 .8s9.9-24.3 .8-33.9l-168-176z"}
        />
    </svg>
))

export const ArrowDownFarFAIcon = React.forwardRef<SVGSVGElement, FAIconProps>(({ ariaHidden = "true", color, filled = false, size = 16, style, ...others }, ref) => (
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
            d={filled
                ? "M174.6 472.6c4.5 4.7 10.8 7.4 17.4 7.4s12.8-2.7 17.4-7.4l168-176c9.2-9.6 8.8-24.8-.8-33.9s-24.8-8.8-33.9 .8L216 396.1 216 56c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 340.1L41.4 263.4c-9.2-9.6-24.3-9.9-33.9-.8s-9.9 24.3-.8 33.9l168 176z"
                : "M174.6 472.6c4.5 4.7 10.8 7.4 17.4 7.4s12.8-2.7 17.4-7.4l168-176c9.2-9.6 8.8-24.8-.8-33.9s-24.8-8.8-33.9 .8L216 396.1 216 56c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 340.1L41.4 263.4c-9.2-9.6-24.3-9.9-33.9-.8s-9.9 24.3-.8 33.9l168 176z"}
        />
    </svg>
))
