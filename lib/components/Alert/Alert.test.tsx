import axe from "axe-core"
import { render, userEvent } from "@test-utils"
import {
    itIsPolymorphic,
    itRendersChildren,
    itSupportsOthers,
    itSupportsRef,
} from "@test-utils/helpers"

import { Alert } from "@/components/Alert"
import type { AlertProps } from "@/components/Alert"

const defaultProps: AlertProps = {
    children: "An Alert",
    variant: "info",
}

describe("Alert", () => {
    itIsPolymorphic<AlertProps>({ component: Alert, props: defaultProps })
    itRendersChildren<AlertProps>({ component: Alert, props: defaultProps })
    itSupportsOthers<AlertProps>({ component: Alert, props: defaultProps })
    itSupportsRef<AlertProps>({ component: Alert, props: defaultProps, refType: HTMLDivElement })

    it("renders an inline alert", async () => {
        const screen = render(<Alert variant="info" title="Alert Title">This is an alert.</Alert>)
        expect(screen.getByText("This is an alert.")).toBeInTheDocument()
        expect(screen.getByText("Alert Title")).toBeInTheDocument()
    })

    it("renders a dismissable alert", async () => {
        const mockOnClose = vi.fn()
        const screen = render(<Alert variant="warning" onClose={mockOnClose}>This is an alert.</Alert>)
        expect(screen.getByText("This is an alert.")).toBeInTheDocument()

        await userEvent.click(screen.getByRole("button"))
        expect(mockOnClose).toHaveBeenCalled()
    })

    it("renders without a11y violations", async () => {
        const { container } = render(<Alert variant="error" title="Title">Testing</Alert>)
        const results = await axe.run(container)
        expect(results.violations).toEqual([])
    })
})
