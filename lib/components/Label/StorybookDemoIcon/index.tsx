import React from "react"
import { rem } from "@mantine/core"

interface StorybookDemoIconProps extends React.ComponentPropsWithRef<"svg"> {}

export const StorybookDemoIcon = React.forwardRef<SVGSVGElement, StorybookDemoIconProps>(({}, ref) => {
    return (
        <svg
            aria-label="Storybook Demo Icon"
            ref={ref}
            role="img"
            style={{ width: rem(16), height: rem(16), paddingLeft: rem(4) }}
            tabIndex={0}
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
            <path
                fill="currentColor"
                d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
            />
        </svg>
    )
})
