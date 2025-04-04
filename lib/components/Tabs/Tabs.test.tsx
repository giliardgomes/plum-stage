import axe from "axe-core"
import { render } from "@test-utils"

import { Tabs } from "@/components/Tabs"

describe("Tabs", () => {
    it("renders without a11y violations", async () => {
        const { container } = render(
            <Tabs>
                <Tabs.List>
                    <Tabs.Tab value="gallery" leftSection="♺">
                        Gallery
                    </Tabs.Tab>
                    <Tabs.Tab value="messages" leftSection="♺">
                        Messages
                    </Tabs.Tab>
                    <Tabs.Tab disabled value="addresses" leftSection="♺">
                        Addresses
                    </Tabs.Tab>
                    <Tabs.Tab value="settings">
                        Settings Settings Settings Settings
                    </Tabs.Tab>
                </Tabs.List>
                <Tabs.Panel value="gallery">
                    Gallery tab content
                </Tabs.Panel>
                <Tabs.Panel value="messages">
                    Messages tab content
                </Tabs.Panel>
                <Tabs.Panel value="addresses">
                    Addresses tab content
                </Tabs.Panel>
                <Tabs.Panel value="settings">
                    Settings tab content
                </Tabs.Panel>
            </Tabs>,
        )
        const results = await axe.run(container)
        expect(results.violations).toEqual([])
    })
})
