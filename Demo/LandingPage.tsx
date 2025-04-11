import classes from "./LandingPage.module.css"
import { Container, Stack, Paper, Title, Flex, Grid, Text, Group, Divider, Box, Transition } from "@mantine/core"
import { Label, PlumProvider } from "../lib/main"
import { useState } from "react"
import { Notification } from "../lib/components/Notification"
import { Checkbox } from "../lib/components/Checkbox"

// Import Mantine core styles first
import "@mantine/core/styles.css"

// Import Plum theme
import { plumTheme, plumVariables } from "../src/theme"

// Import Plum component styles AFTER Mantine core styles
import "../lib/components/Button/Button.module.css"
import "../lib/components/Switch/Switch.module.css"
import "../lib/components/TextField/TextField.module.css"
import "../lib/components/Alert/Alert.module.css"
import "../lib/components/Dialog/Dialog.module.css"
import "../lib/components/Tabs/Tabs.module.css"
import "../lib/components/Tile/Tile.module.css"
import "../lib/components/Label/Label.module.css"
import "../lib/components/Avatar/Avatar.module.css"
import "../lib/components/Notification/Notification.module.css"
import "../lib/components/SelectableTag/SelectableTag.module.css"
import "../lib/components/SegmentedControl/SegmentedControl.module.css"
import "../lib/components/Table/Table.module.css"
import "../lib/components/Link/Link.module.css"
import "../lib/components/Pagination/Pagination.module.css"

// Import Plum components
import { Button } from "../lib/components/Button"
import { Switch } from "../lib/components/Switch"
import { TextField } from "../lib/components/TextField"
import { Alert } from "../lib/components/Alert"
import { Tabs } from "../lib/components/Tabs"
import { Tile } from "../lib/components/Tile"
import {
    CogFarFAIcon,
    CircleInfoFarFAIcon,
    EnvelopeFarFAIcon,
    FileAltFarFAIcon,
    CommentFarFAIcon,
} from "../lib/components/Icons"
import { Select } from "../lib/components/Select"
import { MultiSelect } from "../lib/components/MultiSelect"
import { Radio } from "../lib/components/Radio"
import { Avatar } from "../lib/components/Avatar"
import { TopNav } from "../lib/components/TopNav"
import { PageNavigation } from "../lib/components/PageNavigation"
import { Sidebar } from "../lib/components/Sidebar"
import { ActionBar } from "../lib/components/ActionBar"
import { Tooltip } from "../lib/components/Tooltip"
import React from "react"
import { SelectableTag } from "../lib/components/SelectableTag"
import { SegmentedControl } from "../lib/components/SegmentedControl"
import { FileDropzone } from "../lib/components/FileDropzone"
import { Table, TableActions } from "../lib/components/Table"
import { Link } from "../lib/components/Link"
import { Pagination } from "../lib/components/Pagination"
import { Modal } from "../lib/components/Modal"
import { HeadingActions } from "../lib/components/HeadingActions"

function TableErrorFallback({ error, resetErrorBoundary }) {
    return (
        <div>
            <Text c="gray.7">There was an error loading the table. Please try again.</Text>
            <Button variant="secondary" onClick={resetErrorBoundary}>Retry</Button>
        </div>
    )
}

