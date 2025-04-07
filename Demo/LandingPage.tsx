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
import { Table } from "../lib/components/Table"

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

    const handleSave = () => {
        console.log("Saving changes...")
        setShowSuccessNotification(true)
        // setTimeout(() => setShowSuccessNotification(false), 3000)
    }

    const handleCancel = () => {
        setShowWarningNotification(true)
    }

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
                                    <Tabs.List pl="xxl" pt="0" w="100%">
                                        <Tabs.Tab value="profile">Profile</Tabs.Tab>
                                        <Tabs.Tab value="permissions">Permissions</Tabs.Tab>
                                        <Tabs.Tab value="security">Security</Tabs.Tab>
                                        <Tabs.Tab value="custom-fields">Custom fields</Tabs.Tab>
                                        <Tabs.Tab value="help">Help</Tabs.Tab>
                                    </Tabs.List>

                                    <Tabs.Panel value="profile" pr="0" pl="0" pt="xl" ml="auto" mr="auto">
                                        <Stack gap="xl" mb="xl">
                                            <Grid>
                                                <Grid.Col>
                                                    <Stack gap="md" display="flex" align="center" justify="space-between" mb="xl">
                                                        <Avatar
                                                            size="xl"
                                                            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png"
                                                            alt="Profile picture"
                                                        />
                                                        <Stack gap="0" align="center">
                                                            <Title size="lg" c="gray.9">
                                                                Joshua Johnson
                                                            </Title>
                                                            <Text size="sm" c="gray.7">
                                                                joshua.johnson@company.org
                                                            </Text>
                                                        </Stack>
                                                    </Stack>
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
                                                    <SelectableTag size="sm" value="mon">Mon</SelectableTag>
                                                    <SelectableTag size="sm" value="tue">Tue</SelectableTag>
                                                    <SelectableTag size="sm" value="wed">Wed</SelectableTag>
                                                    <SelectableTag size="sm" value="thu">Thu</SelectableTag>
                                                    <SelectableTag size="sm" value="fri">Fri</SelectableTag>
                                                    <SelectableTag size="sm" value="sat">Sat</SelectableTag>
                                                    <SelectableTag size="sm" value="sun">Sun</SelectableTag>
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
                                                    { label: "Call CSM", value: "csm" },
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

                                            {/* CSM Contact Placeholder */}
                                            {selectedHelpOption === "csm" && (
                                                <Box display={selectedHelpOption === "csm" ? "block" : "none"}>
                                                    <Text c="gray.7" ta="center">CSM contact information will be displayed here</Text>
                                                </Box>
                                            )}
                                        </Stack>
                                    </Tabs.Panel>

                                    <Tabs.Panel value="custom-fields" pr="0" pl="0" pt="xl" ml="auto" mr="auto">
                                        <Stack gap="xl" w="100%" maw="100%" px="xl">
                                            <Group justify="space-between">
                                                <Text fw={500} size="md" c="gray.9">Custom fields</Text>
                                                <Button
                                                    variant="primary"
                                                    leftSection={<i className="fa-regular fa-plus" />}
                                                    onClick={() => console.log("Add custom field")}
                                                >
                                                    Add field
                                                </Button>
                                            </Group>

                                            <Table>
                                                <Table.Thead>
                                                    <Table.Tr>
                                                        <Table.Th>Field name</Table.Th>
                                                        <Table.Th>Type</Table.Th>
                                                        <Table.Th>Required</Table.Th>
                                                        <Table.Th>Visibility</Table.Th>
                                                        <Table.Th>Actions</Table.Th>
                                                    </Table.Tr>
                                                </Table.Thead>
                                                <Table.Tbody>
                                                    <Table.Tr>
                                                        <Table.Td>Department</Table.Td>
                                                        <Table.Td>Select</Table.Td>
                                                        <Table.Td>Yes</Table.Td>
                                                        <Table.Td>All users</Table.Td>
                                                        <Table.Td>
                                                            <Group gap="xs">
                                                                <Button
                                                                    variant="tertiary"
                                                                    size="sm"
                                                                    leftSection={<i className="fa-regular fa-pen-to-square" />}
                                                                >
                                                                    Edit
                                                                </Button>
                                                                <Button
                                                                    variant="tertiary"
                                                                    size="sm"
                                                                    danger
                                                                    leftSection={<i className="fa-regular fa-trash" />}
                                                                >
                                                                    Delete
                                                                </Button>
                                                            </Group>
                                                        </Table.Td>
                                                    </Table.Tr>
                                                    <Table.Tr>
                                                        <Table.Td>Employee ID</Table.Td>
                                                        <Table.Td>Text</Table.Td>
                                                        <Table.Td>Yes</Table.Td>
                                                        <Table.Td>Admins only</Table.Td>
                                                        <Table.Td>
                                                            <Group gap="xs">
                                                                <Button
                                                                    variant="tertiary"
                                                                    size="sm"
                                                                    leftSection={<i className="fa-regular fa-pen-to-square" />}
                                                                >
                                                                    Edit
                                                                </Button>
                                                                <Button
                                                                    variant="tertiary"
                                                                    size="sm"
                                                                    danger
                                                                    leftSection={<i className="fa-regular fa-trash" />}
                                                                >
                                                                    Delete
                                                                </Button>
                                                            </Group>
                                                        </Table.Td>
                                                    </Table.Tr>
                                                    <Table.Tr>
                                                        <Table.Td>Start date</Table.Td>
                                                        <Table.Td>Date</Table.Td>
                                                        <Table.Td>No</Table.Td>
                                                        <Table.Td>All users</Table.Td>
                                                        <Table.Td>
                                                            <Group gap="xs">
                                                                <Button
                                                                    variant="tertiary"
                                                                    size="sm"
                                                                    leftSection={<i className="fa-regular fa-pen-to-square" />}
                                                                >
                                                                    Edit
                                                                </Button>
                                                                <Button
                                                                    variant="tertiary"
                                                                    size="sm"
                                                                    danger
                                                                    leftSection={<i className="fa-regular fa-trash" />}
                                                                >
                                                                    Delete
                                                                </Button>
                                                            </Group>
                                                        </Table.Td>
                                                    </Table.Tr>
                                                    <Table.Tr>
                                                        <Table.Td>Skills</Table.Td>
                                                        <Table.Td>Multi-select</Table.Td>
                                                        <Table.Td>No</Table.Td>
                                                        <Table.Td>All users</Table.Td>
                                                        <Table.Td>
                                                            <Group gap="xs">
                                                                <Button
                                                                    variant="tertiary"
                                                                    size="sm"
                                                                    leftSection={<i className="fa-regular fa-pen-to-square" />}
                                                                >
                                                                    Edit
                                                                </Button>
                                                                <Button
                                                                    variant="tertiary"
                                                                    size="sm"
                                                                    danger
                                                                    leftSection={<i className="fa-regular fa-trash" />}
                                                                >
                                                                    Delete
                                                                </Button>
                                                            </Group>
                                                        </Table.Td>
                                                    </Table.Tr>
                                                </Table.Tbody>
                                            </Table>
                                        </Stack>
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
                <ActionBar onSave={handleSave} onCancel={handleCancel} visible={currentTab !== "help"} />
            </Flex>
        </PlumProvider>
    )
}
