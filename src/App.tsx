import { MantineProvider, Stack } from "@mantine/core"

import "@mantine/core/styles.css"
import "./App.css"

import { plumTheme } from "./theme"
import { Button, Tabs, TextField, Tile } from "../lib/main"
import { CircleInfoFarFAIcon, TriangleExclamationFarFAIcon } from "../lib/components/Icons"

function App() {
    return (
        <MantineProvider theme={plumTheme}>
            <h1>Plum Sandbox</h1>
            <Stack>
                <Button variant="secondary" onClick={() => console.log("Hello")}>Button</Button>
                <TextField label="Text field" />
                <Tile>
                    Tile
                </Tile>
                <Tabs defaultValue="video">
                    <Tabs.List>
                        <Tabs.Tab value="video" leftSection={<TriangleExclamationFarFAIcon />}>
                            Video
                        </Tabs.Tab>
                        <Tabs.Tab value="image" leftSection={<CircleInfoFarFAIcon />}>
                            Image
                        </Tabs.Tab>
                        <Tabs.Tab value="audio" leftSection={<CircleInfoFarFAIcon />}>
                            Audio
                        </Tabs.Tab>
                    </Tabs.List>
                    <Tabs.Panel value="video">
                        Video tab content
                    </Tabs.Panel>
                    <Tabs.Panel value="image">
                        Image tab content
                    </Tabs.Panel>
                    <Tabs.Panel value="audio">
                        Audio tab content
                    </Tabs.Panel>
                </Tabs>
            </Stack>
        </MantineProvider>
    )
}

export default App
