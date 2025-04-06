import { forwardRef } from "react"
import { Box, Stack, Text, UnstyledButton } from "@mantine/core"
import {
    PlusFarFAIcon,
    HomeFarFAIcon,
    UserCircleFarFAIcon,
    EnvelopeOpenFarFAIcon,
    LocationFarFAIcon,
    FolderFarFAIcon,
    CommentFarFAIcon,
    FileTextFarFAIcon,
    EnvelopeFarFAIcon,
    ReceiptFarFAIcon,
} from "@/components/Icons"
import classes from "./Sidebar.module.css"
import { Menu } from "@/components/Menu"

interface NavItemProps {
    icon: React.ReactNode
    label: string
    active?: boolean
    onClick?: () => void
    className?: string
}

const NavItem = ({ icon, label, active, onClick, className }: NavItemProps) => (
    <UnstyledButton
        className={`${classes.navItem} ${className || ""}`}
        data-active={active}
        onClick={onClick}
    >
        <div className={classes.iconWrapper}>
            {icon}
        </div>
        <Text className={classes.navItemLabel}>{label}</Text>
    </UnstyledButton>
)

export interface SidebarProps {
    "data-plum-id"?: string
    activeItem?: string
    onItemClick?: (item: string) => void
    width?: number | string
}

export const Sidebar = forwardRef<HTMLDivElement, SidebarProps>(({
    activeItem = "home",
    onItemClick,
    ...rest
}, ref) => {
    const handleClick = (item: string) => {
        onItemClick?.(item)
    }

    return (
        <Box
            ref={ref}
            className={classes.root}
            {...rest}
        >
            <Stack className={classes.content}>
                <Menu>
                    <Menu.Target>
                        <NavItem
                            className={classes.newButton}
                            icon={<PlusFarFAIcon />}
                            label="New"
                            active={activeItem === "new"}
                        />
                    </Menu.Target>
                    <Menu.Dropdown>
                        <Menu.Item
                            leftSection={<FileTextFarFAIcon />}
                            onClick={() => handleClick("interaction")}
                        >
                            Interaction
                        </Menu.Item>
                        <Menu.Item
                            leftSection={<EnvelopeFarFAIcon />}
                            onClick={() => handleClick("email")}
                        >
                            Email
                        </Menu.Item>
                        <Menu.Item
                            leftSection={<CommentFarFAIcon />}
                            onClick={() => handleClick("text")}
                        >
                            Text
                        </Menu.Item>
                        <Menu.Item
                            leftSection={<ReceiptFarFAIcon />}
                            onClick={() => handleClick("text")}
                        >
                            Receipt
                        </Menu.Item>
                    </Menu.Dropdown>
                </Menu>
                <NavItem
                    icon={<HomeFarFAIcon />}
                    label="Home"
                    onClick={() => handleClick("home")}
                    active={activeItem === "home"}
                />
                <NavItem
                    icon={<UserCircleFarFAIcon />}
                    label="Contacts"
                    onClick={() => handleClick("contacts")}
                    active={activeItem === "contacts"}
                />
                <NavItem
                    icon={<EnvelopeOpenFarFAIcon />}
                    label="Outbox"
                    onClick={() => handleClick("outbox")}
                    active={activeItem === "outbox"}
                />
                <NavItem
                    icon={<LocationFarFAIcon />}
                    label="Tracking"
                    onClick={() => handleClick("tracking")}
                    active={activeItem === "tracking"}
                />
                <NavItem
                    icon={<FolderFarFAIcon />}
                    label="Reporting"
                    onClick={() => handleClick("reporting")}
                    active={activeItem === "reporting"}
                />
                <NavItem
                    icon={<CommentFarFAIcon />}
                    label="Texting"
                    onClick={() => handleClick("texting")}
                    active={activeItem === "texting"}
                />
            </Stack>
        </Box>
    )
})

Sidebar.displayName = "Sidebar"
