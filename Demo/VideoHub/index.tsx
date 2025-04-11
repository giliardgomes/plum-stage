
import { Container, Stack, Grid, Group, Text, Flex, Box } from "@mantine/core"
import { Button } from "../../lib/components/Button"
import { SegmentedControl } from "../../lib/components/SegmentedControl"
import { Pagination } from "../../lib/components/Pagination"
import { TextField } from "../../lib/components/TextField"
import { Menu } from "../../lib/components/Menu"
import { Link } from "../../lib/components/Link"
import React, { useState, useEffect } from "react"
import {
    PlusFarFAIcon,
    ThumbsUpFarFAIcon,
    ThumbsDownFarFAIcon,
    ShareFarFAIcon,
    TwitterFarFAIcon,
    FacebookFarFAIcon,
    LinkedInFarFAIcon,
    InstagramFarFAIcon,
    YouTubeFarFAIcon,
    EnvelopeFarFAIcon,
    XMarkFarFAIcon,
    ArrowRightFarFAIcon
} from "../../lib/components/Icons"
import { Modal } from "../../lib/components/Modal"
import { Notification } from "../../lib/components/Notification"
import classes from "./VideoHub.module.css"
import { VideoCard } from "../../lib/components/VideoCard"
import { Select } from "../../lib/components/Select"

interface VideoData {
    id: number
    thumbnail: string
    title: string
    description: string
    author: string
    platform: string
    duration: number
    videoUrl?: string
}

