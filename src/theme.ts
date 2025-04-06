import {
    createTheme,
    MantineThemeOverride,
    CSSVariablesResolver,
    MantineColorsTuple,
    rem,
} from "@mantine/core"

const quorumViolet: MantineColorsTuple = [
    "#FBFAFE",
    "#EBEAFD",
    "#D9D8FC",
    "#BDB8FA",
    "#9B8FF6",
    "#7259EF",
    "#6149D6",
    "#503ABD",
    "#3E2AA3",
    "#2F1980",
]

export const plumTheme: MantineThemeOverride = createTheme({
    /** Put your mantine theme override here */
    colors: {
        violet: [
            "#FBFAFE",
            "#EBEAFD",
            "#D9D8FC",
            "#BDB8FA",
            "#9B8FF6",
            "#7259EF",
            "#6149D6",
            "#503ABD",
            "#3E2AA3",
            "#2F1980",
        ],
        blue: [
            "#F5FAFF",
            "#E5F1FE",
            "#CDE4FD",
            "#CDE4FD",
            "#7EB9F8",
            "#4F96F4",
            "#417DD1",
            "#3666AE",
            "#2D528D",
            "#1F3A65",
        ],
        brass: [
            "#F7F7EF",
            "#E8E2D2",
            "#D3C8A7",
            "#BDAE80",
            "#BEA552",
            "#A88F4D",
            "#967D38",
            "#826D45",
            "#725F2D",
            "#514420",
        ],
        primary: quorumViolet,
        secondary: [
            "#F0E5F1",
            "#DBBFDF",
            "#C496CA",
            "#AB6EB4",
            "#8E57AB",
            "#8A3B93",
            "#7E378E",
            "#6E3085",
            "#5F2B7B",
            "#32004E",
        ],
        green: [
            "#F3FAF4",
            "#E3F5E6",
            "#C7EACC",
            "#A3D9AC",
            "#6CCF7D",
            "#31B457",
            "#249946",
            "#1C7A38",
            "#165F2B",
            "#0E3F1E",
        ],
        orange: [
            "#FFF8F3",
            "#FFEDE0",
            "#FFD6B8",
            "#FFBF8F",
            "#FF9E5D",
            "#F86816",
            "#D56226",
            "#B34E1E",
            "#8C3E17",
            "#632A0E",
        ],
        red: [
            "#FFF5F5",
            "#FEE7E8",
            "#FCC6C8",
            "#F89C9E",
            "#F46A6C",
            "#E04345",
            "#C03539",
            "#A02B2E",
            "#802223",
            "#802223",
        ],
        gray: [
            "#FAFBFC",
            "#F1F3F5",
            "#E9ECEF",
            "#DEE2E6",
            "#CED4DA",
            "#ADB5BD",
            "#868E96",
            "#495057",
            "#343A40",
            "#212529",
        ],
    },
    headings: {
        fontWeight: "500",
    },
    spacing: {
        xxs: "0.25rem",
        xs: "0.5rem",
        sm: "0.75rem",
        md: "1rem",
        lg: "1.25rem",
        xl: "1.5rem",
        xxl: "2rem",
    },
    fontFamily: "Roboto, Arial, sans-serif",
    fontSizes: {
        xs: "0.75rem",
        sm: "0.875rem",
        md: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
    },
    activeClassName: "",
    defaultRadius: "0.25rem",
    primaryColor: "violet",
})

export const plumVariables: CSSVariablesResolver = (theme) => ({

    variables: {
        // TYPOGRAPHY - see https://plum.quorum.us/4a128e208/p/642274-typography/b/114c78

        // TYPOGRAPHY - HEADINGS
        "--plum-font-size-heading-xs": rem("18px"),
        "--plum-line-height-heading-xs": rem("24px"),
        "--plum-letter-spacing-heading-xs": rem("0.3px"),

        // TYPOGRAPHY - PARAGRAPH

        "--plum-font-size-paragraph-md": rem("14px"),
        "--plum-line-height-paragraph-md": rem("20px"),
        "--plum-letter-spacing-paragraph-md": rem("0.3px"),
    },
    light: {
        "--mantine-color-error": theme.colors.red[7],
    },
    dark: {
    },
})
