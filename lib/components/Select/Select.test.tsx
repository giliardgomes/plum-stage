import { useState } from "react"
import axe from "axe-core"

import { render, userEvent } from "@test-utils"
import { itSupportsMod, itSupportsOthers, itSupportsRef } from "@test-utils/helpers"

import { Select } from "./index"
import type { SelectProps } from "./index"

const defaultProps: SelectProps = {
    data: [
        { label: "Apple", value: "Apple" },
        { label: "Banana", value: "Banana" },
        { label: "Cherries", value: "Cherry" },
        "Blueberry",
        "Strawberry",
        "Melon",
    ],
    label: "Favorite Fruit",
    description: "Select your favorite fruit from the list",
    placeholder: "Select a fruit",
}

describe("Select", () => {
    it("renders without a11y violations", async () => {
        const { container } = render(<Select {...defaultProps} />)
        const results = await axe.run(container)
        expect(results.violations).toEqual([])
    })

    itSupportsOthers<SelectProps>({ component: Select, props: defaultProps })
    itSupportsRef<SelectProps>({ component: Select, props: defaultProps, refType: HTMLButtonElement })
    itSupportsMod<SelectProps>({ component: Select, props: defaultProps })

    it("should render error instead of description if provided", () => {
        const error = "Error"
        const { queryByText } = render(<Select {...defaultProps} error={error} />)

        expect(queryByText(error)).toBeInTheDocument()
        expect(queryByText(defaultProps.description!)).not.toBeInTheDocument()
    })

    it("should render all passed in options", async () => {
        const { getByRole, queryAllByRole } = render(<Select {...defaultProps} />)

        await userEvent.click(getByRole("button"))

        const options = queryAllByRole("option")
        expect(options).toHaveLength(defaultProps.data!.length)
    })

    it("supports uncontrolled state", async () => {
        const { getByRole } = render(<Select {...defaultProps} />)

        await userEvent.click(getByRole("button"))
        await userEvent.click(getByRole("option", { name: "Melon" }))

        expect(getByRole("button")).toHaveTextContent("Melon")
    })

    it("allows deselecting option", async () => {
        const { getByRole } = render(<Select {...defaultProps} defaultValue="Melon" />)

        await userEvent.click(getByRole("button"))
        await userEvent.click(getByRole("option", { name: "Melon" }))

        expect(getByRole("button")).toHaveTextContent(defaultProps.placeholder!)
    })

    it("does not allow to deselect option if allowDeselect is false", async () => {
        const { getByRole } = render(<Select {...defaultProps} defaultValue="Melon" allowDeselect={false} />)

        await userEvent.click(getByRole("button"))
        await userEvent.click(getByRole("option", { name: "Melon" }))

        expect(getByRole("button")).toHaveTextContent("Melon")
    })

    it("supports controlled state", async () => {
        const spy = vi.fn()

        const { getByRole } = render(<Select {...defaultProps} value="Banana" onChange={spy} />)

        expect(getByRole("button")).toHaveTextContent("Banana")

        await userEvent.click(getByRole("button"))
        await userEvent.click(getByRole("option", { name: "Cherries" }))

        expect(getByRole("button")).toHaveTextContent("Banana")
        expect(spy).toHaveBeenCalledWith("Cherry", { label: "Cherries", value: "Cherry" })
    })

    it("opens/closes dropdown on input click", async () => {
        const { getByRole, queryByRole } = render(<Select {...defaultProps} />)

        expect(queryByRole("listbox")).toBe(null)

        await userEvent.click(getByRole("button"))

        expect(getByRole("listbox")).toBeVisible()

        await userEvent.click(getByRole("button"))

        expect(queryByRole("listbox")).toBe(null)
    })

    it("allows selecting multiple Selects with react testing library", async () => {
        const { getByRole, queryByRole } = render(
            <>
                <Select label="First" data={["first-1", "first-2"]} />
                <Select label="Second" data={["second-1", "second-2"]} />
            </>,
        )

        await userEvent.click(getByRole("button", { name: "First" }))

        expect(queryByRole("listbox", { name: "First" })).toBeVisible()

        await userEvent.click(getByRole("button", { name: "Second" }))

        expect(queryByRole("listbox", { name: "Second" })).toBeVisible()
    })

    it("supports dynamically changing data", async () => {
        const Wrapper = () => {
            const [data, setData] = useState([{ value: "1", label: "initial-label" }])
            return (
                <>
                    <Select label="First" data={data} value="1" />
                    <button
                        aria-label="Set Data"
                        type="button"
                        onClick={() => setData([{ value: "1", label: "new-label" }])}
                    >
                        Set Data
                    </button>
                </>
            )
        }

        const { getByRole } = render(<Wrapper />)

        expect(getByRole("button", { name: "First" })).toHaveTextContent("initial-label")

        await userEvent.click(getByRole("button", { name: "Set Data" }))

        expect(getByRole("button", { name: "First" })).toHaveTextContent("new-label")
    })
})
