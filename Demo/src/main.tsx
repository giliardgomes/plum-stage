import React from "react"
import ReactDOM from "react-dom/client"
import { HashRouter, Routes, Route } from "react-router-dom"
import { LandingPage } from "../LandingPage"
import { VideoHub } from "../VideoHub"
import { PlumProvider } from "../../lib/main"
import { plumTheme, plumVariables } from "../../src/theme"

// Keep only the essential styles
import "@mantine/core/styles.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <PlumProvider theme={plumTheme} cssVariablesResolver={plumVariables}>
            <HashRouter>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/VideoHub" element={<VideoHub />} />
                </Routes>
            </HashRouter>
        </PlumProvider>
    </React.StrictMode>
)
