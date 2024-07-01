import { useState } from "react"
import { Button, MantineProvider, Stack } from "@mantine/core"

import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "@mantine/core/styles.css"
import "./App.css"

import { plumTheme } from "./theme"
import { TextField, Tile } from "../lib/main"

function App() {
    return (
        <MantineProvider theme={plumTheme}>
            <h1>Plum Components</h1>
            <Stack>
                <Button>Button</Button>
                <TextField label="Text field" />
                <Tile>
                    Tile
                </Tile>
            </Stack>
        </MantineProvider>
    )
}

export default App
