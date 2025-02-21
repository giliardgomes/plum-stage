import { render } from "@test-utils"
import {
    itRendersChildren,
    itSupportsRef,
} from "@test-utils/helpers"

import { Modal, ModalProps } from "@/components/Modal"
import { Button } from "@/components/Button"
import axe from "axe-core"

const defaultProps: ModalProps = {
    children: (
        <>
            You Opened the Modal!
            <Button onClick={() => null}>Ok</Button>
        </>
    ),
    opened: true,
    onClose: () => null,
}

describe("Modal", () => {
    itRendersChildren<ModalProps>({ component: Modal, props: defaultProps })
    itSupportsRef<ModalProps>({ component: Modal, props: defaultProps, refType: HTMLDivElement })

    it("renders without a11y violations", async () => {
        const { container } = render(<Modal {...defaultProps} />)
        const results = await axe.run(container)
        expect(results.violations).toEqual([])
    })

    it("supports ...others props", () => {
        // Because the modal is rendered differently than normal components, the standard "itSupportsOthers" test fails
        const screen = render(<Modal {...defaultProps} data-random-attribute data-testid="modal" />)
        expect(screen.getByTestId("modal")).toHaveAttribute("data-random-attribute")
    })
})
