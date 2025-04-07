import { Flex, Box, Text, Stack, Group } from "@mantine/core"
import { Select } from "@/components/Select"
import { Avatar } from "@/components/Avatar"
import { SearchPopdown } from "@/components/SearchPopdown"
import {
    BellFarFAIcon,
    PlusFarFAIcon,
    StarFarFAIcon,
    UserFarFAIcon,
    XMarkFarFAIcon,
} from "@/components/Icons"
import { QLogo } from "@/components/Icons"
import { Button } from "@/components/Button"
import { Menu } from "@/components/Menu"
import { Tabs } from "@/components/Tabs"
import { Tile } from "@/components/Tile"
import { Badge } from "@/components/Badge"
import { useState } from "react"
import { SearchBar } from "@/components/SearchBar"

import classes from "./TopNav.module.css"

export interface TopNavProps {
    /** Set a static selector for engagement tracking with third party tools (ie: Pendo) */
    "data-plum-id"?: string
    /** URL for the company logo */
    logoUrl: string
    /** Alt text for the company logo */
    logoAlt?: string
    /** Homepage URL for logo link */
    homeUrl?: string
    /** Data for the organization selector */
    organizations: { label: string, value: string }[]
    /** Current selected organization */
    selectedOrg?: string
    /** Loading state for organizations data */
    isLoading?: boolean
    /** Callback when organization changes */
    onOrgChange?: (value: string) => void
    /** User avatar URL */
    userAvatarUrl?: string
    /** Number of unread notifications */
    notificationCount?: number
    /** Callback when notification button is clicked */
    onNotificationClick?: () => void
    /** Callback when settings is clicked */
    onSettingsClick?: () => void
    /** Callback when help is clicked */
    onHelpClick?: () => void
    /** Callback when logout is clicked */
    onLogoutClick?: () => void
    /** Callback when manage users is clicked */
    onManageUsersClick?: () => void
    /** Callback when manage organizations is clicked */
    onManageOrganizationsClick?: () => void
    /** Callback when downloads is clicked */
    onDownloadsClick?: () => void
    /** Callback when help center is clicked */
    onHelpCenterClick?: () => void
    /** Callback when contact us is clicked */
    onContactUsClick?: () => void
    /** Callback when launch chat is clicked */
    onLaunchChatClick?: () => void
    /** Callback when what's new is clicked */
    onWhatsNewClick?: () => void
}

