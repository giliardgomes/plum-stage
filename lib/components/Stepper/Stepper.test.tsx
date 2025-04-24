import { render, screen } from "@testing-library/react"
import { Stepper, Step } from "."

describe("Stepper", () => {
    it("renders all steps", () => {
        render(
            <Stepper active={1}>
                <Step label="Step 1" />
                <Step label="Step 2" />
                <Step label="Step 3" />
            </Stepper>,
        )

        expect(screen.getByText("Step 1")).toBeInTheDocument()
        expect(screen.getByText("Step 2")).toBeInTheDocument()
        expect(screen.getByText("Step 3")).toBeInTheDocument()
    })

    it("renders in vertical orientation", () => {
        render(
            <Stepper active={1} orientation="vertical">
                <Step label="Step 1" />
                <Step label="Step 2" />
            </Stepper>,
        )

        const stepper = screen.getByRole("group")
        expect(stepper).toHaveAttribute("data-orientation", "vertical")
    })

    it("shows custom icon", () => {
        render(
            <Stepper active={0}>
                <Step label="Step 1" icon={<i className="fa-regular fa-paperclip" />} />
            </Stepper>,
        )

        expect(screen.getByRole("group").querySelector(".fa-paperclip")).toBeInTheDocument()
    })
})
