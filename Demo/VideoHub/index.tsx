import { Container, Stack, Grid, Group, Text, Flex, Box, Paper, Drawer, Burger, Divider, Center } from "@mantine/core"
import { Button } from "../../lib/components/Button"
import { SegmentedControl } from "../../lib/components/SegmentedControl"
import { Pagination } from "../../lib/components/Pagination"
import { TextField } from "../../lib/components/TextField"
import { Link } from "../../lib/components/Link"
import React, { useState, useEffect, useRef } from "react"
import {
    PlusFarFAIcon,
    TwitterFarFAIcon,
    FacebookFarFAIcon,
    LinkedInFarFAIcon,
    InstagramFarFAIcon,
    YouTubeFarFAIcon,
    EnvelopeFarFAIcon,
    XMarkFarFAIcon,
    ArrowRightFarFAIcon,
    TrashFarFAIcon,
    CalendarFarFAIcon,
    PlayFarFAIcon,
    FavoriteFarFAIcon,
    ThreadsFAIcon,
    BlueskyFAIcon,
    UserCircleFarFAIcon,
} from "../../lib/components/Icons"
import { Modal } from "../../lib/components/Modal"
import { Notification } from "../../lib/components/Notification"
import classes from "./VideoHub.module.css"
import { StoryCard } from "../../lib/molecules/StoryCard"
import { Select } from "../../lib/components/Select"
import { SelectableTag } from "../../lib/components/SelectableTag"
import { FileDropzone } from "../../lib/components/FileDropzone"

interface VideoData {
    id: number
    thumbnail: string
    description: string
    author: string
    platform: string
    duration: number
    videoUrl?: string
    industries?: string[]
    datePosted?: string
    isTextStory?: boolean
    likeCount?: number
}

interface TextStory {
    platform: string
    description: string
    author: string
    datePosted: string
}

