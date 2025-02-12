import axe from "axe-core"

import { render, userEvent } from "@test-utils"
import { itSupportsMod, itSupportsOthers, itSupportsRef } from "@test-utils/helpers"

import { Radio } from "./index"
import type { RadioGroupProps, RadioProps } from "./index"

const defaultGroupProps: RadioGroupProps = {
    children: (
        <>
            <Radio label="Apple" value="A" />
            <Radio label="Banana" value="B" />
        </>
    ),
    defaultValue: "A",
    label: "Favorite Fruit",
    onChange: () => {},
}

describe("RadioWithGroup", () => {
    it("Allows clearing with click", async () => {
        const spy = vi.fn()
        const { getByLabelText } = render(<Radio.Group {...defaultGroupProps} clearable={true} value="A" onChange={spy} />)
        await userEvent.click(getByLabelText("Apple"))
        expect(spy).toHaveBeenCalledWith(null)
    })
    it("Allows clearing and setting with Space bar", async () => {
        const spy = vi.fn()
        const { getByLabelText } = render(<Radio.Group {...defaultGroupProps} clearable={true} value="A" onChange={spy} />)
        const appleRadio = getByLabelText("Apple")
        await appleRadio.focus()
        await userEvent.keyboard(" ")
        expect(spy).toHaveBeenCalledWith(null)
        expect(appleRadio).not.toBeChecked()
        spy.mockClear()
        await userEvent.keyboard(" ")
        expect(spy).toHaveBeenCalledWith("A")
        expect(appleRadio).toBeChecked()
    })

    it("Allows changing with arrow keys", async () => {
        const spy = vi.fn()
        const { getByLabelText } = render(<Radio.Group {...defaultGroupProps} clearable={true} onChange={spy} />)
        const appleRadio = getByLabelText("Apple")
        const bananaRadio = getByLabelText("Banana")
        await appleRadio.focus()
        await userEvent.keyboard("{ArrowDown}")
        expect(spy).toHaveBeenCalledWith("B")
        expect(appleRadio).not.toBeChecked()
        expect(bananaRadio).toHaveFocus()
        expect(bananaRadio).toBeChecked()
    })
})

describe("RadioGroup", () => {
    it("renders without a11y violations", async () => {
        const { container } = render(<Radio.Group {...defaultGroupProps} />)
        const results = await axe.run(container)
        expect(results.violations).toEqual([])
    })

    itSupportsOthers<RadioGroupProps>({ component: Radio.Group, props: defaultGroupProps })
    itSupportsRef<RadioGroupProps>({ component: Radio.Group, props: defaultGroupProps, refType: HTMLDivElement })
    itSupportsMod<RadioGroupProps>({ component: Radio.Group, props: defaultGroupProps })

    it("should render error if provided", () => {
        const error = "Error"
        const { queryByText } = render(<Radio.Group {...defaultGroupProps} error={error} />)

        expect(queryByText(error)).toBeInTheDocument()
    })

    it("should render all passed in radio items", async () => {
        const { queryAllByRole } = render(<Radio.Group {...defaultGroupProps} />)

        const options = queryAllByRole("radio")
        expect(options).toHaveLength(2)
    })

    it("supports uncontrolled state", async () => {
        const { getByLabelText } = render(<Radio.Group {...defaultGroupProps} />)

        await userEvent.click(getByLabelText("Apple"))
        await userEvent.click(getByLabelText("Banana"))
    })

    it("supports controlled state", async () => {
        const spy = vi.fn()

        const { getByLabelText } = render(<Radio.Group {...defaultGroupProps} value="B" onChange={spy} />)

        await userEvent.click(getByLabelText("Apple"))
        await userEvent.click(getByLabelText("Banana"))

        expect(spy).toHaveBeenCalledWith("A")
    })
})

const defaultRadioProps: RadioProps = {
    label: "Apple",
    value: "A",
}

describe("Radio", () => {
    it("renders without a11y violations", async () => {
        const { container } = render(<Radio {...defaultRadioProps} />)
        const results = await axe.run(container)
        expect(results.violations).toEqual([])
    })

    itSupportsOthers<RadioProps>({ component: Radio, props: defaultRadioProps })
    itSupportsRef<RadioProps>({ component: Radio, props: defaultRadioProps, refType: HTMLInputElement })
    itSupportsMod<RadioProps>({ component: Radio, props: defaultRadioProps })
})
