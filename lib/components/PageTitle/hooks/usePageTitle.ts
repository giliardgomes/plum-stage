import { useEffect, useState } from "react"

/*
 *  Sets the document <title> element to the provided text string
 */
export const usePageTitle = (startingTitle: string) => {
    const [currentTitle, setCurrentTitle] = useState("Quorum")

    const setPageTitle = (title: string) => {
        setCurrentTitle(title)
        document.title = `${title} - Quorum`
    }

    useEffect(() => {
        setPageTitle(startingTitle)
        return () => {
            // Reset the title when the component unmounts
            document.title = "Quorum"
        }
    }, [startingTitle])

    return { pageTitle: currentTitle, setPageTitle }
}
