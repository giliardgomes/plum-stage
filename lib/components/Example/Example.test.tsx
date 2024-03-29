import { render, screen, userEvent } from "../../../src/test-utils"

import { Example } from "./Example"

test("does something", async () => {
    // ARRANGE
    render(<Example />)

    // ACT
    await userEvent.click(screen.getByText("Example Button"))

    // ASSERT
    expect(screen.getByRole("button")).toBeDefined()
})
