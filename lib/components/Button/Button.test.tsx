import axe from "axe-core"
import { render } from "@test-utils"

import { Button } from "./index"

describe("Button", () => {
    it("renders without a11y violations", async () => {
        const { container } = render(<Button>Testing</Button>)
        const results = await axe.run(container)
        expect(results.violations).toEqual([])
    })
})