export const TopNav = ({
    logoUrl,
    logoAlt = "Company logo",
    homeUrl = "/",
    organizations,
    selectedOrg = "entire-us",
    isLoading,
    onOrgChange,
    userAvatarUrl,
    notificationCount = 0,
    onNotificationClick,
    onSettingsClick,
    onHelpClick,
    onLogoutClick,
    onManageUsersClick,
    onManageOrganizationsClick,
    onDownloadsClick,
    ...rest
}: TopNavProps) => {
    const [opened, setOpened] = useState(false)
    return (
        <Box className={classes.root} {...rest}>
            <Flex align="center" justify="space-between" h="100%">
                <Flex align="center" gap="md" className={classes.leftSide}>
                    <a href={homeUrl} aria-label="Go to homepage">
                        <QLogo
                            size={32}
                            aria-hidden="true"
                        />
                    </a>
                    <Select
                        label=" "
                        data={[
                            { label: "Entire US", value: "entire-us" },
                            ...organizations,
                        ]}
                        value={selectedOrg}
                        onChange={(value) => value && onOrgChange?.(value)}
                        placeholder="Select organization"
                        disabled={isLoading}
                        aria-label="Select your organization"
                    />
                </Flex>

                <Flex align="center" gap="md" className={classes.center}>
                    <SearchPopdown
                        opened={opened}
                        onOpenChange={setOpened}
                        target={(
                            <SearchBar
                                placeholder="Search anything"
                                onChange={(value) => console.log("Search:", value)}
                                onClick={() => setOpened(true)}
                            />
                        )}
                    >
                        <Flex w="100%" align="center" gap="md" direction="column">
                            <Stack gap="md" px="0" ml="auto" mr="auto" pt="5rem" w="100%" align="center">
                                <Text w="100%" px="10rem" fw={500} size="xl" c="gray.9">Search</Text>
                                <Tabs defaultValue="recent" w="100%">
                                    <Tabs.List px="10rem" maw="100%">
                                        <Tabs.Tab value="recent">Recent</Tabs.Tab>
                                        <Tabs.Tab value="favorites">Favorites</Tabs.Tab>
                                        <Tabs.Tab value="datasets">Datasets</Tabs.Tab>
                                    </Tabs.List>

                                    <Tabs.Panel value="recent">
                                        <Stack gap="md" p="md" maw="100%" px="10rem">
                                            <Stack gap="xs">
                                                <Flex gap="md" align="center" p="xs" className={classes.officialRow}>
                                                    <Avatar
                                                        src="https://www.congress.gov/img/member/s000033.jpg"
                                                        alt="Bernie Sanders"
                                                        size="lg"
                                                    />
                                                    <Stack gap={0}>
                                                        <Flex align="center" gap="xs">
                                                            <Text fw={500} c="gray.9" size="md">Bernie Sanders</Text>
                                                            <Badge variant="filled" color="blue" size="xs">Democrat</Badge>
                                                        </Flex>
                                                        <Text c="gray.7" size="sm">Senator, Vermont</Text>
                                                    </Stack>
                                                    <Group gap="xs" className={classes.officialActions}>
                                                        <Button variant="tertiary" size="sm" aria-label="Add to favorites">
                                                            <StarFarFAIcon />
                                                        </Button>
                                                        <Button variant="tertiary" size="sm" aria-label="Remove">
                                                            <XMarkFarFAIcon />
                                                        </Button>
                                                    </Group>
                                                </Flex>

                                                <Flex gap="md" align="center" p="xs" className={classes.officialRow}>
                                                    <Avatar
                                                        src="https://www.congress.gov/img/member/y000064.jpg"
                                                        alt="Todd Young"
                                                        size="lg"
                                                    />
                                                    <Stack gap={0}>
                                                        <Flex align="center" gap="xs">
                                                            <Text fw={500} c="gray.9" size="md">Todd Young</Text>
                                                            <Badge variant="filled" color="red" size="xs">Republican</Badge>
                                                        </Flex>
                                                        <Text c="gray.7" size="sm">Senator, Indiana</Text>
                                                    </Stack>
                                                    <Group gap="xs" className={classes.officialActions}>
                                                        <Button variant="tertiary" size="sm" aria-label="Add to favorites">
                                                            <StarFarFAIcon />
                                                        </Button>
                                                        <Button variant="tertiary" size="sm" aria-label="Remove">
                                                            <XMarkFarFAIcon />
                                                        </Button>
                                                    </Group>
                                                </Flex>

                                                <Flex gap="md" align="center" p="xs" className={classes.officialRow}>
                                                    <Avatar
                                                        src="https://www.congress.gov/img/member/p000197.jpg"
                                                        alt="Nancy Pelosi"
                                                        size="lg"
                                                    />
                                                    <Stack gap={0}>
                                                        <Flex align="center" gap="xs">
                                                            <Text fw={500} c="gray.9" size="md">Nancy Pelosi</Text>
                                                            <Badge variant="filled" color="blue" size="xs">Democrat</Badge>
                                                        </Flex>
                                                        <Text c="gray.7" size="sm">Representative, California</Text>
                                                    </Stack>
                                                    <Group gap="xs" className={classes.officialActions}>
                                                        <Button variant="tertiary" size="sm" aria-label="Add to favorites">
                                                            <StarFarFAIcon />
                                                        </Button>
                                                        <Button variant="tertiary" size="sm" aria-label="Remove">
                                                            <XMarkFarFAIcon />
                                                        </Button>
                                                    </Group>
                                                </Flex>

                                                <Flex gap="md" align="center" p="xs" className={classes.officialRow}>
                                                    <Avatar
                                                        src="https://www.congress.gov/img/member/s000148.jpg"
                                                        alt="Chuck Schumer"
                                                        size="lg"
                                                    />
                                                    <Stack gap={0}>
                                                        <Flex align="center" gap="xs">
                                                            <Text fw={500} c="gray.9" size="md">Chuck Schumer</Text>
                                                            <Badge variant="filled" color="blue" size="xs">Democrat</Badge>
                                                        </Flex>
                                                        <Text c="gray.7" size="sm">Senate Majority Leader</Text>
                                                    </Stack>
                                                    <Group gap="xs" className={classes.officialActions}>
                                                        <Button variant="tertiary" size="sm" aria-label="Add to favorites">
                                                            <StarFarFAIcon />
                                                        </Button>
                                                        <Button variant="tertiary" size="sm" aria-label="Remove">
                                                            <XMarkFarFAIcon />
                                                        </Button>
                                                    </Group>
                                                </Flex>

                                                <Flex gap="md" align="center" p="xs" className={classes.officialRow}>
                                                    <Avatar
                                                        src="https://www.congress.gov/img/member/m000314.jpg"
                                                        alt="Kevin McCarthy"
                                                        size="lg"
                                                    />
                                                    <Stack gap={0}>
                                                        <Flex align="center" gap="xs">
                                                            <Text fw={500} c="gray.9" size="md">Kevin McCarthy</Text>
                                                            <Badge variant="filled" color="red" size="xs">Republican</Badge>
                                                        </Flex>
                                                        <Text c="gray.7" size="sm">House Minority Leader</Text>
                                                    </Stack>
                                                    <Group gap="xs" className={classes.officialActions}>
                                                        <Button variant="tertiary" size="sm" aria-label="Add to favorites">
                                                            <StarFarFAIcon />
                                                        </Button>
                                                        <Button variant="tertiary" size="sm" aria-label="Remove">
                                                            <XMarkFarFAIcon />
                                                        </Button>
                                                    </Group>
                                                </Flex>

                                                <Flex gap="md" align="center" p="xs" className={classes.officialRow}>
                                                    <Avatar
                                                        src="https://www.congress.gov/img/member/w000187.jpg"
                                                        alt="Elizabeth Warren"
                                                        size="lg"
                                                    />
                                                    <Stack gap={0}>
                                                        <Flex align="center" gap="xs">
                                                            <Text fw={500} c="gray.9" size="md">Elizabeth Warren</Text>
                                                            <Badge variant="filled" color="blue" size="xs">Democrat</Badge>
                                                        </Flex>
                                                        <Text c="gray.7" size="sm">Senator, Massachusetts</Text>
                                                    </Stack>
                                                    <Group gap="xs" className={classes.officialActions}>
                                                        <Button variant="tertiary" size="sm" aria-label="Add to favorites">
                                                            <StarFarFAIcon />
                                                        </Button>
                                                        <Button variant="tertiary" size="sm" aria-label="Remove">
                                                            <XMarkFarFAIcon />
                                                        </Button>
                                                    </Group>
                                                </Flex>

                                                <Flex gap="md" align="center" p="xs" className={classes.officialRow}>
                                                    <Avatar
                                                        src="https://www.congress.gov/img/member/c001056.jpg"
                                                        alt="Ted Cruz"
                                                        size="lg"
                                                    />
                                                    <Stack gap={0}>
                                                        <Flex align="center" gap="xs">
                                                            <Text fw={500} c="gray.9" size="md">Ted Cruz</Text>
                                                            <Badge variant="filled" color="red" size="xs">Republican</Badge>
                                                        </Flex>
                                                        <Text c="gray.7" size="sm">Senator, Texas</Text>
                                                    </Stack>
                                                    <Group gap="xs" className={classes.officialActions}>
                                                        <Button variant="tertiary" size="sm" aria-label="Add to favorites">
                                                            <StarFarFAIcon />
                                                        </Button>
                                                        <Button variant="tertiary" size="sm" aria-label="Remove">
                                                            <XMarkFarFAIcon />
                                                        </Button>
                                                    </Group>
                                                </Flex>

                                                <Flex gap="md" align="center" p="xs" className={classes.officialRow}>
                                                    <Avatar
                                                        src="https://www.congress.gov/img/member/o000172.jpg"
                                                        alt="Alexandria Ocasio-Cortez"
                                                        size="lg"
                                                    />
                                                    <Stack gap={0}>
                                                        <Flex align="center" gap="xs">
                                                            <Text fw={500} c="gray.9" size="md">Alexandria Ocasio-Cortez</Text>
                                                            <Badge variant="filled" color="blue" size="xs">Democrat</Badge>
                                                        </Flex>
                                                        <Text c="gray.7" size="sm">Representative, New York</Text>
                                                    </Stack>
                                                    <Group gap="xs" className={classes.officialActions}>
                                                        <Button variant="tertiary" size="sm" aria-label="Add to favorites">
                                                            <StarFarFAIcon />
                                                        </Button>
                                                        <Button variant="tertiary" size="sm" aria-label="Remove">
                                                            <XMarkFarFAIcon />
                                                        </Button>
                                                    </Group>
                                                </Flex>
                                            </Stack>
                                        </Stack>
                                    </Tabs.Panel>

                                    <Tabs.Panel value="favorites">
                                        <Stack gap="md" p="md" maw="100%" px="10rem">
                                            <Stack gap="xs">
                                                <Flex gap="md" align="center" p="xs" className={classes.officialRow}>
                                                    <Avatar
                                                        src="https://www.congress.gov/img/member/s000033.jpg"
                                                        alt="Bernie Sanders"
                                                        size="lg"
                                                    />
                                                    <Stack gap={0}>
                                                        <Flex align="center" gap="xs">
                                                            <Text fw={500} c="gray.9" size="md">Bernie Sanders</Text>
                                                            <Badge variant="filled" color="blue" size="xs">Democrat</Badge>
                                                        </Flex>
                                                        <Text c="gray.7" size="sm">Senator, Vermont</Text>
                                                    </Stack>
                                                    <Group gap="xs" className={classes.officialActions}>
                                                        <Button variant="tertiary" size="sm" aria-label="Remove from favorites">
                                                            <StarFarFAIcon filled />
                                                        </Button>
                                                        <Button variant="tertiary" size="sm" aria-label="Remove">
                                                            <XMarkFarFAIcon />
                                                        </Button>
                                                    </Group>
                                                </Flex>

                                                <Flex gap="md" align="center" p="xs" className={classes.officialRow}>
                                                    <Avatar
                                                        src="https://www.congress.gov/img/member/o000172.jpg"
                                                        alt="Alexandria Ocasio-Cortez"
                                                        size="lg"
                                                    />
                                                    <Stack gap={0}>
                                                        <Flex align="center" gap="xs">
                                                            <Text fw={500} c="gray.9" size="md">Alexandria Ocasio-Cortez</Text>
                                                            <Badge variant="filled" color="blue" size="xs">Democrat</Badge>
                                                        </Flex>
                                                        <Text c="gray.7" size="sm">Representative, New York</Text>
                                                    </Stack>
                                                    <Group gap="xs" className={classes.officialActions}>
                                                        <Button variant="tertiary" size="sm" aria-label="Remove from favorites">
                                                            <StarFarFAIcon filled />
                                                        </Button>
                                                        <Button variant="tertiary" size="sm" aria-label="Remove">
                                                            <XMarkFarFAIcon />
                                                        </Button>
                                                    </Group>
                                                </Flex>

                                                <Flex gap="md" align="center" p="xs" className={classes.officialRow}>
                                                    <Avatar
                                                        src="https://www.congress.gov/img/member/y000064.jpg"
                                                        alt="Todd Young"
                                                        size="lg"
                                                    />
                                                    <Stack gap={0}>
                                                        <Flex align="center" gap="xs">
                                                            <Text fw={500} c="gray.9" size="md">Todd Young</Text>
                                                            <Badge variant="filled" color="red" size="xs">Republican</Badge>
                                                        </Flex>
                                                        <Text c="gray.7" size="sm">Senator, Indiana</Text>
                                                    </Stack>
                                                    <Group gap="xs" className={classes.officialActions}>
                                                        <Button variant="tertiary" size="sm" aria-label="Remove from favorites">
                                                            <StarFarFAIcon filled />
                                                        </Button>
                                                        <Button variant="tertiary" size="sm" aria-label="Remove">
                                                            <XMarkFarFAIcon />
                                                        </Button>
                                                    </Group>
                                                </Flex>

                                                <Flex gap="md" align="center" p="xs" className={classes.officialRow}>
                                                    <Avatar
                                                        src="https://www.congress.gov/img/member/w000187.jpg"
                                                        alt="Elizabeth Warren"
                                                        size="lg"
                                                    />
                                                    <Stack gap={0}>
                                                        <Flex align="center" gap="xs">
                                                            <Text fw={500} c="gray.9" size="md">Elizabeth Warren</Text>
                                                            <Badge variant="filled" color="blue" size="xs">Democrat</Badge>
                                                        </Flex>
                                                        <Text c="gray.7" size="sm">Senator, Massachusetts</Text>
                                                    </Stack>
                                                    <Group gap="xs" className={classes.officialActions}>
                                                        <Button variant="tertiary" size="sm" aria-label="Remove from favorites">
                                                            <StarFarFAIcon filled />
                                                        </Button>
                                                        <Button variant="tertiary" size="sm" aria-label="Remove">
                                                            <XMarkFarFAIcon />
                                                        </Button>
                                                    </Group>
                                                </Flex>

                                                {/* Empty state */}
                                                {false && (
                                                    <Stack align="center" justify="center" h={200}>
                                                        <Text c="gray.7">No favorites yet</Text>
                                                        <Text c="gray.7" size="sm">Items you mark as favorite will appear here</Text>
                                                    </Stack>
                                                )}
                                            </Stack>
                                        </Stack>
                                    </Tabs.Panel>

                                    <Tabs.Panel value="datasets">
                                        <Stack gap="md" p="md" maw="100%" px="10rem" align="center" styles={{ root: { flexDirection: "row", flexWrap: "wrap" } }}>
                                            <Tile
                                                variant="secondary"
                                                size="md"
                                                icon={<UserFarFAIcon />}
                                            >
                                                Officials
                                            </Tile>
                                            <Tile
                                                variant="secondary"
                                                size="md"
                                                icon={<UserFarFAIcon />}
                                            >
                                                Bills
                                            </Tile>
                                            <Tile
                                                variant="secondary"
                                                size="md"
                                                icon={<UserFarFAIcon />}
                                            >
                                                Documents
                                            </Tile>
                                            <Tile
                                                variant="secondary"
                                                size="md"
                                                icon={<UserFarFAIcon />}
                                            >
                                                Staffers
                                            </Tile>
                                            <Tile
                                                variant="secondary"
                                                size="md"
                                                icon={<UserFarFAIcon />}
                                            >
                                                Contacts
                                            </Tile>
                                            <Tile
                                                variant="secondary"
                                                size="md"
                                                icon={<UserFarFAIcon />}
                                            >
                                                Notes
                                            </Tile>
                                            <Tile
                                                variant="secondary"
                                                size="md"
                                                icon={<UserFarFAIcon />}
                                            >
                                                Grassroots
                                            </Tile>
                                            <Tile
                                                variant="secondary"
                                                size="md"
                                                icon={<UserFarFAIcon />}
                                            >
                                                Official Events
                                            </Tile>
                                            <Tile
                                                variant="secondary"
                                                size="md"
                                                icon={<UserFarFAIcon />}
                                            >
                                                Votes
                                            </Tile>
                                            <Tile
                                                variant="secondary"
                                                size="md"
                                                icon={<UserFarFAIcon />}
                                            >
                                                Amendments
                                            </Tile>
                                            <Tile
                                                variant="secondary"
                                                size="md"
                                                icon={<UserFarFAIcon />}
                                            >
                                                Regulations
                                            </Tile>
                                            <Tile
                                                variant="secondary"
                                                size="md"
                                                icon={<UserFarFAIcon />}
                                            >
                                                Committees
                                            </Tile>
                                        </Stack>
                                    </Tabs.Panel>
                                </Tabs>
                            </Stack>
                        </Flex>
                    </SearchPopdown>
                </Flex>

                <Flex align="center" gap="sm" className={classes.rightSide}>
                    <Flex pos="relative" gap="xxs">
                        <Menu>
                            <Menu.Target>
                                <Button
                                    variant="tertiary"
                                    size="md"
                                    aria-label="Help"
                                >
                                    <UserFarFAIcon />
                                </Button>
                            </Menu.Target>
                            <Menu.Dropdown>
                                <Menu.Item onClick={onHelpClick}>Help center</Menu.Item>
                                <Menu.Item onClick={onHelpClick}>Contact us</Menu.Item>
                                <Menu.Item onClick={onHelpClick}>Launch chat</Menu.Item>
                                <Menu.Item onClick={onHelpClick}>What's new</Menu.Item>
                            </Menu.Dropdown>
                        </Menu>
                        <Button
                            variant="tertiary"
                            size="md"
                            onClick={onNotificationClick}
                            aria-label={`Notifications ${notificationCount > 0 ? `(${notificationCount} unread)` : ""}`}
                        >
                            <BellFarFAIcon />
                        </Button>
                        {notificationCount > 0 && (
                            <Badge
                                className={classes.notificationBadge}
                                size="sm"
                                variant="filled"
                            >
                                {notificationCount}
                            </Badge>
                        )}
                    </Flex>
                    <Menu>
                        <Menu.Target>
                            <Avatar
                                src={userAvatarUrl}
                                children="User"
                                alt="User avatar"
                            />
                        </Menu.Target>
                        <Menu.Dropdown className={classes.userDropdown}>
                            <Flex gap="0" direction="column" className={classes.userMenu}>
                                <span>Joshua Johnson</span>
                                <span>joshua.johnson@company.org</span>
                            </Flex>
                            <Menu.Item onClick={onSettingsClick}>Settings</Menu.Item>
                            <Menu.Item onClick={onManageUsersClick}>Manage users</Menu.Item>
                            <Menu.Item onClick={onManageOrganizationsClick}>Manage organizations</Menu.Item>
                            <Menu.Item onClick={onDownloadsClick}>Download & Uploads</Menu.Item>
                            <Menu.Divider />
                            <Menu.Item onClick={onLogoutClick} data-danger>Logout</Menu.Item>
                        </Menu.Dropdown>
                    </Menu>
                </Flex>
            </Flex>
        </Box>
    )
}
