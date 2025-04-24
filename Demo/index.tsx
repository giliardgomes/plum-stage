import React from "react"
import ReactDOM from "react-dom/client"
import { HashRouter, Routes, Route } from "react-router-dom"
import { LandingPage } from "./LandingPage"
import { VideoHub } from "./VideoHub"
import { PlumProvider } from "../lib/main"
import { plumTheme, plumVariables } from "../src/theme"

// Import Mantine core styles first
import "@mantine/core/styles.css"

// Import Plum component styles AFTER Mantine core styles
import "../lib/components/Button/Button.module.css"
import "../lib/components/Switch/Switch.module.css"
import "../lib/components/TextField/TextField.module.css"
import "../lib/components/Alert/Alert.module.css"
import "../lib/components/Tabs/Tabs.module.css"
import "../lib/components/Tile/Tile.module.css"
import "../lib/components/Label/Label.module.css"
import "../lib/components/Avatar/Avatar.module.css"
import "../lib/components/Notification/Notification.module.css"
import "../lib/components/SelectableTag/SelectableTag.module.css"
import "../lib/components/SegmentedControl/SegmentedControl.module.css"
import "../lib/components/DatePicker/DatePicker.module.css"

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
    </React.StrictMode>,
)
