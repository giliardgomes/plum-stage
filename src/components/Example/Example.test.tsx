import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import "@testing-library/jest-dom"

import { Example } from "./Example"

test("does something", async () => {
    // ARRANGE
    render(<Example />)

    // ACT
    await userEvent.click(screen.getByText("Example Button"))

    // ASSERT
    expect(screen.getByRole("button")).toBeDefined()
})
