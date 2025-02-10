import { render } from "@test-utils"
import {
    itRendersChildren,
    itSupportsRef,
} from "@test-utils/helpers"

import { SingleActionModal, SingleActionModalProps } from "@/components/SingleActionModal"
import { CircleInfoFarFAIcon } from "@/components/Icons"
import { createRef } from "react"

const defaultProps: SingleActionModalProps = {
    buttonProps: {
        onClick: () => null,
        children: "Ok",
    },
    children: "You opened the modal!",
    isOpen: true,
    onClose: () => null,
    title: "Modal Title",
}

describe("SingleActionModal", () => {
    itRendersChildren<SingleActionModalProps>({ component: SingleActionModal, props: defaultProps })
    itSupportsRef<SingleActionModalProps>({ component: SingleActionModal, props: defaultProps, refType: HTMLDivElement })

    it("supports refs for the buttons", () => {
        const buttonRef = createRef<HTMLButtonElement>()
        const secondaryButtonRef = createRef<HTMLButtonElement>()
        render(
            <SingleActionModal

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
            </SingleActionModal>,
        )
        expect(buttonRef.current).toBeInTheDocument()
        expect(secondaryButtonRef.current).toBeInTheDocument()
    })

    it("supports ...others props", () => {
        // Because the modal is rendered differently than normal components, the standard "itSupportsOthers" test fails
        const screen = render(<SingleActionModal {...defaultProps} data-random-attribute data-testid="modal" />)
        expect(screen.getByTestId("modal")).toHaveAttribute("data-random-attribute")
    })

    it("renders given second button, icon, and badge", () => {
        const screen = render(
            <SingleActionModal
                icon={<CircleInfoFarFAIcon data-testid="modal-icon" />}
                {...defaultProps}
                buttonProps={[{
                    onClick: () => null,
                    children: "No",
                }, {
                    onClick: () => null,
                    children: "Ok",
                }]}
                isOpen={true}
            >
                Tile label
            </SingleActionModal>,
        )
        expect(screen.getByText("Ok")).toBeInTheDocument()
        expect(screen.getByText("No")).toBeInTheDocument()
        expect(screen.getByTestId("modal-icon")).toBeInTheDocument()
    })

    it("passes button onClick functions correctly", () => {
        const clickOk = vi.fn()
        const clickNo = vi.fn()

        const screen = render(
            <SingleActionModal

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
            </SingleActionModal>,
        )
        screen.getByText("Ok").click()
        expect(clickOk).toHaveBeenCalled()
        screen.getByText("No").click()
        expect(clickNo).toHaveBeenCalled()
    })
})
