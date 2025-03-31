import type { Meta, StoryObj } from "@storybook/react"
import { PageTitle, PageTitleProps } from "@/components/PageTitle"

const meta: Meta<typeof PageTitle> = {
    component: PageTitle,
    parameters: {
        docs: {
            description: {
                component: "Documentation: Not Available",
            },
        },
    },
    tags: ["autodocs"],
    argTypes: {
        accentedText: { control: "text" },
        image: { control: "text" },
    },
}

export default meta

type Story = StoryObj<typeof PageTitle>

export const Default: Story = {
    args: {
        children: "Page Title",
        accentedText: "",
    },
    render: (props: PageTitleProps) => (
        <PageTitle {...props} />
    ),
}

export const WithPrefixAndImage: Story = {
    args: {
        accentedText: "Accented",
        image: "https://quorum-media.s3.amazonaws.com/media/uploaded_files/2024-07-19/092d983064065e6bf760496b21b6bb2e/VGHyiHA38ClubV48WLjk_Screenshot2024-07-19at10.21.58.png",
    },
    render: (props: PageTitleProps) => (
        <PageTitle {...props}>
            Title Text Text
        </PageTitle>
    ),
}

export const ReallyLongTruncatedTitle: Story = {
    render: (props: PageTitleProps) => (
        <div style={{ maxWidth: "200px" }}>
            <PageTitle {...props}>
                This truncated title is a really long title that should be truncated
            </PageTitle>
        </div>
    ),
}

export const ComposedTitleWithImageComponent: Story = {
    render: () => {
        const TitleImage = () => (
            <img
                src="https://quorum-media.s3.amazonaws.com/media/uploaded_files/2024-07-19/092d983064065e6bf760496b21b6bb2e/VGHyiHA38ClubV48WLjk_Screenshot2024-07-19at10.21.58.png"
                alt="Quorum Logo"
            />
        )
        return (
            <div style={{ maxWidth: "300px" }}>
                <PageTitle image={TitleImage}>
                    This truncated title is a really long title that should be truncated
                </PageTitle>
            </div>
        )
    },
}
