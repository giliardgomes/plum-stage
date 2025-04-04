import { render } from "@test-utils"
import { useEffect } from "react"
import { usePageTitle } from "./usePageTitle"

describe("Page Title sets title", () => {
    it("Sets the page title correctly", () => {
        const TitleComponent = ({ title }: { title: string }) => {
            const { setPageTitle } = usePageTitle(title)
            useEffect(() => {
                setPageTitle(`Updated ${title}`)
            }, [])
            return <p>Some Content</p>
        }
        render(<TitleComponent title="Test Title" />)
        expect(document.getElementsByTagName("title")[0]?.innerHTML).toBe("Updated Test Title - Quorum")

        render(<TitleComponent title="Second Title" />)
        expect(document.getElementsByTagName("title")[0]?.innerHTML).toBe("Updated Second Title - Quorum")
    })
})
