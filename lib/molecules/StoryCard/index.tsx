import { Stack, Text, Group, Flex } from "@mantine/core"
import {
    PlayFarFAIcon,
    TwitterFarFAIcon,
    FacebookFarFAIcon,
    LinkedInFarFAIcon,
    InstagramFarFAIcon,
    YouTubeFarFAIcon,
    CalendarFarFAIcon,
    FavoriteFarFAIcon,
    UserCircleFarFAIcon,
} from "@/components/Icons"
import { clsx } from "clsx"
import classes from "./StoryCard.module.css"

export interface StoryCardProps {
    /** Story thumbnail URL */
    thumbnail?: string
    /** Story description */
    description: string
    /** Author name */
    author: string
    /** Story duration in seconds */
    duration?: number
    /** Story platform */
    platform?: string
    /** Card variant */
    variant?: "regular" | "highlight" | "text"
    /** Click handler */
    onClick?: () => void
    /** Date posted */
    datePosted?: string
    /** Like count */
    likeCount?: number
}

const SOCIAL_MEDIA_CONFIG = {
    Twitter: {
        icon: TwitterFarFAIcon,
        color: "#1DA1F2",
    },
    Facebook: {
        icon: FacebookFarFAIcon,
        color: "#4267B2",
    },
    LinkedIn: {
        icon: LinkedInFarFAIcon,
        color: "#0A66C2",
    },
    Instagram: {
        icon: InstagramFarFAIcon,
        color: "#E4405F",
    },
    YouTube: {
        icon: YouTubeFarFAIcon,
        color: "#FF0000",
    },
    VideoHub: {
        icon: PlayFarFAIcon,
        color: "#417DD1", // Using brand color from the theme (brandColors[6])
    },
}

export const StoryCard = ({
    thumbnail,
    description,
    author,
    duration,
    platform,
    variant = "regular",
    onClick,
    datePosted,
    likeCount,
}: StoryCardProps) => {
    const formatDuration = (seconds: number) => {
        const minutes = Math.floor(seconds / 60)
        const remainingSeconds = seconds % 60
        return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`
    }

    const socialConfig = platform && SOCIAL_MEDIA_CONFIG[platform as keyof typeof SOCIAL_MEDIA_CONFIG]
    const SocialIcon = socialConfig && socialConfig.icon

    const content = (
        <Stack gap={0}>
            <Text size="sm" c={variant === "highlight" ? "white" : "gray.9"} className={classes.description}>{description}</Text>
            <Group justify="space-between">
                <Stack gap="xs">
                    {variant === "highlight" && (
                        <Flex gap="xl" align="center" className={classes.highlightCounts}>
                            <Flex gap="xs" align="center">
                                <Text c={variant === "highlight" ? "white" : "gray.5"} lh="1rem" h="1rem">
                                    <UserCircleFarFAIcon />
                                </Text>
                                <Text size="md" c={variant === "highlight" ? "white" : "gray.7"} lh="1rem" h="1rem">{author}</Text>
                            </Flex>
                            <Flex gap="xs" align="center">
                                <Text c={variant === "highlight" ? "white" : "gray.5"} lh="1rem" h="1rem">
                                    <FavoriteFarFAIcon />
                                </Text>
                                <Text size="md" c={variant === "highlight" ? "white" : "gray.7"} lh="1rem" h="1rem">
                                    {likeCount}
                                    {" "}
                                    324 likes
                                </Text>
                            </Flex>
                        </Flex>
                    )}
                    {datePosted && (
                        <Flex gap="xs" align="center">
                            <Text c={variant === "highlight" ? "white" : "gray.5"}>
                                <CalendarFarFAIcon size={12} />
                            </Text>
                            <Text size="xs" c={variant === "highlight" ? "white" : "gray.7"}>{datePosted}</Text>
                        </Flex>
                    )}
                    {/* Count bottom */}
                    {(variant === "regular" || variant === "text") && likeCount !== undefined && (
                        <Flex gap="lg">
                            <Flex gap="xs" align="center">
                                <Text c="gray.7" lh="0.75rem">
                                    <UserCircleFarFAIcon size={12} />
                                </Text>
                                <Text size="xs" c="gray.7" styles={{ root: { lineHeight: "normal", textOverflow: "ellipsis", maxWidth: "160px", overflow: "hidden", whiteSpace: "nowrap" } }}>
                                    {author}
                                </Text>
                            </Flex>
                            <Flex gap="xs" align="center">
                                <Text c="gray.7" lh="0.75rem">
                                    <FavoriteFarFAIcon size={12} />
                                </Text>
                                <Text size="xs" c="gray.7">{likeCount}</Text>
                            </Flex>
                        </Flex>
                    )}
                </Stack>
                {platform && (
                    <Group gap="xxs" mt={0} className={classes.platform}>
                        {SocialIcon && <SocialIcon size={14} style={{ color: socialConfig.color }} />}
                    </Group>
                )}
            </Group>
        </Stack>
    )

    if (variant === "text") {
        return (
            <div
                className={clsx(classes.storyCard, classes.storyCardText)}
                onClick={onClick}
                role="button"
                tabIndex={0}
            >
                <div className={classes.contentRegular}>
                    <Text size="xl" fw={500} c="gray.9" className={classes.description}>{description}</Text>
                    <Group justify="space-between" mt="auto">
                        <Flex gap="lg">
                            <Flex gap="xs" align="center">
                                <Text c="gray.7" lh="0.75rem">
                                    <UserCircleFarFAIcon size={12} />
                                </Text>
                                <Text size="xs" c="gray.7">{author}</Text>
                            </Flex>
                            <Flex gap="xs" align="center">
                                <Text c="gray.7" lh="0.75rem">
                                    <FavoriteFarFAIcon size={12} />
                                </Text>
                                <Text size="xs" c="gray.7">{likeCount}</Text>
                            </Flex>
                        </Flex>
                        {platform && (
                            <Group gap="xxs" mt={0} className={classes.platform}>
                                {SocialIcon && <SocialIcon size={14} style={{ color: socialConfig.color }} />}
                            </Group>
                        )}
                    </Group>
                </div>
            </div>
        )
    }

    return (
        <div
            className={clsx(
                classes.storyCard,
                variant === "regular" ? classes.storyCardRegular : classes.storyCardHighlight,
            )}
            onClick={onClick}
            role="button"
            tabIndex={0}
        >
            <div className={clsx(
                classes.thumbnailWrapper,
                variant === "regular" ? classes.thumbnailWrapperRegular : classes.thumbnailWrapperHighlight,
            )}
            >
                <img
                    src={thumbnail}
                    alt={description}
                    className={classes.thumbnail}
                />
                <div className={classes.overlay}>
                    <PlayFarFAIcon filled={true} size={48} />
                </div>
                {variant === "highlight" && (
                    <div className={classes.contentHighlight}>
                        {content}
                    </div>
                )}
            </div>
            {variant === "regular" && (
                <div className={classes.contentRegular}>
                    {content}
                </div>
            )}
        </div>
    )
}
