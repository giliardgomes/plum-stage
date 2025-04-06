import React from "react"
import ReactDOM from "react-dom/client"
import { LandingPage } from "./LandingPage"
import { PlumProvider } from "../lib/main"
import "../lib/components/Button/Button.module.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <PlumProvider>
            <LandingPage />
        </PlumProvider>
    </React.StrictMode>,
)
