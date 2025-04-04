export const escapeRegExp = (string: string) => {
    const reRegExpChar = /[\\^$.*+?()[\]{}|]/g
    const reHasRegExpChar = RegExp(reRegExpChar.source)

    return (
        (string && reHasRegExpChar.test(string))
            ? string.replace(reRegExpChar, "\\$&")
            : string
    )
}
