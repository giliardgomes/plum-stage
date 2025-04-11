import { Stack, Text, Group } from "@mantine/core"
import {
    PlayFarFAIcon,
    TwitterFarFAIcon,
    FacebookFarFAIcon,
    LinkedInFarFAIcon,
    InstagramFarFAIcon,
    YouTubeFarFAIcon
} from "@/components/Icons"
import { clsx } from 'clsx'
import classes from "./VideoCard.module.css"

export interface VideoCardProps {
    /** Video thumbnail URL */
    thumbnail: string
    /** Video title */
    title: string
    /** Video description */
    description: string
    /** Author name */
    author: string
    /** Video duration in seconds */
    duration: number
    /** Video platform */
    platform?: string
    /** Card variant */
    variant?: 'regular' | 'highlight'
    /** Click handler */
    onClick?: () => void
}

const SOCIAL_MEDIA_CONFIG = {
    Twitter: {
        icon: TwitterFarFAIcon,
        color: '#1DA1F2'
    },
    Facebook: {
        icon: FacebookFarFAIcon,
        color: '#4267B2'
    },
    LinkedIn: {
        icon: LinkedInFarFAIcon,
        color: '#0A66C2'
    },
    Instagram: {
        icon: InstagramFarFAIcon,
        color: '#E4405F'
    },
    YouTube: {
        icon: YouTubeFarFAIcon,
        color: '#FF0000'
    }
}

export const VideoCard = ({
    thumbnail,
    title,
    description,
    author,
    duration,
    platform,
    variant = 'regular',
    onClick
}: VideoCardProps) => {
    const formatDuration = (seconds: number) => {
        const minutes = Math.floor(seconds / 60)
        const remainingSeconds = seconds % 60
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
    }

    const socialConfig = platform && SOCIAL_MEDIA_CONFIG[platform as keyof typeof SOCIAL_MEDIA_CONFIG]
    const SocialIcon = socialConfig && socialConfig.icon

    const content = (
        <Stack gap={0}>
            <Text fw={500} c={variant === 'regular' ? 'gray.9' : 'white'}>{title}</Text>
            <Text size="sm" c={variant === 'regular' ? 'gray.7' : 'white'}>{description}</Text>
            <Group justify="space-between" mt="md">
                <Text size="xs" c={variant === 'regular' ? 'gray.7' : 'white'}>By {author}</Text>
                {platform && (
                    <Group gap="xxs">
                        {SocialIcon && <SocialIcon size={14} style={{ color: socialConfig.color }} />}
                        <Text
                            size="xs"
                            c={variant === 'regular' ? 'gray.7' : 'white'}
                            style={SocialIcon ? { color: socialConfig.color } : undefined}
                        >
                            {platform}
                        </Text>
                    </Group>
                )}
            </Group>
        </Stack>
    )

    return (
        <div
            className={clsx(
                classes.videoCard,
                variant === 'regular' ? classes.videoCardRegular : classes.videoCardHighlight
            )}
            onClick={onClick}
            role="button"
            tabIndex={0}
        >
            <div className={clsx(
                classes.thumbnailWrapper,
                variant === 'regular' ? classes.thumbnailWrapperRegular : classes.thumbnailWrapperHighlight
            )}>
                <img
                    src={thumbnail}
                    alt={title}
                    className={classes.thumbnail}
                />
                <div className={classes.overlay}>
                    <PlayFarFAIcon filled={true} size={48} />
                </div>
                <div className={classes.duration}>
                    {formatDuration(duration)}
                </div>
                {variant === 'highlight' && (
                    <div className={classes.contentHighlight}>
                        {content}
                    </div>
                )}
            </div>
            {variant === 'regular' && (
                <div className={classes.contentRegular}>
                    {content}
                </div>
            )}
        </div>
    )
}
