import { render } from "@test-utils"
import {
    itRendersChildren,
    itSupportsOthers,
    itSupportsRef,
} from "@test-utils/helpers"

import axe from "axe-core"
import { PageTitle, PageTitleProps } from "@/components/PageTitle"

const defaultProps: PageTitleProps = {
    children: "Testing Page Title",
}

describe("Title", () => {
    it("renders correctly", () => {
        const screen = render(<PageTitle {...defaultProps} />)
        expect(screen.getByText("Testing Page Title")).toBeInTheDocument()
        expect(screen.getByText("Testing Page Title").tagName).toBe("H1")
    })
    itRendersChildren<PageTitleProps>({ component: PageTitle, props: defaultProps })
    itSupportsRef<PageTitleProps>({ component: PageTitle, props: defaultProps, refType: HTMLHeadingElement })

    it("renders without a11y violations", async () => {
        const { container } = render(<PageTitle {...defaultProps} />)
        const results = await axe.run(container)
        expect(results.violations).toEqual([])
    })
    itSupportsOthers<PageTitleProps>({ component: PageTitle, props: defaultProps })
})
