import axe from "axe-core"
import { render } from "@test-utils"

import { Menu } from "./index"

describe("Menu", () => {
    it("renders without a11y violations", async () => {
        const { container } = render(
            <Menu>
                <Menu.Target>
                    <button>Toggle Menu</button>
                </Menu.Target>
                <Menu.Dropdown>
                    <Menu.Item>Item one</Menu.Item>
                    <Menu.Item>Item two</Menu.Item>
                    <Menu.Item>Item three</Menu.Item>
                </Menu.Dropdown>
            </Menu>,
        )
        const results = await axe.run(container)
        expect(results.violations).toEqual([])
    })
})
