import axe from "axe-core"
import { render } from "@test-utils"

import { Label } from "./index"
import { Tooltip } from "@/components/Tooltip"
import { StorybookDemoIcon } from "./StorybookDemoIcon"

describe("Label", () => {
    it("renders without a11y violations", async () => {
        const { container } = render(
            <>
                <Label label="Test1" />
                <Label label="Test2" withAsterisk />
                <Label
                    label="Test2"
                    withAsterisk
                    rightSection={(
                        <Tooltip label="This label has a tooltip.">
                            <StorybookDemoIcon />
                        </Tooltip>
                    )}
                />
            </>,
        )
        const results = await axe.run(container)
        expect(results.violations).toEqual([])
    })
})