export function LandingPage() {
    const [currentTab, setCurrentTab] = useState("profile")
    const [show2FASetup, setShow2FASetup] = useState(false)
    const [axiosAccess, setAxiosAccess] = useState(true)
    const [outboxAccess, setOutboxAccess] = useState(true)
    const [sendFromAnyEmail, setSendFromAnyEmail] = useState(true)
    const [viewOtherOutbox, setViewOtherOutbox] = useState(true)
    const [orgContactsAccess, setOrgContactsAccess] = useState(true)
    const [teamBasedContacts, setTeamBasedContacts] = useState(false)
    const [notesAccess, setNotesAccess] = useState(true)
    const [customFieldsAccess, setCustomFieldsAccess] = useState(true)
    const [textingAccess, setTextingAccess] = useState(true)
    const [viewPreviousTexts, setViewPreviousTexts] = useState(true)
    const [actionCenterAccess, setActionCenterAccess] = useState(true)
    const [actionCenterSettings, setActionCenterSettings] = useState(true)
    const [teamPermissionVisible, setTeamPermissionVisible] = useState(true)
    const [showSuccessNotification, setShowSuccessNotification] = useState(false)
    const [showWarningNotification, setShowWarningNotification] = useState(false)
    const [selectedProducts, setSelectedProducts] = useState<string[]>(["figma"])
    const [firstName, setFirstName] = useState("Joshua")
    const [lastName, setLastName] = useState("Johnson")
    const [email, setEmail] = useState("joshua.johnson@company.org")
    const [phone, setPhone] = useState("(555) 123-4567")
    const [jobTitle, setJobTitle] = useState("Senior Software Engineer")
    const [department, setDepartment] = useState("product")
    const [skills, setSkills] = useState<string[]>(["js", "ts", "react"])
    const [selectedHelpOption, setSelectedHelpOption] = useState("live")
    const [opened, setOpened] = useState(false)
    const [switchAccountModalOpened, setSwitchAccountModalOpened] = useState(false)
    const availableAccounts = [
        {
            name: "Joshua Johnson",
            email: "joshua.johnson@company.org",
            avatar: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png",
            current: true,
        },
        {
            name: "Sarah Chen",
            email: "sarah.chen@personal.com",
            avatar: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png",
            current: false,
        },
        {
            name: "Adam Smith",
            email: "adam.smith@client.com",
            avatar: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png",
            current: false,
        },
    ]

    const handleSave = () => {
        console.log("Saving changes...")
        setShowSuccessNotification(true)
        // setTimeout(() => setShowSuccessNotification(false), 3000)
    }

    const handleCancel = () => {
        setShowWarningNotification(true)
    }

    function handleEditField(id: string): void {
        throw new Error("Function not implemented.")
    }

    const customFieldsData = [
        {
            fieldName: "Department",
            type: "Select",
            required: "Yes",
            visibility: "All users",
            id: "department",
        },
        {
            fieldName: "Employee ID",
            type: "Text",
            required: "Yes",
            visibility: "Admins only",
            id: "employee-id",
        },
        {
            fieldName: "Start date",
            type: "Date",
            required: "No",
            visibility: "All users",
            id: "start-date",
        },
        {
            fieldName: "Skills",
            type: "Multi-select",
            required: "No",
            visibility: "All users",
            id: "skills",
        },
        {
            fieldName: "Manager",
            type: "Select",
            required: "Yes",
            visibility: "Team leads",
            id: "manager",
        },
        {
            fieldName: "Office location",
            type: "Select",
            required: "Yes",
            visibility: "All users",
            id: "office-location",
        },
        {
            fieldName: "Project code",
            type: "Text",
            required: "Yes",
            visibility: "Project managers",
            id: "project-code",
        },
        {
            fieldName: "Certification",
            type: "Multi-select",
            required: "No",
            visibility: "HR only",
            id: "certification",
        },
        {
            fieldName: "Emergency contact",
            type: "Text",
            required: "Yes",
            visibility: "HR only",
            id: "emergency-contact",
        },
        {
            fieldName: "Work schedule",
            type: "Select",
            required: "Yes",
            visibility: "Team leads",
            id: "work-schedule",
        },
        {
            fieldName: "Training completed",
            type: "Multi-select",
            required: "No",
            visibility: "HR only",
            id: "training",
        },
        {
            fieldName: "Performance review date",
            type: "Date",
            required: "Yes",
            visibility: "Managers",
            id: "review-date",
        },
        {
            fieldName: "Equipment ID",
            type: "Text",
            required: "Yes",
            visibility: "IT admin",
            id: "equipment-id",
        },
        {
            fieldName: "Languages",
            type: "Multi-select",
            required: "No",
            visibility: "All users",
            id: "languages",
        },
        {
            fieldName: "Contract type",
            type: "Select",
            required: "Yes",
            visibility: "HR only",
            id: "contract-type",
        },
        {
            fieldName: "Benefits package",
            type: "Select",
            required: "Yes",
            visibility: "HR only",
            id: "benefits",
        },
        {
            fieldName: "Parking spot",
            type: "Text",
            required: "No",
            visibility: "All users",
            id: "parking",
        },
        {
            fieldName: "Security clearance",
            type: "Select",
            required: "Yes",
            visibility: "Security team",
            id: "security-clearance",
        },
        {
            fieldName: "Vacation days",
            type: "Text",
            required: "Yes",
            visibility: "Team leads",
            id: "vacation-days",
        },
        {
            fieldName: "Team name",
            type: "Select",
            required: "Yes",
            visibility: "All users",
            id: "team-name",
        },
        {
            fieldName: "Project assignments",
            type: "Multi-select",
            required: "Yes",
            visibility: "Project managers",
            id: "projects",
        },
        {
            fieldName: "Probation end date",
            type: "Date",
            required: "Yes",
            visibility: "HR only",
            id: "probation-end",
        },
        {
            fieldName: "Cost center",
            type: "Text",
            required: "Yes",
            visibility: "Finance team",
            id: "cost-center",
        },
        {
            fieldName: "Remote work status",
            type: "Select",
            required: "Yes",
            visibility: "All users",
            id: "remote-status",
        },
        {
            fieldName: "Performance goals",
            type: "Multi-select",
            required: "Yes",
            visibility: "Managers",
            id: "goals",
        },
        {
            fieldName: "Dietary restrictions",
            type: "Multi-select",
            required: "No",
            visibility: "Event planners",
            id: "dietary",
        },
        {
            fieldName: "Building access",
            type: "Multi-select",
            required: "Yes",
            visibility: "Security team",
            id: "building-access",
        },
        {
            fieldName: "Mentor",
            type: "Select",
            required: "No",
            visibility: "Team leads",
            id: "mentor",
        },
        {
            fieldName: "Previous employer",
            type: "Text",
            required: "No",
            visibility: "HR only",
            id: "prev-employer",
        },
        {
            fieldName: "Visa status",
            type: "Select",
            required: "Yes",
            visibility: "HR only",
            id: "visa-status",
        },
        {
            fieldName: "Department",
            type: "Select",
            required: "Yes",
            visibility: "All users",
            id: "department",
        },
        {
            fieldName: "Employee ID",
            type: "Text",
            required: "Yes",
            visibility: "Admins only",
            id: "employee-id",
        },
        {
            fieldName: "Start date",
            type: "Date",
            required: "No",
            visibility: "All users",
            id: "start-date",
        },
        {
            fieldName: "Skills",
            type: "Multi-select",
            required: "No",
            visibility: "All users",
            id: "skills",
        },
        {
            fieldName: "Manager",
            type: "Select",
            required: "Yes",
            visibility: "Team leads",
            id: "manager",
        },
        {
            fieldName: "Office location",
            type: "Select",
            required: "Yes",
            visibility: "All users",
            id: "office-location",
        },
        {
            fieldName: "Project code",
            type: "Text",
            required: "Yes",
            visibility: "Project managers",
            id: "project-code",
        },
        {
            fieldName: "Certification",
            type: "Multi-select",
            required: "No",
            visibility: "HR only",
            id: "certification",
        },
        {
            fieldName: "Emergency contact",
            type: "Text",
            required: "Yes",
            visibility: "HR only",
            id: "emergency-contact",
        },
        {
            fieldName: "Work schedule",
            type: "Select",
            required: "Yes",
            visibility: "Team leads",
            id: "work-schedule",
        },
        {
            fieldName: "Training completed",
            type: "Multi-select",
            required: "No",
            visibility: "HR only",
            id: "training",
        },
        {
            fieldName: "Performance review date",
            type: "Date",
            required: "Yes",
            visibility: "Managers",
            id: "review-date",
        },
        {
            fieldName: "Equipment ID",
            type: "Text",
            required: "Yes",
            visibility: "IT admin",
            id: "equipment-id",
        },
        {
            fieldName: "Languages",
            type: "Multi-select",
            required: "No",
            visibility: "All users",
            id: "languages",
        },
        {
            fieldName: "Contract type",
            type: "Select",
            required: "Yes",
            visibility: "HR only",
            id: "contract-type",
        },
        {
            fieldName: "Benefits package",
            type: "Select",
            required: "Yes",
            visibility: "HR only",
            id: "benefits",
        },
        {
            fieldName: "Parking spot",
            type: "Text",
            required: "No",
            visibility: "All users",
            id: "parking",
        },
        {
            fieldName: "Security clearance",
            type: "Select",
            required: "Yes",
            visibility: "Security team",
            id: "security-clearance",
        },
        {
            fieldName: "Vacation days",
            type: "Text",
            required: "Yes",
            visibility: "Team leads",
            id: "vacation-days",
        },
        {
            fieldName: "Team name",
            type: "Select",
            required: "Yes",
            visibility: "All users",
            id: "team-name",
        },
        {
            fieldName: "Project assignments",
            type: "Multi-select",
            required: "Yes",
            visibility: "Project managers",
            id: "projects",
        },
        {
            fieldName: "Probation end date",
            type: "Date",
            required: "Yes",
            visibility: "HR only",
            id: "probation-end",
        },
        {
            fieldName: "Vacation days",
            type: "Text",
            required: "Yes",
            visibility: "Team leads",
            id: "vacation-days",
        },
        {
            fieldName: "Team name",
            type: "Select",
            required: "Yes",
            visibility: "All users",
            id: "team-name",
        },
    ]

    return (
        <PlumProvider theme={plumTheme} cssVariablesResolver={plumVariables}>
            <TopNav
                logoUrl="/path-to-your-logo.svg"
                organizations={[
                    { label: "Organization 1", value: "org1" },
                    { label: "Organization 2", value: "org2" },
                ]}
                userAvatarUrl="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png"
                onNotificationClick={() => console.log("Notifications clicked")}
            />
            <Flex className={classes.main} pt="4rem">
                <Sidebar
                    activeItem={currentTab}
                    onItemClick={setCurrentTab}
                />

                <Container size="lg" p="xxl" className={classes.container}>
                    <Stack>
                        <Paper
                            radius="md"
                            withBorder
                            classNames={{
                                root: classes.paper,
                            }}
                        >
                            <PageNavigation
                                title="Settings"
                                onBackClick={() => window.history.back()}
                            />
                            <Stack gap="xl" className={classes.tabs} h="100%">
                                <Tabs value={currentTab} onChange={(value) => setCurrentTab(value as string)}>
                                    <Tabs.List pl="xl" pt="0" w="100%">
                                        <Tabs.Tab value="profile">Profile</Tabs.Tab>
                                        <Tabs.Tab value="permissions">Permissions</Tabs.Tab>
                                        <Tabs.Tab value="security">Security</Tabs.Tab>
                                        <Tabs.Tab value="custom-fields">Custom fields</Tabs.Tab>
                                        <Tabs.Tab value="help">Help</Tabs.Tab>
                                        <Tabs.Tab value="demo">Demo</Tabs.Tab>
                                    </Tabs.List>

                                    <Tabs.Panel value="profile" pr="0" pl="0" pt="xl" ml="auto" mr="auto">
                                        <Stack gap="xl" mb="0">
                                            <Grid>
                                                <Grid.Col>
                                                    <Flex gap="md" display="flex" align="center" justify="space-between">
                                                        <Stack gap="0" align="start">
                                                            <Title size="lg" c="gray.9">
                                                                Joshua Johnson
                                                            </Title>
                                                            <Text size="sm" c="gray.7">
                                                                joshua.johnson@company.org
                                                            </Text>
                                                            <Link
                                                                mt="sm"
                                                                variant="standalone"
                                                                href="#"
                                                                onClick={(e) => {
                                                                    e.preventDefault()
                                                                    setSwitchAccountModalOpened(true)
                                                                }}
                                                            >
                                                                Switch account
                                                            </Link>
                                                        </Stack>
                                                        <Avatar
                                                            size="xl"
                                                            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png"
                                                            alt="Profile picture"
                                                        />
                                                    </Flex>
                                                </Grid.Col>
                                            </Grid>
                                            <Grid gutter="md">
                                                <Grid.Col span={6}>
                                                    <TextField
                                                        label="First name"
                                                        value={firstName}
                                                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setFirstName(event.target.value)}
                                                    />
                                                </Grid.Col>
                                                <Grid.Col span={6}>
                                                    <TextField
                                                        label="Last name"
                                                        value={lastName}
                                                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setLastName(event.target.value)}
                                                    />
                                                </Grid.Col>
                                            </Grid>
                                            <Grid>
                                                <Grid.Col span={6}>
                                                    <TextField
                                                        label="Email address"
                                                        value={email}
                                                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}
                                                        type="email"
                                                        rightSection={<i className="fa-sharp fa-regular fa-envelope" />}
                                                        required
                                                    />
                                                </Grid.Col>
                                                <Grid.Col span={6}>
                                                    <TextField
                                                        label="Phone number"
                                                        value={phone}
                                                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPhone(event.target.value)}
                                                        type="tel"
                                                    />
                                                </Grid.Col>
                                            </Grid>
                                            <Grid>
                                                <Grid.Col span={6}>
                                                    <TextField
                                                        label="Job title"
                                                        value={jobTitle}
                                                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setJobTitle(event.target.value)}
                                                    />
                                                </Grid.Col>
                                                <Grid.Col span={6}>
                                                    <Select
                                                        label="Department"
                                                        value={department}
                                                        onChange={(value) => setDepartment(value as string)}
                                                        data={[
                                                            { label: "Engineering", value: "engineering" },
                                                            { label: "Product", value: "product" },
                                                            { label: "Marketing", value: "marketing" },
                                                            { label: "Sales", value: "sales" },
                                                            { label: "HR", value: "hr" },
                                                        ]}
                                                    />
                                                </Grid.Col>
                                            </Grid>
                                            <MultiSelect
                                                label="Skills"
                                                placeholder="Select your skills"
                                                value={skills}
                                                onChange={(value) => setSkills(value || [])}
                                                data={[
                                                    { label: "JavaScript", value: "js" },
                                                    { label: "TypeScript", value: "ts" },
                                                    { label: "React", value: "react" },
                                                    { label: "Node.js", value: "node" },
                                                    { label: "Python", value: "python" },
                                                    { label: "Java", value: "java" },
                                                ]}
                                            />
                                            <Radio.Group
                                                label="Location"
                                                defaultValue="remote"
                                                horizontal
                                                onChange={(value) => console.log(value)}
                                            >
                                                <Radio label="Remote" value="remote" />
                                                <Radio label="Hybrid" value="hybrid" />
                                                <Radio label="Office" value="office" />
                                            </Radio.Group>

                                            <Checkbox.Group
                                                label="Products"
                                                orientation="horizontal"
                                                value={selectedProducts}
                                                onChange={setSelectedProducts}
                                            >
                                                <Checkbox value="vscode" label="VS Code" />
                                                <Checkbox value="github" label="GitHub" />
                                                <Checkbox value="jira" label="Jira" />
                                                <Checkbox value="slack" label="Slack" />
                                                <Checkbox value="figma" label="Figma" defaultChecked />
                                            </Checkbox.Group>

                                            <Stack gap="xs">
                                                <Text component="label" size="sm" fw={500} c="gray.7">
                                                    Available days
                                                </Text>
                                                <Flex gap="xs" wrap="wrap">
                                                    <SelectableTag size="md" value="mon">Mon</SelectableTag>
                                                    <SelectableTag size="md" value="tue">Tue</SelectableTag>
                                                    <SelectableTag size="md" value="wed">Wed</SelectableTag>
                                                    <SelectableTag size="md" value="thu">Thu</SelectableTag>
                                                    <SelectableTag size="md" value="fri">Fri</SelectableTag>
                                                    <SelectableTag size="md" value="sat">Sat</SelectableTag>
                                                    <SelectableTag size="md" value="sun">Sun</SelectableTag>
                                                </Flex>
                                            </Stack>

                                            <Switch
                                                label="Public profile"
                                                defaultChecked
                                                onChange={(event) => console.log(event)}
                                            />
                                        </Stack>
                                    </Tabs.Panel>

                                    <Tabs.Panel value="permissions" pr="0" pl="0" pt="xl" ml="auto" mr="auto">
                                        <Stack gap="xl">
                                            {/* Visibility Permissions Section */}
                                            <Stack gap="xs">
                                                <Text fw={500} size="lg" c="gray.9">Visibility permissions</Text>

                                                <Group
                                                    justify="space-between"
                                                    align="center"
                                                    className={classes.inlineCard}
                                                >
                                                    <Group gap="xs">
                                                        <Text c="gray.7" size="md">Can see organization contacts</Text>
                                                        <Tooltip label="User can see organization's contacts and custom organizations">
                                                            <CircleInfoFarFAIcon style={{ color: "var(--mantine-color-gray-6)" }} />
                                                        </Tooltip>
                                                    </Group>
                                                    <Switch
                                                        checked={orgContactsAccess}
                                                        onChange={(event) => {
                                                            setOrgContactsAccess(event.currentTarget.checked)
                                                        }}
                                                    />
                                                </Group>

                                                <Group
                                                    justify="space-between"
                                                    align="center"
                                                    className={classes.inlineCard}
                                                >
                                                    <Group gap="xs">
                                                        <Text c="gray.7" size="md">Can access all regions</Text>
                                                        <Tooltip label="User has permission to access all regions">
                                                            <CircleInfoFarFAIcon style={{ color: "var(--mantine-color-gray-6)" }} />
                                                        </Tooltip>
                                                    </Group>
                                                    <Switch
                                                        checked={axiosAccess}
                                                        onChange={(event) => {
                                                            setAxiosAccess(event.currentTarget.checked)
                                                        }}
                                                    />
                                                </Group>

                                                <Group
                                                    justify="space-between"
                                                    align="center"
                                                    className={classes.inlineCard}
                                                >
                                                    <Group gap="xs">
                                                        <Text c="gray.7" size="md">See contacts based on teams</Text>
                                                        <Tooltip label="User will be able to see contacts associated with their teams">
                                                            <CircleInfoFarFAIcon style={{ color: "var(--mantine-color-gray-6)" }} />
                                                        </Tooltip>
                                                    </Group>
                                                    <Switch
                                                        checked={teamBasedContacts}
                                                        onChange={(event) => {
                                                            setTeamBasedContacts(event.currentTarget.checked)
                                                        }}
                                                    />
                                                </Group>

                                                <Group
                                                    justify="space-between"
                                                    align="center"
                                                    className={classes.inlineCard}
                                                >
                                                    <Group gap="xs">
                                                        <Text c="gray.7" size="md">Team's permission section visible</Text>
                                                        <Tooltip label="User will be able to choose whether to tag teams to their data">
                                                            <CircleInfoFarFAIcon style={{ color: "var(--mantine-color-gray-6)" }} />
                                                        </Tooltip>
                                                    </Group>
                                                    <Switch
                                                        checked={teamPermissionVisible}
                                                        onChange={(event) => {
                                                            setTeamPermissionVisible(event.currentTarget.checked)
                                                        }}
                                                    />
                                                </Group>
                                            </Stack>

                                            <Divider my="xs" />

                                            {/* Other Contact's Accesses Section */}
                                            <Stack gap="xs">
                                                <Text fw={500} size="lg" c="gray.9">Other contact's accesses</Text>

                                                <Group
                                                    justify="space-between"
                                                    align="center"
                                                    className={classes.inlineCard}
                                                >
                                                    <Group gap="xs">
                                                        <Text c="gray.7" size="md">Can access interactions (Notes)</Text>
                                                        <Tooltip label="User has permission to access notes">
                                                            <CircleInfoFarFAIcon style={{ color: "var(--mantine-color-gray-6)" }} />
                                                        </Tooltip>
                                                    </Group>
                                                    <Switch
                                                        checked={notesAccess}
                                                        onChange={(event) => {
                                                            setNotesAccess(event.currentTarget.checked)
                                                        }}
                                                    />
                                                </Group>

                                                <Group
                                                    justify="space-between"
                                                    align="center"
                                                    className={classes.inlineCard}
                                                >
                                                    <Group gap="xs">
                                                        <Text c="gray.7" size="md">Can access custom fields management</Text>
                                                        <Tooltip label="User has permission to access the custom fields management page">
                                                            <CircleInfoFarFAIcon style={{ color: "var(--mantine-color-gray-6)" }} />
                                                        </Tooltip>
                                                    </Group>
                                                    <Switch
                                                        checked={customFieldsAccess}
                                                        onChange={(event) => {
                                                            setCustomFieldsAccess(event.currentTarget.checked)
                                                        }}
                                                    />
                                                </Group>
                                            </Stack>

                                            <Divider my="xs" />

                                            {/* Tools Access Section */}
                                            <Stack gap="xs" mb="xxl">
                                                <Text fw={500} size="lg" c="gray.9">Tools access</Text>

                                                {/* Outbox Access */}
                                                <Stack gap="xs">
                                                    <Group
                                                        wrap="wrap"
                                                        justify="space-between"
                                                        align="center"
                                                        className={classes.inlineCard}
                                                    >
                                                        <Group gap="xs">
                                                            <Text c="gray.7" size="sm">User can access Outbox</Text>
                                                            <Tooltip label="User has permission to access Outbox">
                                                                <CircleInfoFarFAIcon style={{ color: "var(--mantine-color-gray-6)" }} />
                                                            </Tooltip>
                                                        </Group>
                                                        <Switch
                                                            checked={outboxAccess}
                                                            onChange={(event) => {
                                                                setOutboxAccess(event.currentTarget.checked)
                                                                if (!event.currentTarget.checked) {
                                                                    setSendFromAnyEmail(false)
                                                                    setViewOtherOutbox(false)
                                                                }
                                                            }}
                                                        />
                                                        {outboxAccess && (
                                                            <Stack gap="md" pl="xl" w="100%">
                                                                <Group justify="space-between" align="center">
                                                                    <Group gap="xs">
                                                                        <Text c="gray.7" size="sm">User can send from any Outbox email</Text>
                                                                        <Tooltip label="User has permission to send from any Outbox email">
                                                                            <CircleInfoFarFAIcon style={{ color: "var(--mantine-color-gray-6)" }} />
                                                                        </Tooltip>
                                                                    </Group>
                                                                    <Switch
                                                                        checked={sendFromAnyEmail}
                                                                        onChange={(event) => {
                                                                            setSendFromAnyEmail(event.currentTarget.checked)
                                                                        }}
                                                                    />
                                                                </Group>

                                                                <Group justify="space-between" align="center">
                                                                    <Group gap="xs">
                                                                        <Text c="gray.7" size="sm">User can view other user's Outbox</Text>
                                                                        <Tooltip label="User can see Outbox emails created by other users">
                                                                            <CircleInfoFarFAIcon style={{ color: "var(--mantine-color-gray-6)" }} />
                                                                        </Tooltip>
                                                                    </Group>
                                                                    <Switch
                                                                        checked={viewOtherOutbox}
                                                                        onChange={(event) => {
                                                                            setViewOtherOutbox(event.currentTarget.checked)
                                                                        }}
                                                                    />
                                                                </Group>
                                                            </Stack>
                                                        )}
                                                    </Group>
                                                </Stack>

                                                {/* Texting Access */}
                                                <Stack gap="xs">
                                                    <Group
                                                        wrap="wrap"
                                                        justify="space-between"
                                                        align="center"
                                                        className={classes.inlineCard}
                                                    >
                                                        <Group gap="xs">
                                                            <Text c="gray.7" size="md">User can access Texting</Text>
                                                            <Tooltip label="User has permission to access Texting">
                                                                <CircleInfoFarFAIcon style={{ color: "var(--mantine-color-gray-6)" }} />
                                                            </Tooltip>
                                                        </Group>
                                                        <Switch
                                                            checked={textingAccess}
                                                            onChange={(event) => {
                                                                setTextingAccess(event.currentTarget.checked)
                                                                if (!event.currentTarget.checked) {
                                                                    setViewPreviousTexts(false)
                                                                }
                                                            }}
                                                        />
                                                        {textingAccess && (
                                                            <Stack gap="md" pl="xl" w="100%">
                                                                <Group justify="space-between" align="center">
                                                                    <Group gap="xs">
                                                                        <Text c="gray.7" size="sm">User can see any previously sent Texting messages</Text>
                                                                        <Tooltip label="User has permission to see any previously sent Texting messages">
                                                                            <CircleInfoFarFAIcon style={{ color: "var(--mantine-color-gray-6)" }} />
                                                                        </Tooltip>
                                                                    </Group>
                                                                    <Switch
                                                                        checked={viewPreviousTexts}
                                                                        onChange={(event) => {
                                                                            setViewPreviousTexts(event.currentTarget.checked)
                                                                        }}
                                                                    />
                                                                </Group>
                                                            </Stack>
                                                        )}
                                                    </Group>
                                                </Stack>

                                                {/* Action Center Access */}
                                                <Stack gap="xs">
                                                    <Group
                                                        wrap="wrap"
                                                        justify="space-between"
                                                        align="center"
                                                        className={classes.inlineCard}
                                                    >
                                                        <Group gap="xs">
                                                            <Text c="gray.7" size="md">User can access the Action Center</Text>
                                                            <Tooltip label="User has permission to access the Action Center">
                                                                <CircleInfoFarFAIcon style={{ color: "var(--mantine-color-gray-6)" }} />
                                                            </Tooltip>
                                                        </Group>
                                                        <Switch
                                                            checked={actionCenterAccess}
                                                            onChange={(event) => {
                                                                setActionCenterAccess(event.currentTarget.checked)
                                                                if (!event.currentTarget.checked) {
                                                                    setActionCenterSettings(false)
                                                                }
                                                            }}
                                                        />
                                                        {actionCenterAccess && (
                                                            <Stack gap="md" pl="xl" w="100%">
                                                                <Group justify="space-between" align="center">
                                                                    <Group gap="xs">
                                                                        <Text c="gray.7" size="sm">User can make changes to Action Center Settings</Text>
                                                                        <Tooltip label="User has permission to edit the action center settings">
                                                                            <CircleInfoFarFAIcon style={{ color: "var(--mantine-color-gray-6)" }} />
                                                                        </Tooltip>
                                                                    </Group>
                                                                    <Switch
                                                                        checked={actionCenterSettings}
                                                                        onChange={(event) => {
                                                                            setActionCenterSettings(event.currentTarget.checked)
                                                                        }}
                                                                    />
                                                                </Group>
                                                            </Stack>
                                                        )}
                                                    </Group>
                                                </Stack>
                                            </Stack>
                                        </Stack>
                                    </Tabs.Panel>

                                    <Tabs.Panel value="security" pr="0" pl="0" pt="xl" ml="auto" mr="auto">
                                        <Stack gap="xl">
                                            {/* 2FA Section */}
                                            <Stack gap="xl">
                                                <Group wrap="wrap" justify="space-between" align="center" className={classes.inlineCard}>
                                                    <Stack gap="xxs">
                                                        <Text fw={500} size="md">Two-factor authentication</Text>
                                                        <Text size="sm" c="gray.7">
                                                            Add an extra layer of security to your account by requiring both a password and an authentication code
                                                        </Text>
                                                    </Stack>
                                                    <Switch
                                                        variant="default"
                                                        onChange={(event) => {
                                                            setShow2FASetup(event.currentTarget.checked)
                                                        }}
                                                        defaultChecked={false}
                                                    />
                                                    <Transition mounted={show2FASetup} transition="fade" duration={400} timingFunction="ease">
                                                        {(styles) => (
                                                            <Stack gap="xl" style={styles} w="100%">
                                                                <Alert variant="info" w="100%">
                                                                    Scan this QR code with your authenticator app (like Google Authenticator or Authy)
                                                                </Alert>

                                                                <Grid>
                                                                    <Grid.Col span={6}>
                                                                        <Stack gap="md" align="center">
                                                                            <Box w={200} h={200} bg="gray.2">
                                                                                <img width={200} src="https://repository-images.githubusercontent.com/467626658/5307bcae-f9b9-42b0-87eb-9da34d00b4e1" alt="QR Code" />
                                                                            </Box>

                                                                            <Stack gap="xxs" align="center">
                                                                                <Text size="sm" c="gray.7">
                                                                                    Can't scan the QR code? Use this code instead:
                                                                                </Text>
                                                                                <Text fw={500} style={{ fontFamily: "monospace" }}>
                                                                                    ABCD-EFGH-IJKL-MNOP
                                                                                </Text>
                                                                            </Stack>
                                                                        </Stack>
                                                                    </Grid.Col>

                                                                    <Grid.Col span={6} style={{ display: "flex", alignItems: "center" }}>
                                                                        <Box bg="gray.0" p="xl" style={{ width: "100%", borderRadius: "8px" }}>
                                                                            <Stack gap="xl">
                                                                                <Text fw={500} size="lg">
                                                                                    Verify your setup
                                                                                </Text>
                                                                                <TextField
                                                                                    label="Enter verification code"
                                                                                    required
                                                                                    maxLength={6}
                                                                                />
                                                                                <Button variant="primary" onClick={() => console.log("Verify 2FA setup")}>
                                                                                    Verify
                                                                                </Button>
                                                                            </Stack>
                                                                        </Box>
                                                                    </Grid.Col>
                                                                </Grid>
                                                            </Stack>
                                                        )}
                                                    </Transition>
                                                </Group>
                                            </Stack>

                                            <Divider my="xs" />

                                            {/* Password Section */}
                                            <Stack gap="xl">
                                                <Stack gap="xxs" mb="md">
                                                    <Text fw={500} size="md">Password</Text>
                                                    <Text c="gray.7" size="sm">Changing your password is a simple way to enhance account security</Text>
                                                </Stack>

                                                <TextField
                                                    label="Current password"
                                                    type="password"
                                                    value="passwordpasswordd"
                                                    required
                                                />

                                                <TextField
                                                    label="New password"
                                                    type="password"
                                                    value="passwordpasssword"
                                                    required
                                                />

                                                <TextField
                                                    label="Confirm new password"
                                                    type="password"
                                                    value="passwordpassword"
                                                    required
                                                    error="Passwords do not match"
                                                />

                                                <Text size="xs" c="gray.7">
                                                    Password must be at least 15 characters long and include a mix of letters, numbers, and symbols
                                                </Text>
                                            </Stack>

                                            <Divider my="xs" />

                                            {/* Recovery Options */}
                                            <Stack gap="xl">
                                                <Text fw={500} size="md">Recovery options</Text>

                                                <TextField
                                                    label="Recovery email"
                                                    value="joshua.backup@gmail.com"
                                                    type="email"
                                                    rightSection={<EnvelopeFarFAIcon />}
                                                />

                                                <TextField
                                                    label="Recovery phone"
                                                    value="(555) 987-6543"
                                                    type="tel"
                                                />
                                            </Stack>

                                            <Divider my="xs" />

                                            {/* Session Management */}
                                            <Stack gap="xl">
                                                <Group justify="space-between" align="center" className={classes.inlineCard}>
                                                    <Stack gap="xs">
                                                        <Text fw={500} size="md">Active sessions</Text>
                                                        <Text size="sm" c="gray.7">
                                                            Manage and monitor your active login sessions
                                                        </Text>
                                                    </Stack>
                                                    <Button variant="secondary" onClick={() => console.log("Manage sessions")}>
                                                        Manage sessions
                                                    </Button>
                                                </Group>
                                            </Stack>
                                        </Stack>
                                    </Tabs.Panel>

                                    <Tabs.Panel value="help" pr="0" pl="0" pt="xl" ml="auto" mr="auto">
                                        <Stack gap="xl">
                                            <SegmentedControl
                                                defaultValue="live"
                                                size="md"
                                                data={[
                                                    { label: "Live support", value: "live" },
                                                    { label: "Fill a ticket", value: "ticket" },
                                                    { label: "Community", value: "community" },
                                                ]}
                                                onChange={(value) => {
                                                    setSelectedHelpOption(value)
                                                    console.log("Selected:", value)
                                                }}
                                            />

                                            {/* Live Support Content */}
                                            {selectedHelpOption === "live" && (
                                                <Flex wrap="wrap" align-content="baseline" justify="center" align="flex-start" gap="md" p="xxl" className={classes.supportTiles}>
                                                    <Tile
                                                        icon={<FileAltFarFAIcon />}
                                                        variant="secondary"
                                                        onClick={() => console.log("Documentation clicked")}
                                                        size="lg"
                                                        w="100%"
                                                    >
                                                        Documentation
                                                    </Tile>
                                                    <Tile
                                                        icon={<CommentFarFAIcon />}
                                                        variant="secondary"
                                                        onClick={() => console.log("Live chat clicked")}
                                                        size="lg"
                                                        w="100%"
                                                    >
                                                        Live chat
                                                    </Tile>
                                                    <Tile
                                                        icon={<EnvelopeFarFAIcon />}
                                                        variant="secondary"
                                                        onClick={() => console.log("Email support clicked")}
                                                        size="lg"
                                                        w="100%"
                                                    >
                                                        Email support
                                                    </Tile>
                                                    <Tile
                                                        icon={<CircleInfoFarFAIcon />}
                                                        variant="secondary"
                                                        onClick={() => console.log("FAQs clicked")}
                                                        size="lg"
                                                        w="100%"
                                                    >
                                                        FAQs
                                                    </Tile>
                                                </Flex>
                                            )}

                                            {/* Ticket Form */}
                                            {selectedHelpOption === "ticket" && (
                                                <Box p="xl" w="32rem" m="auto" className={classes.inlineCard}>
                                                    <Stack gap="xl">
                                                        <Select
                                                            label="Issue type"
                                                            required
                                                            data={[
                                                                { label: "Technical issue", value: "technical" },
                                                                { label: "Account access", value: "access" },
                                                                { label: "Billing", value: "billing" },
                                                                { label: "Feature request", value: "feature" },
                                                                { label: "Other", value: "other" },
                                                            ]}
                                                        />

                                                        <TextField
                                                            label="Subject"
                                                            required
                                                        />

                                                        <TextField
                                                            label="Description"
                                                            required
                                                            multiline
                                                            minRows={6}
                                                        />

                                                        <Select
                                                            label="Priority"
                                                            required
                                                            data={[
                                                                { label: "Low", value: "low" },
                                                                { label: "Medium", value: "medium" },
                                                                { label: "High", value: "high" },
                                                                { label: "Critical", value: "critical" },
                                                            ]}
                                                        />

                                                        <Stack gap="xxs">
                                                            <Label label="Attachments" />
                                                            <FileDropzone
                                                                onDrop={(files: File[]) => console.log("accepted files", files)}
                                                                maxSize={5 * 1024 ** 2}
                                                                accept={{
                                                                    "image/*": [], // All images
                                                                    "application/pdf": [], // PDF files
                                                                    "application/msword": [], // DOC files
                                                                    "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [], // DOCX files
                                                                }}
                                                            />
                                                        </Stack>

                                                        <Group justify="center">
                                                            <Button
                                                                flex={1}
                                                                size="md"
                                                                variant="primary"
                                                                onClick={() => console.log("Submit ticket")}
                                                            >
                                                                Submit ticket
                                                            </Button>
                                                        </Group>
                                                    </Stack>
                                                </Box>
                                            )}

                                            {/* Community Contact Placeholder */}
                                            {selectedHelpOption === "community" && (
                                                <Box display={selectedHelpOption === "community" ? "block" : "none"}>
                                                    {/* Community Forum Content */}
                                                    {selectedHelpOption === "community" && (
                                                        <Stack gap="xl" w="100%" maw="100%" px="xl">
                                                            <Group justify="space-between" mb="md">
                                                                <Stack gap="xs">
                                                                    <Text fw={500} size="lg" c="gray.9">Community Forum</Text>
                                                                    <Text size="sm" c="gray.7">Connect with other users and share experiences</Text>
                                                                </Stack>
                                                                <Group>
                                                                    <Button
                                                                        variant="secondary"
                                                                        leftSection={<i className="fa-regular fa-filter" />}
                                                                        onClick={() => console.log("Filter threads")}
                                                                    >
                                                                        Filter
                                                                    </Button>
                                                                    <Button
                                                                        variant="primary"
                                                                        leftSection={<i className="fa-regular fa-plus" />}
                                                                        onClick={() => console.log("New thread")}
                                                                    >
                                                                        New thread
                                                                    </Button>
                                                                </Group>
                                                            </Group>

                                                            <Stack gap="md">
                                                                {/* Thread Item */}
                                                                {[
                                                                    {
                                                                        id: 1,
                                                                        title: "Best practices for managing custom fields",
                                                                        content: "Hi everyone! I'm looking for advice on organizing custom fields effectively. Currently managing about 50 fields and it's becoming challenging to maintain...",
                                                                        author: {
                                                                            name: "Sarah Chen",
                                                                            avatar: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png",
                                                                            role: "Product Manager",
                                                                        },
                                                                        replies: 12,
                                                                        views: 234,
                                                                        tags: ["custom-fields", "organization", "best-practices"],
                                                                        isSticky: true,
                                                                    },
                                                                    {
                                                                        id: 2,
                                                                        title: "Tips for optimizing large data exports",
                                                                        content: "We're dealing with exports of over 100k records and experiencing some performance issues. Has anyone found effective ways to handle this scale? Here's what we've tried so far...",
                                                                        author: {
                                                                            name: "Marcus Rodriguez",
                                                                            avatar: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-4.png",
                                                                            role: "Technical Lead",
                                                                        },
                                                                        replies: 8,
                                                                        views: 156,
                                                                        tags: ["performance", "data-export", "optimization"],
                                                                    },
                                                                ].map((thread) => (
                                                                    <Paper key={thread.id} withBorder p="md" radius="md">
                                                                        <Stack gap="md">
                                                                            <Group justify="space-between" align="flex-start">
                                                                                <Group gap="md">
                                                                                    <Avatar
                                                                                        src={thread.author.avatar}
                                                                                        alt={thread.author.name}
                                                                                        size="md"
                                                                                    />
                                                                                    <Stack gap={4}>
                                                                                        <Group gap="xs">
                                                                                            <Text fw={500} size="sm" c="gray.9">{thread.author.name}</Text>
                                                                                            <Text size="xs" c="gray.7">
                                                                                                •
                                                                                                {thread.author.role}
                                                                                            </Text>
                                                                                        </Group>
                                                                                        <Text size="xs" c="gray.7">Posted 2 days ago</Text>
                                                                                    </Stack>
                                                                                </Group>
                                                                                <Group gap="xs">
                                                                                    <Button
                                                                                        variant="tertiary"
                                                                                        p={8}
                                                                                        onClick={() => console.log("Share thread")}
                                                                                    >
                                                                                        <i className="fa-regular fa-share" />
                                                                                    </Button>
                                                                                    <Button
                                                                                        variant="tertiary"
                                                                                        p={8}
                                                                                        onClick={() => console.log("Bookmark thread")}
                                                                                    >
                                                                                        <i className="fa-regular fa-bookmark" />
                                                                                    </Button>
                                                                                    <Button
                                                                                        variant="tertiary"
                                                                                        p={8}
                                                                                        onClick={() => console.log("More options")}
                                                                                    >
                                                                                        <i className="fa-regular fa-ellipsis" />
                                                                                    </Button>
                                                                                </Group>
                                                                            </Group>

                                                                            <Stack gap="xs">
                                                                                <Group gap="xs" align="center">
                                                                                    {thread.isSticky && (
                                                                                        <i className="fa-regular fa-thumbtack" style={{ color: "var(--mantine-color-gray-6)" }} />
                                                                                    )}
                                                                                    <Text fw={500} size="md" c="gray.9">{thread.title}</Text>
                                                                                </Group>
                                                                                <Text size="sm" c="gray.7" lineClamp={2}>
                                                                                    {thread.content}
                                                                                </Text>
                                                                            </Stack>

                                                                            <Group justify="space-between" align="center">
                                                                                <Group gap="xs">
                                                                                    {thread.tags.map((tag) => (
                                                                                        <Button
                                                                                            key={tag}
                                                                                            variant="tertiary"
                                                                                            size="sm"
                                                                                            onClick={() => console.log(`Filter by ${tag}`)}
                                                                                        >
                                                                                            {tag}
                                                                                        </Button>
                                                                                    ))}
                                                                                </Group>
                                                                                <Group gap="md">
                                                                                    <Group gap="xs">
                                                                                        <i className="fa-regular fa-message" style={{ color: "var(--mantine-color-gray-6)" }} />
                                                                                        <Text size="sm" c="gray.7">
                                                                                            {thread.replies}
                                                                                            {" "}
                                                                                            replies
                                                                                        </Text>
                                                                                    </Group>
                                                                                    <Group gap="xs">
                                                                                        <i className="fa-regular fa-eye" style={{ color: "var(--mantine-color-gray-6)" }} />
                                                                                        <Text size="sm" c="gray.7">
                                                                                            {thread.views}
                                                                                            {" "}
                                                                                            views
                                                                                        </Text>
                                                                                    </Group>
                                                                                </Group>
                                                                            </Group>
                                                                        </Stack>
                                                                    </Paper>
                                                                ))}
                                                            </Stack>
                                                            <Group justify="center" mt="xl">
                                                                <Pagination
                                                                    total={5}
                                                                    value={1}
                                                                    onChange={(page) => console.log("Page changed:", page)}
                                                                />
                                                            </Group>
                                                        </Stack>
                                                    )}
                                                </Box>
                                            )}
                                        </Stack>
                                    </Tabs.Panel>

                                    <Tabs.Panel value="custom-fields" pr="0" pl="0" pt="xl" ml="auto" mr="auto" style={{ paddingBottom: "0" }}>
                                        <Stack gap="xl" w="100%" maw="100%" px="xl">
                                            <Stack gap="xl">
                                                <HeadingActions
                                                    heading={`${customFieldsData.length} custom fields`}
                                                    primaryActionLabel="Add field"
                                                    primaryActionIcon={<i className="fa-regular fa-plus" />}
                                                    onPrimaryAction={() => console.log("Add custom field")}
                                                    secondaryActions={[
                                                        {
                                                            label: "Download",
                                                            icon: <i className="fa-regular fa-arrow-to-bottom" />,
                                                            onClick: () => console.log("Download clicked"),
                                                        },
                                                        {
                                                            label: "Save list",
                                                            icon: <i className="fa-regular fa-bookmark" />,
                                                            onClick: () => console.log("Save clicked"),
                                                        },
                                                        {
                                                            label: "Create alert",
                                                            icon: <i className="fa-regular fa-bell" />,
                                                            onClick: () => console.log("Alert clicked"),
                                                        },
                                                    ]}
                                                />
                                            </Stack>
                                            <Table
                                                data={customFieldsData}
                                                itemsPerPage={11}
                                                columns={[
                                                    {
                                                        key: "fieldName",
                                                        header: "Field name",
                                                        width: "30%",
                                                    },
                                                    {
                                                        key: "type",
                                                        header: "Type",
                                                        width: "15%",
                                                    },
                                                    {
                                                        key: "required",
                                                        header: "Required",
                                                        width: "15%",
                                                        render: () => {
                                                            const [selectedValue, setSelectedValue] = useState("Yes")

                                                            return (
                                                                <Select
                                                                    label=""
                                                                    value={selectedValue}
                                                                    data={[
                                                                        { label: "Yes", value: "Yes" },
                                                                        { label: "No", value: "No" },
                                                                    ]}
                                                                    onChange={(value) => {
                                                                        setSelectedValue(value || "Yes")
                                                                        console.log(`Changed required status to ${value}`)
                                                                    }}
                                                                    aria-label="Set required status"
                                                                />
                                                            )
                                                        },
                                                    },
                                                    {
                                                        key: "visibility",
                                                        header: "Visibility",
                                                        width: "20%",
                                                        render: () => {
                                                            const [selectedValue, setSelectedValue] = useState("All users")

                                                            return (
                                                                <Select
                                                                    label=""
                                                                    value={selectedValue}
                                                                    data={[
                                                                        { label: "All users", value: "All users" },
                                                                        { label: "Admins only", value: "Admins only" },
                                                                        { label: "Team leads", value: "Team leads" },
                                                                        { label: "Project managers", value: "Project managers" },
                                                                        { label: "HR only", value: "HR only" },
                                                                        { label: "IT admin", value: "IT admin" },
                                                                        { label: "Security team", value: "Security team" },
                                                                        { label: "Finance team", value: "Finance team" },
                                                                        { label: "Managers", value: "Managers" },
                                                                        { label: "Event planners", value: "Event planners" },
                                                                    ]}
                                                                    onChange={(value) => {
                                                                        setSelectedValue(value || "All users")
                                                                        console.log(`Changed visibility to ${value}`)
                                                                    }}
                                                                    aria-label="Set visibility"
                                                                />
                                                            )
                                                        },
                                                    },
                                                    {
                                                        key: "actions",
                                                        header: "Actions",
                                                        width: "20%",
                                                        render: (row) => (
                                                            <TableActions
                                                                onEdit={() => handleEditField(row.id)}
                                                                onDelete={() => handleEditField(row.id)}
                                                            />
                                                        ),
                                                    },
                                                ]}
                                            />
                                        </Stack>
                                    </Tabs.Panel>

                                    <Tabs.Panel value="demo" pr="0" pl="0" pt="xl" ml="auto" mr="auto">
                                        <Container size="lg">
                                            <Stack gap="xl">
                                                <Stack gap={"0"}>
                                                    <Text fw={500} size="lg">Bulk upload</Text>
                                                    <Text size="sm" c="gray.7">Import your data in a few simple steps</Text>
                                                </Stack>

                                                <Paper p="xl" radius="md" withBorder className={classes.BulkUploadPaper}>
                                                    <Stack gap="xl">
                                                        {/* Step 1: Upload Type */}
                                                        <Stack gap="md">
                                                            <Text fw={500} size="sm" c="gray.7">Select data type</Text>
                                                            <Flex gap="xs" wrap="wrap">
                                                                <SelectableTag value="bills">Bills</SelectableTag>
                                                                <SelectableTag value="contacts">Contacts</SelectableTag>
                                                                <SelectableTag value="organizations">Organizations</SelectableTag>
                                                                <SelectableTag value="points">Points</SelectableTag>
                                                                <SelectableTag value="officials">Officials</SelectableTag>
                                                                <SelectableTag value="public-orgs">Public Orgs</SelectableTag>
                                                                <SelectableTag value="staffers">Staffers</SelectableTag>
                                                                <SelectableTag value="tracking">Tracking</SelectableTag>
                                                            </Flex>
                                                        </Stack>

                                                        {/* Step 2: File Upload */}
                                                        <Stack gap="md">
                                                            <Text fw={500} size="sm" c="gray.7">Upload file</Text>
                                                            <Group>
                                                                <FileDropzone
                                                                    onDrop={(files) => console.log('accepted files', files)}
                                                                    maxSize={5 * 1024 ** 2}
                                                                    accept={{
                                                                        'text/csv': ['.csv'],
                                                                        'application/vnd.ms-excel': ['.xls'],
                                                                        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx']
                                                                    }}
                                                                />
                                                            </Group>
                                                            <Group justify="flex-end">
                                                                <Button
                                                                    variant="tertiary"
                                                                    leftSection={<i className="fa-regular fa-download" />}
                                                                    onClick={() => console.log('Download template')}
                                                                >
                                                                    Download template
                                                                </Button>
                                                            </Group>
                                                        </Stack>

                                                        {/* Step 3: Field Matching */}
                                                        <Stack gap="md">
                                                            <Text fw={500} size="sm" c="gray.7">Match fields</Text>
                                                            <Paper
                                                                withBorder
                                                                p="xl"
                                                                radius="md"
                                                            >
                                                                <Stack gap="md">
                                                                    <Group justify="space-between">
                                                                        <Group gap="md">
                                                                            <i className="fa-regular fa-file-csv" style={{ fontSize: '24px', color: 'var(--mantine-color-gray-7)' }} />
                                                                            <Stack gap={2}>
                                                                                <Text fw={500} size="sm">example_data.csv</Text>
                                                                                <Text size="xs" c="gray.7">2.4 MB • 1,234 rows</Text>
                                                                            </Stack>
                                                                        </Group>
                                                                        <Button
                                                                            variant="tertiary"
                                                                            leftSection={<i className="fa-regular fa-xmark" />}
                                                                            onClick={() => console.log('Remove file')}
                                                                        >
                                                                            Remove
                                                                        </Button>
                                                                    </Group>

                                                                    <Divider />

                                                                    <Stack gap="md">
                                                                        <Group grow align="center" gap="md">
                                                                            <Select
                                                                                label="First name"
                                                                                value="col_a"
                                                                                data={[
                                                                                    { label: "Column A", value: "col_a" },
                                                                                    { label: "Column B", value: "col_b" },
                                                                                    { label: "Column C", value: "col_c" },
                                                                                ]}
                                                                            />
                                                                            <Select
                                                                                label="Last name"
                                                                                value="col_b"
                                                                                data={[
                                                                                    { label: "Column A", value: "col_a" },
                                                                                    { label: "Column B", value: "col_b" },
                                                                                    { label: "Column C", value: "col_c" },
                                                                                ]}
                                                                            />
                                                                        </Group>
                                                                        <Group grow align="center" gap="md">
                                                                            <Select
                                                                                label="Email"
                                                                                value="col_c"
                                                                                data={[
                                                                                    { label: "Column A", value: "col_a" },
                                                                                    { label: "Column B", value: "col_b" },
                                                                                    { label: "Column C", value: "col_c" },
                                                                                ]}
                                                                            />
                                                                            <Select
                                                                                label="Phone"
                                                                                value="col_d"
                                                                                data={[
                                                                                    { label: "Column D", value: "col_d" },
                                                                                    { label: "Column E", value: "col_e" },
                                                                                    { label: "Column F", value: "col_f" },
                                                                                ]}
                                                                            />
                                                                        </Group>
                                                                        <Group grow align="center" gap="md">
                                                                            <Select
                                                                                label="Organization"
                                                                                value="col_e"
                                                                                data={[
                                                                                    { label: "Column D", value: "col_d" },
                                                                                    { label: "Column E", value: "col_e" },
                                                                                    { label: "Column F", value: "col_f" },
                                                                                ]}
                                                                            />
                                                                            <Select
                                                                                label="Title"
                                                                                value="col_f"
                                                                                data={[
                                                                                    { label: "Column D", value: "col_d" },
                                                                                    { label: "Column E", value: "col_e" },
                                                                                    { label: "Column F", value: "col_f" },
                                                                                ]}
                                                                            />
                                                                        </Group>
                                                                    </Stack>
                                                                </Stack>
                                                            </Paper>
                                                        </Stack>

                                                        {/* Step 4: Custom Fields */}
                                                        <Stack gap="md">
                                                            <Group justify="space-between" align="center">
                                                                <Text fw={500} size="sm" c="gray.7">Custom fields</Text>
                                                                <Button
                                                                    variant="tertiary"
                                                                    leftSection={<i className="fa-regular fa-plus" />}
                                                                    onClick={() => console.log('Manage custom fields')}
                                                                >
                                                                    Manage fields
                                                                </Button>
                                                            </Group>
                                                        </Stack>

                                                        {/* Submit Button */}
                                                        <Group justify="flex-end" pt="md">
                                                            <Button
                                                                variant="primary"
                                                                leftSection={<i className="fa-regular fa-upload" />}
                                                                onClick={() => console.log('Start upload')}
                                                            >
                                                                Start upload
                                                            </Button>
                                                        </Group>
                                                    </Stack>
                                                </Paper>
                                            </Stack>
                                        </Container>
                                    </Tabs.Panel>
                                </Tabs>
                            </Stack>
                        </Paper>
                    </Stack>
                </Container>
                <Notification
                    message="Changes saved successfully"
                    variant="success"
                    visible={showSuccessNotification}
                    onClose={() => setShowSuccessNotification(false)}
                />
                <Notification
                    message="Changes discarded"
                    variant="warning"
                    visible={showWarningNotification}
                    onClose={() => setShowWarningNotification(false)}
                />
                <ActionBar onSave={handleSave} onCancel={handleCancel} visible={currentTab !== "help" && currentTab !== "custom-fields"} />
            </Flex>
            <Modal
                opened={switchAccountModalOpened}
                onClose={() => setSwitchAccountModalOpened(false)}
                size="360px"
            >
                <Stack gap="xl" w="100%">
                    <Group justify="space-between" align="center">
                        <Title order={3} size="md" c="gray.9">Switch account</Title>
                        <Button
                            variant="tertiary"
                            onClick={() => setSwitchAccountModalOpened(false)}
                            p={8}
                        >
                            <i className="fa-regular fa-xmark" />
                        </Button>
                    </Group>
                    <Stack gap="xxs" mb="xl" align="start">
                        <Text fw={500} size="xs" p={0} style={{ paddingInline: "0", letterSpacing: "0.075rem", textTransform: "uppercase" }} px="xs">Current</Text>
                        {availableAccounts
                            .filter((account) => account.current)
                            .map((account, index) => (
                                <Group
                                    key={index}
                                    justify="space-between"
                                    p="xs"
                                    className={classes.accountRow}
                                    data-disabled={account.current}
                                >
                                    <Group gap="md">
                                        <Avatar
                                            src={account.avatar}
                                            alt={account.name}
                                            size="md"
                                        />
                                        <Stack gap={0} align="start">
                                            <Text fw={500} size="sm" c="gray.9">{account.name}</Text>
                                            <Text size="sm" c="gray.7">{account.email}</Text>
                                        </Stack>
                                    </Group>
                                    <i className={`fa-regular fa-check ${classes.accountRowIcon}`} />
                                </Group>
                            ))}

                        <Divider></Divider>

                        <Text fw={500} size="xs" p={0} style={{ paddingInline: "0", letterSpacing: "0.075rem", textTransform: "uppercase" }} px="xs">Available</Text>
                        {availableAccounts
                            .filter((account) => !account.current)
                            .map((account, index) => (
                                <Group
                                    key={index}
                                    onClick={() => {
                                        console.log(`Switching to account: ${account.email}`)
                                        setSwitchAccountModalOpened(false)
                                    }}
                                    justify="space-between"
                                    p="xs"
                                    className={classes.accountRow}
                                >
                                    <Group gap="md">
                                        <Avatar
                                            src={account.avatar}
                                            alt={account.name}
                                            size="md"
                                        />
                                        <Stack gap={0} align="start">
                                            <Text fw={500} size="sm" c="gray.9">{account.name}</Text>
                                            <Text size="sm" c="gray.7">{account.email}</Text>
                                        </Stack>
                                    </Group>
                                    <i className="fa-regular fa-arrow-right" />
                                </Group>
                            ))}
                    </Stack>
                </Stack>
            </Modal>
        </PlumProvider>
    )
}
