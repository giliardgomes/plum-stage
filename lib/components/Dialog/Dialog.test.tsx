import { render } from "@test-utils"
import {
    itRendersChildren,
    itSupportsRef,
} from "@test-utils/helpers"

import { Dialog, DialogProps } from "@/components/Dialog"
import { CircleInfoFarFAIcon } from "@/components/Icons"
import { createRef } from "react"
import axe from "axe-core"

const defaultProps: DialogProps = {
    buttonProps: {
        onClick: () => null,
        children: "Ok",
    },
    children: "You opened the modal!",
    opened: true,
    onClose: () => null,
    title: "Modal Title",
}

describe("Dialog", () => {
    itRendersChildren<DialogProps>({ component: Dialog, props: defaultProps })
    itSupportsRef<DialogProps>({ component: Dialog, props: defaultProps, refType: HTMLDivElement })

    it("supports refs for the buttons", () => {
        const buttonRef = createRef<HTMLButtonElement>()
        const secondaryButtonRef = createRef<HTMLButtonElement>()
        render(
            <Dialog

                {...defaultProps}
                buttonProps={[{
                    onClick: () => null,
                    children: "No",
                    ref: secondaryButtonRef,
                }, {
                    onClick: () => null,
                    children: "Ok",
                    ref: buttonRef,
                }]}
            >
                Tile label
            </Dialog>,
        )
        expect(buttonRef.current).toBeInTheDocument()
        expect(secondaryButtonRef.current).toBeInTheDocument()
    })

    it("supports ...others props", () => {
        // Because the modal is rendered differently than normal components, the standard "itSupportsOthers" test fails
        const screen = render(<Dialog {...defaultProps} data-random-attribute data-testid="modal" />)
        expect(screen.getByTestId("modal")).toHaveAttribute("data-random-attribute")
    })

    it("renders given second button, icon, and badge", () => {
        const screen = render(
            <Dialog
                icon={<CircleInfoFarFAIcon data-testid="modal-icon" />}
                {...defaultProps}
                buttonProps={[{
                    onClick: () => null,
                    children: "No",
                }, {
                    onClick: () => null,
                    children: "Ok",
                }]}
                opened={true}
            >
                Tile label
            </Dialog>,
        )
        expect(screen.getByText("Ok")).toBeInTheDocument()
        expect(screen.getByText("No")).toBeInTheDocument()
        expect(screen.getByTestId("modal-icon")).toBeInTheDocument()
    })

    it("passes button onClick functions correctly", () => {
        const clickOk = vi.fn()
        const clickNo = vi.fn()

        const screen = render(
            <Dialog

                {...defaultProps}
                buttonProps={[{
                    onClick: clickOk,
                    children: "Ok",
                }, {
                    onClick: clickNo,
                    children: "No",
                }]}
            >
                Tile label
            </Dialog>,
        )
        screen.getByText("Ok").click()
        expect(clickOk).toHaveBeenCalled()
        screen.getByText("No").click()
        expect(clickNo).toHaveBeenCalled()
    })

    it("renders without a11y violations", async () => {
        const { container } = render(<Dialog {...defaultProps} />)
        const results = await axe.run(container)
        expect(results.violations).toEqual([])
    })
})
