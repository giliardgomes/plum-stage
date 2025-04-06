import { Flex, Box, Badge } from "@mantine/core"
import { Select } from "@/components/Select"
import { Avatar } from "@/components/Avatar"
import { SearchBar } from "@/components/SearchBar"
import { BellFarFAIcon, CircleQuestionFarFAIcon } from "@/components/Icons"
import { QLogo } from "@/components/Icons"
import { Button } from "@/components/Button"
import { Menu } from "@/components/Menu"

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
                    <SearchBar placeholder="Search anything" onFavorite={() => console.log("Favorite clicked!")} />
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
                                    <CircleQuestionFarFAIcon />
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
                                variant="tertiary"
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
