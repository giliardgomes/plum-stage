/**
 * Borrowed from @mantine/tests which is MIT licensed, but unfortunately not published to NPM.
 * https://github.com/mantinedev/mantine/tree/master/packages/%40mantine-tests/core/src/shared
 *
 * Using these to test our own components can help us to implement them in a way that provides a similar developer
 * experience to Mantine components.
 */

import React, { createRef, forwardRef } from "react"
import { fireEvent, screen } from "@testing-library/react"

import { render } from "./render"

interface Options<Props = any> {
    component: React.ComponentType<Props>
    props: Props
    selector?: string
    refType?: any
    refProp?: string
}

// eslint-disable-next-line react-refresh/only-export-components
const TestComponent = forwardRef<HTMLElement, React.ComponentPropsWithoutRef<"mark">>(
    (props, ref) => <mark ref={ref} data-child-prop {...props} />,
)

export function itIsPolymorphic<Props>(options: Options<Props>, name = "is polymorphic") {
    const getTarget = (container: HTMLElement): HTMLElement =>
        container.querySelector(options.selector || "*:not(style)")!

    it(`${name}: html element`, () => {
        const { container } = render(
            <options.component component="a" href="#test-link" {...options.props} />,
        )

        const target = getTarget(container)
        expect(target.tagName).toBe("A")
        expect(target.getAttribute("href")).toBe("#test-link")
    })

    it(`${name}: React component`, () => {
        const { container } = render(
            <options.component component={TestComponent} data-parent-prop {...options.props} />,
        )

        const target = getTarget(container)
        expect(target.tagName).toBe("MARK")
        expect(target).toHaveAttribute("data-child-prop")
        expect(target).toHaveAttribute("data-parent-prop")
    })

    it(`${name}: renderRoot`, () => {
        const { container } = render(
            <options.component
                renderRoot={(props: any) => <a href="#test-link" {...props} />}
                {...options.props}
            />,
        )

        const target = getTarget(container)
        expect(target.tagName).toBe("A")
        expect(target.getAttribute("href")).toBe("#test-link")
    })
}

export function itRendersChildren<Props>(options: Options<Props>, name = "renders children") {
    it(name, () => {
        render(<options.component {...options.props}>test-children</options.component>)
        expect(screen.getByText("test-children")).toBeInTheDocument()
    })
}

export function itSupportsClassName<Props>(
    options: Options<Props>,
    name = "supports className prop",
) {
    it(name, () => {
        const { container } = render(
            <options.component {...options.props} className="test-class-name" />,
        )

        expect(container.querySelector(".test-class-name")).toBeInTheDocument()
    })
}

export function itSupportsFocusEvents<Props>(
    options: Options<Props>,
    name = "supports focus events",
) {
    it(name, () => {
        const onFocus = vi.fn()
        const onBlur = vi.fn()

        const { container } = render(
            <options.component {...options.props} onFocus={onFocus} onBlur={onBlur} />,
        )

        fireEvent.focus(container.querySelector(options.selector || "*:not(style)")!)
        expect(onFocus).toHaveBeenCalled()

        fireEvent.blur(container.querySelector(options.selector || "*:not(style)")!)
        expect(onBlur).toHaveBeenCalled()
    })
}

export function itSupportsOthers<Props>(
    options: Options<Props>,
    name = "supports ...others props",
) {
    it(name, () => {
        const { container } = render(<options.component {...options.props} data-test-attribute />)
        expect(container.querySelector("[data-test-attribute]")).toBeInTheDocument()
    })
}

export function itSupportsRef<Props>(options: Options<Props>, name = "supports ref") {
    it(name, () => {
        const ref = createRef<typeof options.refType>()
        render(<options.component {...options.props} {...{ [options.refProp || "ref"]: ref }} />)
        expect(ref.current).toBeInstanceOf(options.refType)
    })
}
