import { render } from "@test-utils"
import {
    itSupportsClassName,
    itSupportsOthers,
    itSupportsRef,
} from "@test-utils/helpers"

import { Checkbox } from "@/components/Checkbox"
import type { CheckboxProps } from "@/components/Checkbox"

const defaultProps: CheckboxProps = {
    label: "I accept the terms and conditions",
}

describe("Checkbox", () => {
    itSupportsClassName<CheckboxProps>({ component: Checkbox, props: defaultProps })
    itSupportsOthers<CheckboxProps>({ component: Checkbox, props: defaultProps })
    itSupportsRef<CheckboxProps>({ component: Checkbox, props: defaultProps, refType: HTMLInputElement })

    it("renders correctly", () => {
        const screen = render(
            <Checkbox {...defaultProps} />,
        )

        expect(screen.getByRole("checkbox")).toBeInTheDocument()
        expect(screen.getByText("I accept the terms and conditions")).toBeInTheDocument()
    })
})
