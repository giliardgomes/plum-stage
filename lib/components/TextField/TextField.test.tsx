import axe from "axe-core"
import { render } from "@test-utils"

import { TextField } from "./index"

describe("TextField", () => {
    it("renders without a11y violations", async () => {
        const { container } = render(<TextField label="Your Name" />)
        const results = await axe.run(container)
        expect(results.violations).toEqual([])
    })
})