export function VideoHub() {
    const [activePage, setPage] = useState(1)
    const [activeFilter, setActiveFilter] = useState("all")
    const [selectedVideo, setSelectedVideo] = useState<VideoData | null>(null)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [showNotification, setShowNotification] = useState(false)
    const [likeCount, setLikeCount] = useState(27)
    const [isLiked, setIsLiked] = useState(false)
    const [isDisliked, setIsDisliked] = useState(false)

    useEffect(() => {
        // Show notification every 15 seconds
        const interval = setInterval(() => {
            setShowNotification(true)
            // Hide notification after 5 seconds
            setTimeout(() => setShowNotification(false), 5000)
        }, 15000)

        // Cleanup interval on component unmount
        return () => clearInterval(interval)
    }, [])

    const mockVideos = [
        {
            id: 1,
            thumbnail: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=225&fit=crop",
            title: "Advocacy Story: Community Impact",
            description: "How local advocates made a difference",
            author: "John Doe",
            platform: "Instagram",
            duration: 240,
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
        },
        {
            id: 2,
            thumbnail: "https://images.unsplash.com/photo-1560439514-4e9645039924?w=400&h=225&fit=crop",
            title: "Policy Change Success",
            description: "Breaking down recent policy victories",
            author: "Sarah Johnson",
            platform: "LinkedIn",
            duration: 180,
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
        },
        {
            id: 3,
            thumbnail: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=225&fit=crop",
            title: "Grassroots Movement",
            description: "Building support from the ground up",
            author: "Mike Wilson",
            platform: "Facebook",
            duration: 300,
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
        },
        {
            id: 4,
            thumbnail: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&h=225&fit=crop",
            title: "Digital Campaign Strategy",
            description: "Leveraging social media for change",
            author: "Emma Davis",
            platform: "Twitter",
            duration: 270,
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
        },
        {
            id: 5,
            thumbnail: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=400&h=225&fit=crop",
            title: "Legislative Update",
            description: "Latest developments in policy making",
            author: "Robert Chen",
            platform: "YouTube",
            duration: 360,
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
        },
        {
            id: 6,
            thumbnail: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=225&fit=crop",
            title: "Community Engagement",
            description: "Building stronger connections",
            author: "Lisa Thompson",
            platform: "Instagram",
            duration: 210,
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
        },
        {
            id: 7,
            thumbnail: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=225&fit=crop",
            title: "Advocacy Tools Overview",
            description: "Essential resources for advocates",
            author: "David Park",
            platform: "LinkedIn",
            duration: 330,
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
        },
        {
            id: 8,
            thumbnail: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=225&fit=crop",
            title: "Success Metrics",
            description: "Measuring campaign effectiveness",
            author: "Rachel Green",
            platform: "YouTube",
            duration: 290,
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
        },
        {
            id: 9,
            thumbnail: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=225&fit=crop",
            title: "Stakeholder Relations",
            description: "Building lasting partnerships",
            author: "Tom Martinez",
            platform: "Facebook",
            duration: 255,
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
        }
    ]

    const socialMediaVideos = [
        {
            id: 101,
            thumbnail: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400&h=225&fit=crop",
            title: "Social Media Campaign Success",
            description: "Viral campaign reaches millions",
            author: "Emma Social",
            platform: "Instagram",
            duration: 180,
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
        },
        {
            id: 102,
            thumbnail: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=400&h=225&fit=crop",
            title: "Instagram Stories Strategy",
            description: "Maximize your story engagement",
            author: "Sophie Graham",
            platform: "Instagram",
            duration: 240,
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
        },
        {
            id: 103,
            thumbnail: "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=400&h=225&fit=crop",
            title: "Twitter Trends Analysis",
            description: "Leveraging trending topics",
            author: "Mark Social",
            platform: "Twitter",
            duration: 195,
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
        },
        {
            id: 104,
            thumbnail: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?w=400&h=225&fit=crop",
            title: "Tweet Threading Tips",
            description: "Create engaging thread content",
            author: "Jack Blue",
            platform: "Twitter",
            duration: 220,
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
        },
        {
            id: 105,
            thumbnail: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?w=400&h=225&fit=crop",
            title: "LinkedIn Growth Hacks",
            description: "Professional network building",
            author: "Sarah Pro",
            platform: "LinkedIn",
            duration: 300,
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
        },
        {
            id: 106,
            thumbnail: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?w=400&h=225&fit=crop",
            title: "B2B Social Strategy",
            description: "Enterprise social media success",
            author: "Chris Business",
            platform: "LinkedIn",
            duration: 270,
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
        }
    ]

    const handleVideoClick = (video: VideoData) => {
        setSelectedVideo(video)
        setIsModalOpen(true)
    }

    const handleLike = () => {
        if (isLiked) {
            // Just unlike
            setIsLiked(false);
            setLikeCount(prev => prev - 1);
        } else {
            // Like and remove dislike if exists
            setIsLiked(true);
            setLikeCount(prev => prev + 1);
            if (isDisliked) {
                setTimeout(() => setIsDisliked(false), 0);
            }
        }
    }

    const handleDislike = () => {
        if (isDisliked) {
            // Just un-dislike
            setIsDisliked(false);
        } else {
            // Dislike and remove like if exists
            setIsDisliked(true);
            if (isLiked) {
                setTimeout(() => {
                    setIsLiked(false);
                    setLikeCount(prev => prev - 1);
                }, 0);
            }
        }
    }

    return (
        <Stack className={classes.videoHub} gap="xl">
            {/* Header */}
            <Flex justify="space-between" align="center" className={classes.hubHeader}>
                <Flex align={"center"}>
                    <img alt="Company Logo" height={32} src="https://www.quorum.us/wp-content/uploads/2020/06/Quorum_full_color_dark-1-640x147.png" className={classes.logo} />
                    <Text ml={"md"} style={{ borderLeft: "1px solid var(--mantine-color-gray-3)", paddingLeft: "1rem" }} fw={500} size="xl" c="gray.9">Video Hub</Text>
                </Flex>
                {/* Navigation */}
                <Group justify="space-between" align="center">
                    <Group gap={"xs"}>
                        <Button
                            variant="tertiary"
                            size="md"
                            onClick={() => console.log("Stories clicked")}
                        >
                            Stories
                        </Button>
                        <Button
                            variant="tertiary"
                            size="md"
                            onClick={() => console.log("Social Media clicked")}
                        >
                            Social Media
                        </Button>
                    </Group>
                </Group>
                <Button
                        variant="accent"
                        size="md"
                        leftSection={<PlusFarFAIcon />}
                        onClick={() => console.log("Submit story")}
                        className={classes.submitButton}
                    >
                        Submit your story
                    </Button>
            </Flex>
            <Container>
                <Stack gap="xl">
                    {/* Add Notification */}
                    <Notification
                        message="Someone just submitted a story"
                        className={classes.notificationVideoHub} // Change from string to classes reference
                        variant="success"
                        visible={showNotification}
                        onClose={() => setShowNotification(false)}
                        actionLabel="View story"
                        onAction={() => {
                            const notificationVideo = {
                                id: -1,
                                thumbnail: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&h=675&fit=crop",
                                title: "New Community Story",
                                description: "Recently submitted story from our community",
                                author: "Community Member",
                                duration: 180,
                                platform: "YouTube",
                                videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
                            }
                            setSelectedVideo(notificationVideo)
                            setIsModalOpen(true)
                            setShowNotification(false)
                        }}
                    />

                    {/* Featured Video */}
                    <VideoCard
                        thumbnail="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=1200&h=675&fit=crop"
                        title="Featured: Latest Advocacy Success Story"
                        description="Watch how our community made a difference"
                        author="Jane Smith"
                        duration={360}
                        platform="YouTube"
                        variant="highlight"
                        onClick={() => handleVideoClick({
                            id: 0,
                            thumbnail: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=1200&h=675&fit=crop",
                            title: "Featured: Latest Advocacy Success Story",
                            description: "Watch how our community made a difference",
                            author: "Jane Smith",
                            duration: 360,
                            platform: "YouTube",
                            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
                        })}
                    />

                    {/* Filters */}
                    <Stack gap="md" className={classes.filters}>
                        <Group justify="space-between" align="center" w={"100%"}>
                            <SegmentedControl
                                data={[
                                    { label: 'Featured stories', value: 'all' },
                                    { label: 'Social media', value: 'social' },
                                ]}
                                value={activeFilter}
                                onChange={setActiveFilter}
                                defaultValue="all"
                            />

                            <Select
                                label=""
                                data={[
                                    { label: 'All platforms', value: 'all' },
                                    { label: 'Instagram', value: 'instagram' },
                                    { label: 'Twitter', value: 'twitter' },
                                    { label: 'Facebook', value: 'facebook' },
                                    { label: 'LinkedIn', value: 'linkedin' },
                                    { label: 'YouTube', value: 'youtube' },
                                ]}
                                defaultValue="all"
                                onChange={(value) => console.log('Selected platform:', value)}
                            />
                        </Group>
                    </Stack>

                    {/* Video Grid */}
                    <Grid>
                        {(activeFilter === 'all' ? mockVideos : socialMediaVideos)
                            .map((video, index) => (
                                <Grid.Col span={4} key={video.id}>
                                    <VideoCard
                                        thumbnail={video.thumbnail}
                                        title={video.title}
                                        description={video.description}
                                        author={video.author}
                                        duration={video.duration}
                                        platform={video.platform}
                                        onClick={() => handleVideoClick(video)}
                                    />
                                </Grid.Col>
                            ))}
                    </Grid>

                    {/* Video Modal */}
                    <Modal
                        opened={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                        size="800px"
                        classNames={{
                            body: classes.modalBody,
                            content: classes.modalContent,
                            header: classes.modalHeader
                        }}
                    >
                        <Button
                            variant="tertiary"
                            size="md"
                            onClick={() => setIsModalOpen(false)}
                            className={classes.closeButton}
                            aria-label="Close modal"
                        >
                            <XMarkFarFAIcon />
                        </Button>
                        {selectedVideo && (
                            <Stack gap="md" w={"100%"}>
                                <div className={classes.videoWrapper}>
                                    <iframe
                                        src={selectedVideo.videoUrl}
                                        title={selectedVideo.title}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className={classes.videoIframe}
                                    />
                                </div>
                                <Stack gap="0" align="flex-start">
                                    <Text size="xl" fw={500} c="gray.9">{selectedVideo.title}</Text>
                                    <Text c="gray.7">{selectedVideo.description}</Text>
                                    <Group my={"md"} gap={"xxl"}>
                                        <Text c="gray.7" size="sm">By {selectedVideo.author}</Text>
                                        <Group gap="xxs">
                                            {selectedVideo.platform === 'Twitter' && <TwitterFarFAIcon size={14} style={{ color: '#1DA1F2' }} />}
                                            {selectedVideo.platform === 'Facebook' && <FacebookFarFAIcon size={14} style={{ color: '#4267B2' }} />}
                                            {selectedVideo.platform === 'LinkedIn' && <LinkedInFarFAIcon size={14} style={{ color: '#0A66C2' }} />}
                                            {selectedVideo.platform === 'Instagram' && <InstagramFarFAIcon size={14} style={{ color: '#E4405F' }} />}
                                            {selectedVideo.platform === 'YouTube' && <YouTubeFarFAIcon size={14} style={{ color: '#FF0000' }} />}
                                            <Text c="gray.7" size="sm">{selectedVideo.platform}</Text>
                                        </Group>
                                    </Group>

                                    {/* Interaction buttons */}
                                    <Stack gap="xs" my={"md"} w={"100%"} align="flex-start">
                                        <Group gap={"xs"} className={classes.interactionButtons} styles={{ root: { width: "calc(100% + 2rem)", marginLeft: "-1rem" } }}>
                                            <Button
                                                variant="tertiary"
                                                leftSection={<ThumbsUpFarFAIcon filled={isLiked} />}
                                                onClick={handleLike}
                                                data-active={isLiked}
                                                className={classes.likeButton}
                                            >
                                                Like ({likeCount})
                                            </Button>

                                            <Button
                                                variant="tertiary"
                                                leftSection={<ThumbsDownFarFAIcon filled={isDisliked} />}
                                                onClick={handleDislike}
                                                data-active={isDisliked}
                                                className={classes.dislikeButton}
                                            >
                                                Dislike
                                            </Button>

                                            <Box ml="auto"><Menu>
                                                <Menu.Target>
                                                    <Button
                                                        variant="tertiary"
                                                        leftSection={<ShareFarFAIcon />}
                                                    >
                                                        Share
                                                    </Button>
                                                </Menu.Target>

                                                <Menu.Dropdown>
                                                    <Menu.Item
                                                        leftSection={<TwitterFarFAIcon style={{ color: '#1DA1F2' }} />}
                                                        onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(selectedVideo.title)}&url=${encodeURIComponent(window.location.href)}`, '_blank')}
                                                    >
                                                        Twitter
                                                    </Menu.Item>
                                                    <Menu.Item
                                                        leftSection={<FacebookFarFAIcon style={{ color: '#4267B2' }} />}
                                                        onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank')}
                                                    >
                                                        Facebook
                                                    </Menu.Item>
                                                    <Menu.Item
                                                        leftSection={<LinkedInFarFAIcon style={{ color: '#0A66C2' }} />}
                                                        onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`, '_blank')}
                                                    >
                                                        LinkedIn
                                                    </Menu.Item>
                                                    <Menu.Item
                                                        leftSection={<YouTubeFarFAIcon style={{ color: '#FF0000' }} />}
                                                        onClick={() => window.open(`https://www.youtube.com/share?url=${encodeURIComponent(window.location.href)}`, '_blank')}
                                                    >
                                                        YouTube
                                                    </Menu.Item>
                                                    <Menu.Item
                                                        leftSection={<EnvelopeFarFAIcon style={{ color: '#718096' }} />}
                                                        onClick={() => window.location.href = `mailto:?subject=${encodeURIComponent(selectedVideo.title)}&body=${encodeURIComponent(window.location.href)}`}
                                                    >
                                                        Email
                                                    </Menu.Item>
                                                </Menu.Dropdown>
                                            </Menu></Box>
                                        </Group>
                                        <Stack>
                                            <Text size="xs" c="gray.7">{likeCount} likes</Text>
                                        </Stack>
                                    </Stack>
                                </Stack>
                            </Stack>
                        )}
                    </Modal>

                    {/* Pagination */}
                    <Group justify="center" pt="xl">
                        <Pagination
                            total={10}
                            value={activePage}
                            onChange={setPage}
                        />
                    </Group>

                    {/* Footer */}
                    <footer className={classes.footer}>
                        <Grid pb={"xxl"}>
                            <Grid.Col span={4}>
                                <Stack gap="md">
                                    <img alt="Company Logo" height={32} src="https://www.quorum.us/wp-content/uploads/2020/06/Quorum_full_color_dark-1-640x147.png" className={classes.logo} />
                                    <Text c="gray.7">
                                        Your company description goes here. Share your mission and vision with your audience.
                                    </Text>
                                </Stack>
                            </Grid.Col>
                            <Grid.Col span={3}>
                                <Stack gap="md">
                                    <Text fw={500} c="gray.9">Useful Links</Text>
                                    <Stack gap="xs">
                                        <Link href="#">About Us</Link>
                                        <Link href="#">Contact</Link>
                                        <Link href="#">Privacy Policy</Link>
                                        <Link href="#">Terms of Service</Link>
                                    </Stack>
                                </Stack>
                            </Grid.Col>
                            <Grid.Col span={5}>
                                <Stack gap="md">
                                    <Text fw={500} c="gray.9">Newsletter</Text>
                                    <Text c="gray.7">Subscribe to our newsletter for updates</Text>
                                    <Group pos={"relative"}>
                                        <TextField
                                            placeholder="Enter your email"
                                            style={{ flex: 1 }}
                                            label={undefined}
                                        />
                                        <Button
                                            size="sm"
                                            variant="tertiary"
                                            styles={{ root: { position: "absolute", right: "0.25rem" } }}
                                            rightSection={<ArrowRightFarFAIcon />}
                                            >
                                            Subscribe
                                        </Button>
                                    </Group>
                                </Stack>
                            </Grid.Col>
                        </Grid>
                    </footer>
                </Stack>
            </Container>
        </Stack>
    )
}
