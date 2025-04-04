import { useEffect, useState } from "react"
import { useForwardedRef } from "@/hooks/useForwardedRef"

/** useTruncated
 * Hook to determine if a component has truncated its text
 * Attach the ref this hook returns to the element to measure
 * Returns:
 * [
    - ref: ref to be attached to a component to measure the truncation state of via (<Comp ref={ref} />
    - isTruncated: bool holding whether or not the element is truncated
 * ]
 */
export const useTruncated = <RefType extends HTMLElement >(existingRef?: React.ForwardedRef<RefType>) => {
    const ref = useForwardedRef<RefType>(existingRef)
    const [isTruncated, updateIsTruncated] = useState<boolean>(false)
    useEffect(() => {
        if (ref.current) {
            const offsetWidth = ref.current.offsetWidth
            const scrollWidth = ref.current.scrollWidth

            const scrollHeight = ref.current.scrollHeight
            const clientHeight = ref.current.clientHeight
            updateIsTruncated(
                // true if using normal css / single line truncation
                (offsetWidth < scrollWidth)

                // true if using webkit multi-line truncation
                || (clientHeight + 1 < scrollHeight),
                // The +1 here is used to fight a firefox bug where
                // the scroll height would change by 1 pixel between renders when
                // experiencing no text trunaction, possibly due to implementation
                // of -webkit-line-clamp or similar
            )
        }
    })
    return { ref, isTruncated }
}
