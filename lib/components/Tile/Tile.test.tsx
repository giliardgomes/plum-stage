import { render } from "../../../src/test-utils"
import { Badge } from "@mantine/core"

import { Tile } from "./index"
import type { TileProps } from "./index"

import {
    itIsPolymorphic,
    itRendersChildren,
    itSupportsClassName,
    itSupportsFocusEvents,
    itSupportsOthers,
    itSupportsRef,
} from "../../../src/test-utils/helpers"

const defaultProps: TileProps = {
    children: "Tile label",
}

describe("Tile", () => {
    itIsPolymorphic<TileProps>({ component: Tile, props: defaultProps })
    itRendersChildren<TileProps>({ component: Tile, props: defaultProps })
    itSupportsClassName<TileProps>({ component: Tile, props: defaultProps })
    itSupportsFocusEvents<TileProps>({ component: Tile, props: defaultProps })
    itSupportsOthers<TileProps>({ component: Tile, props: defaultProps })
    itSupportsRef<TileProps>({ component: Tile, props: defaultProps, refType: HTMLButtonElement })

    it("renders given icon and badge", () => {
        const screen = render(
            <Tile badge={<Badge>Badge</Badge>}>
                Tile label
            </Tile>,
        )
        expect(screen.getByText("Tile label")).toBeInTheDocument()
        expect(screen.getByText("Badge")).toBeInTheDocument()

        // No Icons in PLum yet
        // expect(screen.container.querySelector("svg")).toBeInTheDocument()
        // expect(screen.container.querySelector("svg")).toHaveAttribute("data-icon", "plus-circle")
    })
})
