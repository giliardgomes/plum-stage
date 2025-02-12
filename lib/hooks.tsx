import { useEffect, useRef } from "react"

/** https://stackoverflow.com/a/73046577 */
export function useForwardedRef<T>(ref: React.ForwardedRef<T>) {
    const innerRef = useRef<T>(null)

    useEffect(() => {
        if (!ref) return
        if (typeof ref === "function") {
            ref(innerRef.current)
        } else {
            ref.current = innerRef.current
        }
    })

    return innerRef
}
