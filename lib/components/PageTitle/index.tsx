import { forwardRef, useEffect, useState } from "react"
import { Title } from "@mantine/core"

import { usePageTitle } from "@/components/PageTitle/hooks/usePageTitle"
import { useTruncated } from "@/components/PageTitle/hooks/useTruncated"

import classes from "@/components/PageTitle/PageTitle.module.css"

export interface PageTitleProps {
    // text to render in alternate color before the title
    accentedText?: string

    // The text to set as the overall Page title for the browser/tab, if different from the displayed `children`
    browserTitle?: string

    children: string

    dataPlumId?: string

    // URL or Image Element to display before the title
    image?: string | (() => JSX.Element)

    isTruncatedCallback?: (isTruncated: boolean) => void
}

export const PageTitle = forwardRef<HTMLHeadingElement, PageTitleProps>(({
    accentedText,
    browserTitle,
    children,
    dataPlumId,
    image,
    isTruncatedCallback,
    ...otherHeadingProps
}: PageTitleProps, ref) => {
    const { pageTitle, setPageTitle } = usePageTitle(children)

    useEffect(() => {
        setPageTitle(browserTitle || `${accentedText ? `${accentedText} ` : ""}${children}`)
    }, [children, pageTitle, setPageTitle])

    const [storedIsTruncated, updateStoredIsTruncated] = useState<boolean>(false)
    const { ref: truncationRef, isTruncated } = useTruncated<HTMLHeadingElement>(ref)

    if (isTruncated !== storedIsTruncated) {
        // call the truncation callback only when our truncation state changes
        isTruncatedCallback && isTruncatedCallback(isTruncated)

        // store the new truncation state
        updateStoredIsTruncated(isTruncated)
    }

    return (
        <div
            className={classes.pageTitle}
            data-has-image={Boolean(image)}
        >
            {image && (
                <div className={classes.imageContainer}>
                    { typeof image === "string" ? <img alt="" src={image} /> : image() }
                </div>
            )}
            <Title
                className={classes.titleText}
                data-plum-id={dataPlumId}
                id="page-title"
                order={1}
                ref={truncationRef}
                {...otherHeadingProps}
            >
                {accentedText && <span className={classes.titlePrefix}>{accentedText}</span>}
                {children}
            </Title>
        </div>
    )
})
