import axe from "axe-core"
import { render } from "@test-utils"
import { Highlight } from "@/components/Highlight/index"
import { escapeRegExp } from "@/components/Highlight/HighlightHelpers"

describe("Regexp tests", () => {
    it("correctly escapes special characters", () => {
        expect(
            escapeRegExp("This is a test"),
        ).toEqual("This is a test")

        expect(
            escapeRegExp("$25 [And then (a few more)] \\ Because |"),
        ).toEqual("\\$25 \\[And then \\(a few more\\)\\] \\\\ Because \\|")
    })
})

describe("Highlight", () => {
    it("renders without a11y violations", async () => {
        const { container } = render(<Highlight highlight="test" text="This is a test" />)
        const results = await axe.run(container)
        expect(results.violations).toEqual([])
    })

    it("Does highlight the text", async () => {
        const { getAllByText } = render(<Highlight highlight="i" text="This is a test" />)
        const highlightedIs = getAllByText("i")
        expect(highlightedIs.length).toBe(2)
        highlightedIs.map((i: HTMLElement) => expect(i).toHaveAttribute("data-highlighted"))
    })
})
