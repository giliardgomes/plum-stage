import axe from "axe-core"
import { render } from "@test-utils"
import {
    itIsPolymorphic,
    itRendersChildren,
    itSupportsClassName,
    itSupportsFocusEvents,
    itSupportsOthers,
    itSupportsRef,
} from "@test-utils/helpers"

import { Button } from "@/components/Button"
import type { ButtonProps } from "@/components/Button"

const defaultProps: ButtonProps = {
    children: "Save",
}

describe("Button", () => {
    itIsPolymorphic<ButtonProps>({ component: Button, props: defaultProps })
    itRendersChildren<ButtonProps>({ component: Button, props: defaultProps })
    itSupportsClassName<ButtonProps>({ component: Button, props: defaultProps })
    itSupportsFocusEvents<ButtonProps>({ component: Button, props: defaultProps })
    itSupportsOthers<ButtonProps>({ component: Button, props: defaultProps })
    itSupportsRef<ButtonProps>({ component: Button, props: defaultProps, refType: HTMLButtonElement })

    it("renders a simple Button", () => {
        const screen = render(<Button>Save</Button>)
        expect(screen.getByText("Save")).toBeInTheDocument()
        expect(screen.getByRole("button")).toBeInTheDocument()
    })

    it("renders an icon-only Button with a single character", () => {
        const screen = render(<Button>♺</Button>)
        expect(screen.getByRole("button")).toBeInTheDocument()
        expect(screen.getByRole("button")).toHaveAttribute("data-icon-only")
    })

    it("renders an icon-only Button with a single child node", () => {
        const screen = render(<Button><img alt="nothing" /></Button>)
        expect(screen.getByRole("button")).toBeInTheDocument()
        expect(screen.getByRole("button")).toHaveAttribute("data-icon-only")
    })

    it("renders without a11y violations", async () => {
        const { container } = render(<Button>Testing</Button>)
        const results = await axe.run(container)
        expect(results.violations).toEqual([])
    })
})
