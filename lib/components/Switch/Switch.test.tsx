import { render, screen, fireEvent } from "@testing-library/react"
import { vi } from "vitest"

import { Switch } from "."
import type { SwitchProps } from "."

describe("Switch", () => {
    const defaultProps: SwitchProps = {
        label: "Test Switch",
    }

    test("renders with label", () => {
        render(<Switch {...defaultProps} />)
        expect(screen.getByText(defaultProps.label as string)).toBeInTheDocument()
    })

    test("calls onChange with the correct value", () => {
        const onChange = vi.fn()
        render(<Switch {...defaultProps} checked={false} onChange={onChange} />)
        const input = screen.getByRole("switch")
        fireEvent.click(input)
        expect(onChange).toHaveBeenCalled()
    })

    test("displays error message", () => {
        const errorMessage = "This is an error"
        render(<Switch {...defaultProps} error={errorMessage} />)
        expect(screen.getByText(errorMessage)).toBeInTheDocument()
    })

    test("can be disabled", () => {
        render(<Switch {...defaultProps} disabled />)
        expect(screen.getByRole("switch")).toBeDisabled()
    })
})
