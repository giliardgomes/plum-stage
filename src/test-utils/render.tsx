import { render as testingLibraryRender } from "@testing-library/react"
import { MantineProvider } from "@mantine/core"
// Import your theme object
import { plumVariables, plumTheme } from "../theme"

export function render(ui: React.ReactNode) {
    return testingLibraryRender(<>{ui}</>, {
        wrapper: ({ children }: { children: React.ReactNode }) => (
            <MantineProvider
                theme={plumTheme}
                cssVariablesResolver={plumVariables}
            >
                {children}
            </MantineProvider>
        ),
    })
}
