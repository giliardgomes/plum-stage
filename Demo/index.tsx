import React from "react"
import ReactDOM from "react-dom/client"
import { LandingPage } from "./LandingPage"
import { PlumProvider } from "../lib/main"
import { plumTheme, plumVariables } from "../src/theme"
import "@mantine/core/styles.css"
import "../lib/components/Button/Button.module.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <PlumProvider theme={plumTheme} cssVariablesResolver={plumVariables}>
            <LandingPage />
        </PlumProvider>
    </React.StrictMode>,
)