export function VideoHub() {
    const storyRef = useRef<HTMLSpanElement>(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting)
            },
            { threshold: 0.5 },
        )

        if (storyRef.current) {
            observer.observe(storyRef.current)
        }

        return () => {
            if (storyRef.current) {
                observer.unobserve(storyRef.current)
            }
        }
    }, [])

    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    useEffect(() => {
        document.body.classList.add("video-hub-page")
        return () => document.body.classList.remove("video-hub-page")
    }, [])

    const [activePage, setPage] = useState(1)
    const [activeFilter, setActiveFilter] = useState("all")
    const [selectedVideo, setSelectedVideo] = useState<VideoData | null>(null)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [showNotification, setShowNotification] = useState(false)
    const [likeCount, setLikeCount] = useState(27)
    const [isLiked, setIsLiked] = useState(false)
    const [selectedTags, setSelectedTags] = useState<string[]>([])
    const [showTextArea, setShowTextArea] = useState(false)
    const [textValue, setTextValue] = useState("")
    const [isSaved, setIsSaved] = useState(false)
    const [isEditing, setIsEditing] = useState(false)
    const [isTextModalOpen, setIsTextModalOpen] = useState(false)
    const [selectedTextStory, setSelectedTextStory] = useState<TextStory | null>(null)
    const [sortBy, setSortBy] = useState<string>("recent")
    const [mobileMenuOpened, setMobileMenuOpened] = useState(false)
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
    const [selectedFile, setSelectedFile] = useState<File | null>(null)
    const [videoUrl, setVideoUrl] = useState<string | null>(null)

    const handleTagSelect = (value: string) => {
        setSelectedTags((prev) =>
            prev.includes(value)
                ? prev.filter((tag) => tag !== value)
                : [...prev, value],
        )
    }

    const filterVideos = (videos: VideoData[]) => {
        let filteredVideos = videos

        // Apply tag/industry filtering
        if (selectedTags.length > 0) {
            filteredVideos = videos.filter((video) =>
                // Only show videos that have industries property and match selected tags
                video.industries
                && selectedTags.some((tag) => video.industries?.includes(tag)),
            )
        }

        // Then apply platform filtering
        if (activeFilter === "social") {
            filteredVideos = filteredVideos.filter((video) =>
                video.platform !== "VideoHub" && !video.isTextStory,
            )
        }

        return filteredVideos
    }

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

    const mockVideos: VideoData[] = [
        {
            id: 1,
            thumbnail: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=225&fit=crop",
            description: "Our grassroots campaign successfully mobilized over 5,000 community members to advocate for improved public transportation infrastructure.",
            author: "Emily Rodriguez",
            platform: "VideoHub",
            duration: 240,
            videoUrl: "../video-hub.mp4",
            datePosted: "Oct 20, 2023",
            likeCount: 156,
            industries: ["advocacy", "technology"],
        },
        {
            id: 2,
            thumbnail: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=225&fit=crop",
            description: "Healthcare accessibility initiative leads to groundbreaking policy change.",
            author: "Dr. James Wilson",
            platform: "VideoHub",
            duration: 180,
            videoUrl: "../video-hub.mp4",
            datePosted: "Sep 15, 2023",
            likeCount: 123,
            industries: ["advocacy", "consumer-goods", "technology"],
        },
        {
            id: 3,
            thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=225&fit=crop",
            description: "Local environmental coalition achieves landmark conservation victory.",
            author: "Mike Wilson",
            platform: "VideoHub",
            duration: 300,
            videoUrl: "../video-hub.mp4",
            datePosted: "Aug 25, 2023",
            likeCount: 98,
            industries: ["agriculture", "small-business"],
        },
        {
            id: 4,
            thumbnail: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=225&fit=crop",
            description: "Youth education initiative transforms local STEM programs.",
            author: "Sarah Chen",
            platform: "VideoHub",
            duration: 280,
            videoUrl: "../video-hub.mp4",
            industries: ["advocacy", "technology", "manufacturing"],
            datePosted: "Jul 10, 2023",
            likeCount: 75,
        },
        {
            id: 5,
            thumbnail: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=225&fit=crop",
            description: "Community garden project transforms urban food desert.",
            author: "Maria Garcia",
            platform: "YouTube",
            duration: 195,
            videoUrl: "../video-hub.mp4",
            datePosted: "Jun 30, 2023",
            likeCount: 60,
            industries: ["advocacy", "agriculture", "consumer-goods"],
        },
        {
            id: 6,
            thumbnail: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=225&fit=crop",
            description: "Mental health awareness campaign reaches milestone.",
            author: "Dr. Sarah Thompson",
            platform: "VideoHub",
            duration: 260,
            videoUrl: "../video-hub.mp4",
            datePosted: "May 20, 2023",
            likeCount: 45,
            industries: ["advocacy", "technology", "small-business"],
        },
        {
            id: 7,
            thumbnail: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=225&fit=crop",
            description: "Veterans support program expands nationwide.",
            author: "John Martinez",
            platform: "VideoHub",
            duration: 220,
            videoUrl: "../video-hub.mp4",
            datePosted: "Apr 15, 2023",
            likeCount: 30,
            industries: ["advocacy", "manufacturing", "consumer-goods"],
        },
        {
            id: 101,
            thumbnail: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=225&fit=crop",
            description: "Digital advocacy campaign achieves record-breaking engagement.",
            author: "Alex Digital",
            platform: "Twitter",
            duration: 180,
            videoUrl: "../video-hub.mp4",
            datePosted: "Mar 10, 2023",
            likeCount: 20,
            industries: ["advocacy", "technology", "small-business"],
        },
        {
            id: 102,
            thumbnail: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=225&fit=crop",
            description: "Social media campaign drives policy change.",
            author: "Emma Social",
            platform: "Facebook",
            duration: 210,
            videoUrl: "../video-hub.mp4",
            datePosted: "Feb 25, 2023",
            likeCount: 15,
            industries: ["agriculture", "consumer-goods"],
        },
        {
            id: 103,
            thumbnail: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=225&fit=crop",
            description: "LinkedIn community rallies for business reform.",
            author: "Chris Business",
            platform: "LinkedIn",
            duration: 270,
            videoUrl: "../video-hub.mp4",
            datePosted: "Jan 15, 2023",
            likeCount: 10,
            industries: ["small-business", "manufacturing"],
        },
    ]

    const handleVideoClick = (video: VideoData) => {
        setSelectedVideo(video)
        setIsModalOpen(true)
    }

    const handleLike = () => {
        if (isLiked) {
            setIsLiked(false)
            setLikeCount((prev) => prev - 1)
        } else {
            setIsLiked(true)
            setLikeCount((prev) => prev + 1)
        }
    }

    const handleTextClick = (description: string, platform: string, author: string) => {
        setSelectedTextStory({ description, author, platform, datePosted: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) })
        setIsTextModalOpen(true)
    }

    return (
        <Stack className={classes.videoHub} gap="0">
            {/* Header */}
            <Flex align="center" className={`${classes.hubHeader} ${isScrolled ? classes.hubHeaderScrolled : ""}`}>
                <Flex maw="1280px" w="100%" mx="auto" justify="space-between">
                    <Flex align="center">
                        <a
                            href="#/VideoHub"
                            rel="noopener noreferrer"
                            style={{ textDecoration: "none" }}
                            onClick={(e) => {
                                e.preventDefault()
                                window.scrollTo({
                                    top: 0,
                                    behavior: "smooth",
                                })
                            }}
                        >
                            <img alt="Company Logo" height={32} src="../logo.svg" className={classes.logo} />
                        </a>
                        <Text ml="md" style={{ borderLeft: "1px solid var(--mantine-color-gray-3)", paddingLeft: "1rem" }} fw={500} size="lg" c="gray.9">Video Hub</Text>
                    </Flex>
                    <Box className={classes.mobileMenu}>
                        <Burger
                            opened={mobileMenuOpened}
                            onClick={() => setMobileMenuOpened((o) => !o)}
                            size="sm"
                            color="var(--mantine-color-gray-9)"
                        />
                        <Drawer
                            opened={mobileMenuOpened}
                            onClose={() => setMobileMenuOpened(false)}
                            position="top"
                            size="xs"
                            padding="md"
                            lockScroll={false}
                            transitionProps={{
                                transition: "fade",
                                duration: 200,
                                timingFunction: "ease",
                            }}
                        >
                            <Stack gap="md">
                                <Group gap="xs">
                                    <Button
                                        variant="tertiary"
                                        size="md"
                                        onClick={() => console.log("Stories clicked")}
                                    >
                                        Our mission
                                    </Button>
                                    <Button
                                        variant="tertiary"
                                        size="md"
                                        onClick={() => console.log("Social Media clicked")}
                                    >
                                        Get involved
                                    </Button>
                                </Group>
                                <Button
                                    variant="accent"
                                    size="md"
                                    leftSection={<PlusFarFAIcon />}
                                    onClick={() => {
                                        const submitSection = document.querySelector(`.${classes.submitSection}`)
                                        if (submitSection) {
                                            const rect = submitSection.getBoundingClientRect()
                                            const scrollTop = window.pageYOffset || document.documentElement.scrollTop
                                            const targetPosition = rect.top + scrollTop - 100 // 100px offset

                                            window.scrollTo({
                                                top: targetPosition,
                                                behavior: "smooth",
                                            })
                                        }
                                        setMobileMenuOpened(false) // Close the drawer
                                    }}
                                    className={classes.submitButton}
                                >
                                    Submit your story
                                </Button>
                            </Stack>
                        </Drawer>
                    </Box>
                    {/* Navigation */}
                    <Group justify="space-between" align="center" gap="md">
                        <Group gap="xs">
                            <Button
                                variant="tertiary"
                                size="md"
                                onClick={() => console.log("Stories clicked")}
                            >
                                Our mission
                            </Button>
                            <Button
                                variant="tertiary"
                                size="md"
                                onClick={() => console.log("Social Media clicked")}
                            >
                                Get involved
                            </Button>
                        </Group>
                        <Button
                            variant="accent"
                            size="md"
                            leftSection={<PlusFarFAIcon />}
                            onClick={() => {
                                const submitSection = document.querySelector(`.${classes.submitSection}`)
                                if (submitSection) {
                                    const rect = submitSection.getBoundingClientRect()
                                    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
                                    const targetPosition = rect.top + scrollTop - 100 // 100px offset

                                    window.scrollTo({
                                        top: targetPosition,
                                        behavior: "smooth",
                                    })
                                }
                            }}
                            className={classes.submitButton}
                        >
                            Submit your story
                        </Button>
                    </Group>
                </Flex>
            </Flex>

            <Button
                variant="accent"
                size="lg"
                styles={{
                    root: {
                        position: "fixed",
                        bottom: "2rem",
                        right: "1rem",
                        zIndex: 100,
                        boxShadow: "0 8px 16px -2px rgba(0, 0, 0, 0.2)",
                    },
                }}
                onClick={() => {
                    const submitSection = document.querySelector(`.${classes.submitSection}`)
                    if (submitSection) {
                        const rect = submitSection.getBoundingClientRect()
                        const scrollTop = window.pageYOffset || document.documentElement.scrollTop
                        const targetPosition = rect.top + scrollTop - 100 // 100px offset

                        window.scrollTo({
                            top: targetPosition,
                            behavior: "smooth",
                        })
                    }
                    setMobileMenuOpened(false) // Close the drawer
                }}
                className={classes.submitButton}
                display={{ base: "block", sm: "none" }}
            >
                <PlusFarFAIcon />
            </Button>

            {/* Main Content */}

            <Container className={classes.container}>
                <Stack gap="xl">
                    {/* Add Notification */}
                    <Notification
                        message="New story added"
                        className={classes.notificationVideoHub}
                        variant="success"
                        visible={showNotification}
                        onClose={() => setShowNotification(false)}
                        actionLabel="View"
                        position="top-right"
                        onAction={() => {
                            const notificationVideo = {
                                id: -1,
                                thumbnail: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1200&h=675&fit=crop",
                                title: "New Community Story",
                                description: "Recently submitted story from our community",
                                author: "Community Member",
                                duration: 180,
                                platform: "VideoHub",
                                videoUrl: "../video-hub.mp4",
                                datePosted: "13 seconds ago",
                            }
                            setSelectedVideo(notificationVideo)
                            setIsModalOpen(true)
                            setShowNotification(false)
                        }}
                    />

                    {/* Featured Video */}
                    <StoryCard
                        thumbnail="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=1200&h=675&fit=crop"
                        description="Small business owners successfully advocated for the Small Business Protection Act, resulting in significant tax relief and regulatory reforms that benefit over 10,000 local enterprises across the state, marking a pivotal victory for the business community."
                        author="Jane Smith"
                        duration={360}
                        platform="VideoHub"
                        variant="highlight"
                        onClick={() => handleVideoClick({
                            id: 0,
                            thumbnail: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=1200&h=675&fit=crop",
                            description: "Small business owners successfully advocated for the Small Business Protection Act, resulting in significant tax relief and regulatory reforms that benefit over 10,000 local enterprises across the state, marking a pivotal victory for the business community.",
                            author: "Jane Smith",
                            duration: 360,
                            platform: "YouTube",
                            videoUrl: "../video-hub.mp4",
                            datePosted: "Oct 20, 2023",
                        })}
                    />

                    {/* Filters */}
                    <Stack gap="md" mt="xl" className={classes.filters}>
                        <Flex gap="md" justify="space-between" align="center" w="100%" className={classes.filterContainer}>
                            <Flex className={classes.featuredHeading}>
                                <Text fw={600} size="2rem" c="gray.9">Featured stories</Text>
                            </Flex>
                            <SegmentedControl
                                value={activeFilter}
                                onChange={setActiveFilter}
                                data={[
                                    { label: "All stories", value: "all" },
                                    { label: "Social media", value: "social" },
                                ]}
                            />
                        </Flex>

                        <Flex gap="xs" wrap="wrap" align="center" className={classes.filters} w="100%">
                            <Flex gap="xs" wrap="wrap" align="center" fw="wrap" w="100%">
                                <Text mr="xs" size="sm" c="gray.7">Filter by industry</Text>
                                <Flex gap="xs" wrap="wrap" maw="100%" w="100%" className={classes.filtersTags}>
                                    <SelectableTag
                                        value="advocacy"
                                        checked={selectedTags.includes("advocacy")}
                                        onChange={() => handleTagSelect("advocacy")}
                                    >
                                        Advocacy
                                    </SelectableTag>
                                    <SelectableTag
                                        value="health"
                                        checked={selectedTags.includes("health")}
                                        onChange={() => handleTagSelect("health")}
                                    >
                                        Health
                                    </SelectableTag>
                                    <SelectableTag
                                        value="manufacturing"
                                        checked={selectedTags.includes("manufacturing")}
                                        onChange={() => handleTagSelect("manufacturing")}
                                    >
                                        Work
                                    </SelectableTag>
                                    <SelectableTag
                                        value="agriculture"
                                        checked={selectedTags.includes("agriculture")}
                                        onChange={() => handleTagSelect("agriculture")}
                                    >
                                        Farming
                                    </SelectableTag>
                                    <SelectableTag
                                        value="small-business"
                                        checked={selectedTags.includes("small-business")}
                                        onChange={() => handleTagSelect("small-business")}
                                    >
                                        Small business
                                    </SelectableTag>
                                    <SelectableTag
                                        value="technology"
                                        checked={selectedTags.includes("technology")}
                                        onChange={() => handleTagSelect("technology")}
                                    >
                                        Technology
                                    </SelectableTag>
                                </Flex>
                            </Flex>
                            <Select
                                data={[
                                    { label: "Most recent", value: "recent" },
                                    { label: "Most viewed", value: "viewed" },
                                    { label: "Most liked", value: "liked" },
                                ]}
                                placeholder="Sort by"
                                value={sortBy}
                                onChange={(value) => setSortBy(value || "")}
                                label=""
                            />
                        </Flex>
                    </Stack>

                    {/* Stories Grid */}
                    <Grid className={classes.gridStories}>
                        {(() => {
                            const textStories = [
                                {
                                    description: "In a landmark victory for small business advocacy, our coalition successfully championed the Small Business Protection Act. Through 18 months of dedicated outreach and coalition building, we secured essential tax relief and regulatory flexibility for over 10,000 small businesses.",
                                    author: "Michael Chang",
                                },
                                {
                                    description: "Community-led initiative results in groundbreaking environmental policy. Local activists and residents collaborated to implement sustainable practices, reducing carbon emissions by 30% and establishing green spaces throughout the city.",
                                    author: "Sarah Martinez",
                                },
                            ]

                            const videos = filterVideos(mockVideos)

                            // Create combined array of all stories
                            const allStories = [...videos]

                            // Only insert text stories if not in social media filter
                            if (activeFilter !== "social") {
                                // First text story will always be at position 2
                                allStories.splice(2, 0, {
                                    id: -2,
                                    isTextStory: true,
                                    ...textStories[0],
                                    thumbnail: "",
                                    platform: "VideoHub",
                                    duration: 0,
                                    industries: ["advocacy", "community"],
                                })

                                // Second text story will be at position 7 (middle of the third row)
                                allStories.splice(7, 0, {
                                    id: -3,
                                    isTextStory: true,
                                    ...textStories[1],
                                    thumbnail: "",
                                    platform: "",
                                    duration: 0,
                                    industries: ["advocacy", "environment", "community"],
                                })
                            }

                            if (selectedTags.length > 0 && allStories.length === 0) {
                                return (
                                    <Grid.Col span={12}>
                                        <Stack align="center" py="xl">
                                            <Text size="xl">
                                                <i className="fa-regular fa-circle-exclamation" />
                                            </Text>
                                            <Stack gap={0} align="center" ta="center">
                                                <Text c="gray.9" fw={500} size="md">No stories found</Text>
                                                <Text c="gray.7" size="sm">There are no stories for the selected industries</Text>
                                            </Stack>
                                        </Stack>
                                    </Grid.Col>
                                )
                            }

                            return allStories.map((story) => (
                                <Grid.Col
                                    span={{ base: 12, sm: 6, md: 4 }}
                                    key={story.id}
                                >
                                    {story.isTextStory
                                        ? (
                                            <StoryCard
                                                description={story.description}
                                                author={story.author}
                                                platform="VideoHub"
                                                variant="text"
                                                datePosted={story.datePosted}
                                                likeCount={Math.floor(Math.random() * 200) + 1}
                                                onClick={() => handleTextClick(story.description, story.platform, story.author)}
                                            />
                                        )
                                        : (
                                            <StoryCard
                                                thumbnail={story.thumbnail}
                                                description={story.description}
                                                author={story.author}
                                                duration={story.duration}
                                                platform={story.platform}
                                                variant="regular"
                                                likeCount={Math.floor(Math.random() * 200) + 1}
                                                onClick={() => handleVideoClick(story)}
                                            />
                                        )}
                                </Grid.Col>
                            ))
                        })()}
                    </Grid>

                    {/* Pagination */}
                    {filterVideos(mockVideos).length > 0 && (
                        <Group justify="center" pt="xl">
                            <Pagination
                                total={Math.ceil(filterVideos(mockVideos).length / 3)}
                                value={activePage}
                                onChange={setPage}
                                className={classes.pagination}
                            />
                        </Group>
                    )}

                    {/* Video Modal */}
                    <Modal
                        opened={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                        size="800px"
                        className={classes.modalBody}
                        classNames={{
                            body: classes.modalContent,
                            overlay: classes.modalOverlay,
                        }}
                        transition="slide-up"
                        transitionDuration={300}
                        transitionTimingFunction="ease"
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
                            <Stack gap="md" w="100%" align="flex-start" p="lg">
                                <div className={classes.videoWrapper}>
                                    <iframe
                                        src={selectedVideo.videoUrl}
                                        title="Video content"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className={classes.videoIframe}
                                    />
                                </div>
                                <Stack w="100%" gap="0" align="flex-start">
                                    <Stack className={classes.descriptionModal}>
                                        <Text ta="left" c="gray.7">{selectedVideo.description}</Text>
                                    </Stack>
                                    <Group my="md" gap="xxl" className={classes.storyData}>
                                        <Group gap="xxs" className={classes.storyDataInfo}>
                                            <UserCircleFarFAIcon size={14} style={{ color: "var(--mantine-color-gray-6)" }} />
                                            <Text c="gray.7" size="sm">{selectedVideo.author}</Text>
                                        </Group>
                                        <Group gap="xxs" className={classes.storyDataInfo}>
                                            <CalendarFarFAIcon size={14} style={{ color: "var(--mantine-color-gray-6)" }} />
                                            <Text c="gray.7" size="sm">{selectedVideo.datePosted}</Text>
                                        </Group>
                                        <Group gap="xxs" className={classes.storyDataInfo}>
                                            {selectedVideo.platform === "Twitter" && <TwitterFarFAIcon size={14} style={{ color: "#1DA1F2" }} />}
                                            {selectedVideo.platform === "Facebook" && <FacebookFarFAIcon size={14} style={{ color: "#4267B2" }} />}
                                            {selectedVideo.platform === "LinkedIn" && <LinkedInFarFAIcon size={14} style={{ color: "#0A66C2" }} />}
                                            {selectedVideo.platform === "Instagram" && <InstagramFarFAIcon size={14} style={{ color: "#E4405F" }} />}
                                            {selectedVideo.platform === "YouTube" && <YouTubeFarFAIcon size={14} style={{ color: "#FF0000" }} />}
                                            {selectedVideo.platform === "VideoHub" && <PlayFarFAIcon size={14} style={{ color: "#417DD1" }} />}
                                            <Text c="gray.7" size="sm">{selectedVideo.platform}</Text>
                                        </Group>
                                    </Group>
                                    <Flex className={classes.interactionButtons} align="center" w="100%" justify="space-between">
                                        <Flex gap="sm" align="center">
                                            <Button
                                                variant="tertiary"
                                                size="md"
                                                onClick={handleLike}
                                                data-active={isLiked}
                                                className={classes.likeButton}
                                                leftSection={<FavoriteFarFAIcon filled={isLiked} />}
                                            >
                                                {isLiked ? "Liked" : "Like"}
                                                {" "}
                                                (
                                                {likeCount}
                                                )
                                            </Button>
                                        </Flex>
                                        <Flex align="center">
                                            <Group gap="xxs" w="100%" className={classes.shareButtons} wrap="wrap" align="center">
                                                <Text size="xs" styles={{ root: { textTransform: "uppercase" } }} c="gray.6" fw={500} mr="xs">Share:</Text>
                                                <Button
                                                    variant="tertiary"
                                                    size="md"
                                                    onClick={() => console.log("Share on Twitter")}
                                                    style={{ color: "#1DA1F2" }} // Twitter blue
                                                >
                                                    <TwitterFarFAIcon />
                                                </Button>
                                                <Button
                                                    variant="tertiary"
                                                    size="md"
                                                    onClick={() => console.log("Share on Instagram")}
                                                    style={{ color: "#E4405F" }} // Instagram pink
                                                >
                                                    <InstagramFarFAIcon />
                                                </Button>
                                                <Button
                                                    variant="tertiary"
                                                    size="md"
                                                    onClick={() => console.log("Share on Threads")}
                                                    style={{ color: "#000000" }}
                                                >
                                                    <ThreadsFAIcon />
                                                </Button>
                                                <Button
                                                    variant="tertiary"
                                                    size="md"
                                                    onClick={() => console.log("Share on Facebook")}
                                                    style={{ color: "#4267B2" }} // Facebook blue
                                                >
                                                    <FacebookFarFAIcon />
                                                </Button>
                                                <Button
                                                    variant="tertiary"
                                                    size="md"
                                                    onClick={() => console.log("Share on LinkedIn")}
                                                    style={{ color: "#0A66C2" }} // LinkedIn blue
                                                >
                                                    <LinkedInFarFAIcon />
                                                </Button>
                                                <Button
                                                    variant="tertiary"
                                                    size="md"
                                                    onClick={() => console.log("Share on Bluesky")}
                                                    style={{ color: "#0560FF" }}
                                                >
                                                    <BlueskyFAIcon />
                                                </Button>
                                            </Group>
                                        </Flex>
                                    </Flex>
                                </Stack>
                            </Stack>
                        )}
                    </Modal>

                    {/* Text Story Modal */}
                    <Modal
                        opened={isTextModalOpen}
                        onClose={() => setIsTextModalOpen(false)}
                        size="800px"
                        className={classes.modalBody}
                        classNames={{
                            body: classes.modalContent,
                            overlay: classes.modalOverlay,
                        }}
                        transition="slide-up"
                        transitionDuration={300}
                        transitionTimingFunction="ease"
                    >
                        <Button
                            variant="tertiary"
                            size="md"
                            onClick={() => setIsTextModalOpen(false)}
                            className={classes.closeButton}
                            aria-label="Close modal"
                        >
                            <XMarkFarFAIcon />
                        </Button>
                        {selectedTextStory && (
                            <Stack gap="md" w="100%" align="flex-start" p="lg">
                                <Stack gap="xxl">
                                    <Flex className={classes.modalStoryText}>
                                        <Text ta="left" c="gray.9" size="xl">{selectedTextStory.description}</Text>
                                    </Flex>
                                    <Group my="md" gap="xxl" className={classes.storyData}>
                                        <Group gap="xxs" className={classes.storyDataInfo}>
                                            <UserCircleFarFAIcon size={14} style={{ color: "var(--mantine-color-gray-6)" }} />
                                            <Text c="gray.7" size="sm">{selectedTextStory.author}</Text>
                                        </Group>
                                        <Group gap="xxs" className={classes.storyDataInfo}>
                                            <CalendarFarFAIcon size={14} style={{ color: "var(--mantine-color-gray-6)" }} />
                                            <Text c="gray.7" size="sm">{selectedTextStory.datePosted}</Text>
                                        </Group>
                                        <Group gap="xxs" className={classes.storyDataInfo}>
                                            <PlayFarFAIcon size={14} style={{ color: "#417DD1" }} />
                                            <Text c="gray.7" size="sm">{selectedTextStory?.platform || "VideoHub"}</Text>
                                        </Group>
                                    </Group>
                                    <Flex className={classes.interactionButtons} align="center" w="100%" justify="space-between">
                                        <Flex gap="sm" align="center">
                                            <Button
                                                variant="tertiary"
                                                size="md"
                                                onClick={handleLike}
                                                data-active={isLiked}
                                                className={classes.likeButton}
                                                leftSection={<FavoriteFarFAIcon filled={isLiked} />}
                                            >
                                                {isLiked ? "Liked" : "Like"}
                                                {" "}
                                                (
                                                {likeCount}
                                                )
                                            </Button>
                                        </Flex>
                                        <Flex align="center">
                                            <Group gap="xxs" w="100%" className={classes.shareButtons} wrap="wrap" align="center">
                                                <Text size="xs" styles={{ root: { textTransform: "uppercase" } }} c="gray.6" fw={500} mr="xs">Share:</Text>
                                                <Button
                                                    variant="tertiary"
                                                    size="md"
                                                    onClick={() => console.log("Share on Twitter")}
                                                    style={{ color: "#1DA1F2" }} // Twitter blue
                                                >
                                                    <TwitterFarFAIcon />
                                                </Button>
                                                <Button
                                                    variant="tertiary"
                                                    size="md"
                                                    onClick={() => console.log("Share on Instagram")}
                                                    style={{ color: "#E4405F" }} // Instagram pink
                                                >
                                                    <InstagramFarFAIcon />
                                                </Button>
                                                <Button
                                                    variant="tertiary"
                                                    size="md"
                                                    onClick={() => console.log("Share on Threads")}
                                                    style={{ color: "#000000" }}
                                                >
                                                    <ThreadsFAIcon />
                                                </Button>
                                                <Button
                                                    variant="tertiary"
                                                    size="md"
                                                    onClick={() => console.log("Share on Facebook")}
                                                    style={{ color: "#4267B2" }} // Facebook blue
                                                >
                                                    <FacebookFarFAIcon />
                                                </Button>
                                                <Button
                                                    variant="tertiary"
                                                    size="md"
                                                    onClick={() => console.log("Share on LinkedIn")}
                                                    style={{ color: "#0A66C2" }} // LinkedIn blue
                                                >
                                                    <LinkedInFarFAIcon />
                                                </Button>
                                                <Button
                                                    variant="tertiary"
                                                    size="md"
                                                    onClick={() => console.log("Share on Bluesky")}
                                                    style={{ color: "#0560FF" }}
                                                >
                                                    <BlueskyFAIcon />
                                                </Button>
                                            </Group>
                                        </Flex>
                                    </Flex>
                                </Stack>
                            </Stack>
                        )}
                    </Modal>
                </Stack>
            </Container>
            {/* Submit section */}
            <Stack className={classes.submitWrapper}>
                <div className={classes.glow}></div>
                <Stack className={classes.submitSection}>
                    <Flex justify="center" gap="xxs" direction="column" align="center">
                        <Stack gap="0" className={classes.submitSectionHeading}>
                            <Text fw={600} tt="uppercase" size="3rem" lts="-0.05em" mb="xs">
                                Submit your story
                            </Text>
                            <Text size="md" mb="xl">
                                Get your story highlighted on our platform by submitting your video or text story.
                            </Text>
                        </Stack>

                        {!selectedFile && (
                            <Stack align="center" w="100%" className={classes.recordButton}>
                                <Button
                                    variant="primary"
                                    size="lg"
                                    onClick={() => console.log("Submit story")}
                                    leftSection={<i className="fa-solid fa-camera" />}
                                >
                                    Start recording
                                </Button>
                                <Flex gap="lg" align="center" mb="lg">
                                    <hr style={{ width: "100px", height: "1px", backgroundColor: "black", opacity: 0.2 }}></hr>
                                    <Text size="xs" c="gray.6">or</Text>
                                    <hr style={{ width: "100px", height: "1px", backgroundColor: "black", opacity: 0.2 }}></hr>
                                </Flex>
                            </Stack>
                        )}

                        {
                            !selectedFile
                                ? (
                                    <FileDropzone
                                        onDrop={(files) => {
                                            const file = files[0]
                                            if (file) {
                                                const fileUrl = URL.createObjectURL(file)
                                                setSelectedFile(file)
                                                setVideoUrl(fileUrl)
                                            }
                                        }}
                                        maxSize={100 * 1024 ** 2} // 100MB max size
                                        accept={{
                                            "video/mp4": [".mp4"],
                                            "video/quicktime": [".mov"],
                                            "video/x-msvideo": [".avi"],
                                            "video/webm": [".webm"],
                                        }}
                                        description="MP4, MOV, AVI, WebM (max 100MB)"
                                        title="Drag video or click to select"
                                        style={{ maxWidth: "560px", width: "100%" }}
                                        mb="lg"
                                    />
                                )
                                : (
                                    <Stack
                                        w="100%"
                                        maw="560px"
                                        mb="lg"
                                        className={classes.uploadedVideoPreview}
                                    >
                                        <Paper withBorder radius="md">
                                            <Stack gap="xs">
                                                <div>
                                                    <video
                                                        src={videoUrl || ""}
                                                        controls
                                                        style={{
                                                            width: "100%",
                                                            borderRadius: "var(--mantine-radius-md)",
                                                        }}
                                                    />
                                                </div>
                                                <Group justify="space-between" align="center" wrap="nowrap">
                                                    <Text size="sm" c="gray.9" fw={500}>
                                                        {selectedFile.name}
                                                        {" "}
                                                        (
                                                        {Math.round(selectedFile.size / 1024 / 1024)}
                                                        {" "}
                                                        MB)
                                                    </Text>
                                                    <Button
                                                        variant="primary"
                                                        danger
                                                        size="sm"
                                                        onClick={() => {
                                                            setSelectedFile(null)
                                                            setVideoUrl(null)
                                                        }}
                                                    >
                                                        <TrashFarFAIcon />
                                                    </Button>
                                                </Group>
                                            </Stack>
                                        </Paper>
                                    </Stack>
                                )
                        }

                        <Stack maw="560px" w="100%" align="center">
                            {!isSaved
                                ? (
                                    <>
                                        {!showTextArea
                                            ? (
                                                <Button
                                                    variant="secondary"
                                                    onClick={() => setShowTextArea(true)}
                                                    leftSection={<PlusFarFAIcon />}
                                                >
                                                    Add text
                                                </Button>
                                            )
                                            : (
                                                <Stack w="100%" gap="xs">
                                                    <TextField
                                                        label="Story description"
                                                        multiline
                                                        minRows={3}
                                                        maxRows={6}
                                                        value={textValue}
                                                        placeholder="Write your story description..."
                                                        onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => setTextValue(event.target.value)}
                                                    />
                                                    <Group justify="flex-end" gap="xs">
                                                        <Button
                                                            variant="tertiary"
                                                            onClick={() => {
                                                                setShowTextArea(false)
                                                                setTextValue("")
                                                            }}
                                                        >
                                                            Cancel
                                                        </Button>
                                                        <Button
                                                            variant="primary"
                                                            onClick={() => {
                                                                console.log("Saved text:", textValue)
                                                                setShowTextArea(false)
                                                                setIsSaved(true)
                                                            }}
                                                        >
                                                            Save
                                                        </Button>
                                                    </Group>
                                                </Stack>
                                            )}
                                    </>
                                )
                                : (
                                    <>
                                        {isEditing
                                            ? (
                                                <Stack w="100%" gap="xs">
                                                    <TextField
                                                        label="Story description"
                                                        multiline
                                                        minRows={3}
                                                        maxRows={6}
                                                        value={textValue}
                                                        onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => setTextValue(event.target.value)}
                                                    />
                                                    <Group justify="flex-end" gap="xs">
                                                        <Button
                                                            variant="tertiary"
                                                            onClick={() => {
                                                                setIsEditing(false)
                                                            }}
                                                        >
                                                            Cancel
                                                        </Button>
                                                        <Button
                                                            variant="primary"
                                                            onClick={() => {
                                                                setIsEditing(false)
                                                            }}
                                                            disabled={!textValue.trim()}
                                                        >
                                                            Save
                                                        </Button>
                                                    </Group>
                                                </Stack>
                                            )
                                            : (
                                                <Stack w="100%">
                                                    <Paper withBorder className={classes.savedText}>
                                                        <Stack gap="xs">
                                                            <Text>{textValue}</Text>
                                                            <Group justify="flex-end" gap="xs">
                                                                <Button
                                                                    variant="primary"
                                                                    onClick={() => setIsEditing(true)}
                                                                >
                                                                    <i className="fa-regular fa-pen-to-square" />
                                                                </Button>
                                                                <Button
                                                                    variant="primary"
                                                                    danger={true}
                                                                    onClick={() => setIsDeleteModalOpen(true)}
                                                                >
                                                                    <TrashFarFAIcon />
                                                                </Button>
                                                                <Modal
                                                                    opened={isDeleteModalOpen}
                                                                    onClose={() => setIsDeleteModalOpen(false)}
                                                                    variant="danger"
                                                                    title="Delete text"
                                                                    transition="fade"
                                                                    message="Are you sure you want to delete this text story? This action cannot be undone."
                                                                    onPrimaryAction={() => {
                                                                        setTextValue("")
                                                                        setIsSaved(false)
                                                                        setIsEditing(false)
                                                                        setIsDeleteModalOpen(false)
                                                                    }}
                                                                    onSecondaryAction={() => setIsDeleteModalOpen(false)}
                                                                    children={undefined}
                                                                />
                                                            </Group>
                                                        </Stack>
                                                    </Paper>
                                                </Stack>
                                            )}
                                    </>
                                )}
                        </Stack>

                        <Stack mt="xxl" w="100%" align="center">
                            <Button
                                variant="accent"
                                size="lg"
                                onClick={() => console.log("Submit story")}
                                rightSection={<ArrowRightFarFAIcon />}
                                className={classes.submitStoryButton}
                            >
                                Submit story
                            </Button>
                        </Stack>
                    </Flex>
                </Stack>
            </Stack>
            <Container className={classes.container}>
                {/* Footer */}
                <footer className={classes.footer}>
                    <Grid pb="xxl">
                        <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
                            <Stack gap="md" align="flex-start" maw="280px">
                                <img alt="Company Logo" height="24px" src="../logo.svg" />
                                <Text c="gray.7" size="xs">
                                    Your company description goes here. Share your mission and vision with your audience.
                                </Text>
                            </Stack>
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
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
                        <Grid.Col span={{ base: 12, sm: 12, md: 5 }}>
                            <Stack gap="md">
                                <Text fw={500} c="gray.9">Newsletter</Text>
                                <Stack gap="xs">
                                    <Text c="gray.7" size="xs">Subscribe to our newsletter for updates</Text>
                                    <Group pos="relative">
                                        <TextField
                                            placeholder="Enter your email"
                                            style={{ flex: 1 }}
                                            label={undefined}
                                            styles={{ input: { height: "48px" } }}
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
                            </Stack>
                        </Grid.Col>
                    </Grid>
                    <Divider styles={{ root: { borderColor: "var(--color-gray-3)" } }}></Divider>
                    <Flex py="xl" justify="space-between" wrap="wrap" gap="md">
                        <Stack>
                            <Text c="gray.7" size="xs">© 2023 Company Brand. All rights reserved.</Text>
                        </Stack>
                        <Flex align="center" gap="xs">
                            <Text c="gray.7" size="xs">Powered by</Text>
                            <a target="_blank" href="https://quorum.us">
                                <img alt="Company Logo" height="16px" src="https://www.quorum.us/wp-content/uploads/2020/06/Quorum_full_color_dark-1-640x147.png" />
                            </a>
                        </Flex>
                    </Flex>
                </footer>
            </Container>
        </Stack>
    )
}
