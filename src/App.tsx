import { MantineProvider, Stack } from "@mantine/core"

import "@mantine/core/styles.css"
import "./App.css"

import { plumTheme } from "./theme"
import { Button, TextField, Tile } from "../lib/main"

function App() {
    return (
        <MantineProvider theme={plumTheme}>
            <h1>Plum Components</h1>
            <Stack>
                <Button variant="secondary" onClick={() => console.log("Hello")}>Button</Button>
                <TextField label="Text field" />
                <Tile>
                    Tile
                </Tile>
            </Stack>
        </MantineProvider>
    )
}

export default App
