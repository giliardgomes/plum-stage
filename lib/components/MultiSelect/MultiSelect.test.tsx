import { useState } from "react"
import axe from "axe-core"

import { render, userEvent } from "@test-utils"
import { itSupportsMod, itSupportsOthers } from "@test-utils/helpers"

import { MultiSelect } from "./index"
import type { MultiSelectProps } from "./index"

const defaultProps: MultiSelectProps = {
    data: [
        { label: "Apple", value: "Apple" },
        { label: "Banana", value: "Banana" },
        { label: "Cherries", value: "Cherry" },
        "Blueberry",
        "Strawberry",
        "Melon",
    ],
    label: "Favorite Fruit",
    description: "Select your favorite fruits from the list",
    placeholder: "Select fruit",
}

describe("MultiSelect", () => {
    it("renders without a11y violations", async () => {
        const { container } = render(<MultiSelect {...defaultProps} />)
        const results = await axe.run(container)
        expect(results.violations).toEqual([])
    })

    itSupportsOthers<MultiSelectProps>({ component: MultiSelect, props: defaultProps })
    itSupportsMod<MultiSelectProps>({ component: MultiSelect, props: defaultProps })

    it("should render error instead of description if provided", () => {
        const error = "Error"
        const { queryByText } = render(<MultiSelect {...defaultProps} error={error} />)

        expect(queryByText(error)).toBeInTheDocument()
        expect(queryByText(defaultProps.description!)).not.toBeInTheDocument()
    })

    it("should render all passed in options", async () => {
        const { getByRole, queryAllByRole } = render(<MultiSelect {...defaultProps} />)

        await userEvent.click(getByRole("textbox"))

        const options = queryAllByRole("option")
        expect(options).toHaveLength(defaultProps.data!.length)
    })

    it("supports uncontrolled state", async () => {
        const { getByRole } = render(<MultiSelect {...defaultProps} />)

        await userEvent.click(getByRole("textbox"))
        await userEvent.click(getByRole("option", { name: "Melon" }))

        expect(getByRole("group")).toHaveTextContent("Melon")
    })

    it("allows deselecting option", async () => {
        const { getByRole } = render(<MultiSelect {...defaultProps} defaultValue={["Melon"]} />)

        await userEvent.click(getByRole("textbox"))
        await userEvent.click(getByRole("option", { name: "Melon" }))

        expect(getByRole("group")).toHaveTextContent(defaultProps.placeholder!)
    })

    it("supports controlled state", async () => {
        const spy = vi.fn()

        const { getByRole } = render(<MultiSelect {...defaultProps} value={["Banana"]} onChange={spy} />)

        expect(getByRole("group")).toHaveTextContent("Banana")

        await userEvent.click(getByRole("textbox"))
        await userEvent.click(getByRole("option", { name: "Cherries" }))

        expect(getByRole("group")).toHaveTextContent("Banana")

        // The onChange callback should receieve the selected option and the expected new state
        expect(spy).toHaveBeenCalledWith(["Banana", "Cherry"], { label: "Cherries", value: "Cherry" })
    })

    it("opens/closes dropdown on input click", async () => {
        const { getByRole, queryByRole } = render(<MultiSelect {...defaultProps} />)

        expect(queryByRole("listbox")).toBe(null)

        await userEvent.click(getByRole("textbox"))

        expect(getByRole("listbox")).toBeVisible()

        await userEvent.click(getByRole("textbox"))

        expect(queryByRole("listbox")).toBe(null)
    })

    it("allows selecting multiple Selects with react testing library", async () => {
        const { getByRole, queryByRole } = render(
            <>
                <MultiSelect label="First" data={["first-1", "first-2"]} />
                <MultiSelect label="Second" data={["second-1", "second-2"]} />
            </>,
        )

        await userEvent.click(getByRole("textbox", { name: "First" }))

        expect(queryByRole("listbox", { name: "First" })).toBeVisible()

        await userEvent.click(getByRole("textbox", { name: "Second" }))

        expect(queryByRole("listbox", { name: "Second" })).toBeVisible()
    })

    it("supports dynamically changing data", async () => {
        const Wrapper = () => {
            const [data, setData] = useState([{ value: "1", label: "initial-label" }])
            return (
                <>
                    <MultiSelect label="First" data={data} value={["1"]} />
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

        expect(getByRole("group")).toHaveTextContent("initial-label")

        await userEvent.click(getByRole("button", { name: "Set Data" }))

        expect(getByRole("group")).toHaveTextContent("new-label")
    })
})
