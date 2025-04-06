import classes from "./LandingPage.module.css"
import { Container, Stack, Paper, Title, Flex, Grid, Text, Group, Divider, Box, Transition } from "@mantine/core"
import { MantineProvider } from "@mantine/core"
import { useState } from "react"
import { Notification } from "../lib/components/Notification"

// Import Mantine core styles
import "@mantine/core/styles.css"

// Import Plum theme
import { plumTheme, plumVariables } from "../src/theme"

// Import Plum component styles
import "../lib/components/Button/Button.module.css"
import "../lib/components/Switch/Switch.module.css"
import "../lib/components/TextField/TextField.module.css"
import "../lib/components/Alert/Alert.module.css"
import "../lib/components/Dialog/Dialog.module.css"
import "../lib/components/Tabs/Tabs.module.css"
import "../lib/components/Tile/Tile.module.css"
import "../lib/components/Label/Label.module.css"
import "../lib/components/Avatar/Avatar.module.css"

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
} from "../lib/components/Icons"
import { Select } from "../lib/components/Select"
import { MultiSelect } from "../lib/components/MultiSelect"
import { Radio } from "../lib/components/Radio"
import { Avatar } from "../lib/components/Avatar"
import { TopNav } from "../lib/components/TopNav"
import { PageNavigation } from "@/components/PageNavigation"
import { Sidebar } from "../lib/components/Sidebar"
import { ActionBar } from "./components/ActionBar"
import { Tooltip } from "../lib/components/Tooltip"

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
    const [showNotification, setShowNotification] = useState(false)

    const handleSave = () => {
        console.log("Saving changes...")
        setShowNotification(true)
        // Auto hide after seconds
        setTimeout(() => setShowNotification(false), 10000)
    }

    const handleCancel = () => {
        console.log("Canceling changes...")
        // setShowCancelNotification(false)
    }

    return (
        <MantineProvider theme={plumTheme} cssVariablesResolver={plumVariables}>
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
                                        <Tabs.Tab value="help">Help</Tabs.Tab>
                                    </Tabs.List>

                                    <Tabs.Panel value="profile" pr="0" pl="0" pt="xl" ml="auto" mr="auto">
                                        <Stack gap="md">
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
                                                        value="Joshua"
                                                    />
                                                </Grid.Col>
                                                <Grid.Col span={6}>
                                                    <TextField
                                                        label="Last name"
                                                        value="Johnson"
                                                    />
                                                </Grid.Col>
                                            </Grid>
                                            <Grid>
                                                <Grid.Col span={6}>
                                                    <TextField
                                                        label="Email address"
                                                        value="joshua.johnson@company.org"
                                                        type="Email"
                                                        rightSection={<i className="fa-sharp fa-regular fa-envelope" />}
                                                        required
                                                    />
                                                </Grid.Col>
                                                <Grid.Col span={6}>
                                                    <TextField
                                                        label="Phone number"
                                                        value="(555) 123-4567"
                                                        type="tel"
                                                    />
                                                </Grid.Col>
                                            </Grid>
                                            <Grid>
                                                <Grid.Col span={6}>
                                                    <TextField
                                                        label="Job title"
                                                        value="Senior Software Engineer"
                                                    />
                                                </Grid.Col>
                                                <Grid.Col span={6}>
                                                    <Select
                                                        label="Department"
                                                        placeholder="Select your department"
                                                        value="product"
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
                                                value={["js", "ts", "react"]}
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
                                                label="Work location"
                                                defaultValue="remote"
                                                onChange={(value) => console.log(value)}
                                            >
                                                <Radio label="Remote" value="remote" />
                                                <Radio label="Hybrid" value="hybrid" />
                                                <Radio label="Office" value="office" />
                                            </Radio.Group>
                                            <Switch
                                                label="Make profile public"
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
                                        <Stack gap="md">
                                            {/* 2FA Section */}
                                            <Stack gap="md">
                                                <Group justify="space-between" align="center" className={classes.inlineCard}>
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
                                                </Group>

                                                <Transition mounted={show2FASetup} transition="fade" duration={400} timingFunction="ease">
                                                    {(styles) => (
                                                        <Stack gap="md" style={styles}>
                                                            <Alert variant="info" w="100%">
                                                                Scan this QR code with your authenticator app (like Google Authenticator or Authy)
                                                            </Alert>

                                                            <Grid>
                                                                <Grid.Col span={6}>
                                                                    <Stack gap="md" align="center">
                                                                        <Box w={200} h={200} bg="gray.2">
                                                                            <img width={200} src="https://repository-images.githubusercontent.com/467626658/5307bcae-f9b9-42b0-87eb-9da34d00b4e1" alt="QR Code" />
                                                                        </Box>

                                                                        <Text size="sm" c="gray.7">
                                                                            Can't scan the QR code? Use this code instead:
                                                                        </Text>
                                                                        <Text fw={500} style={{ fontFamily: "monospace" }}>
                                                                            ABCD-EFGH-IJKL-MNOP
                                                                        </Text>
                                                                    </Stack>
                                                                </Grid.Col>

                                                                <Grid.Col span={6} style={{ display: "flex", alignItems: "center" }}>
                                                                    <Box bg="gray.0" p="xl" style={{ width: "100%", borderRadius: "8px" }}>
                                                                        <Stack gap="md">
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
                                            </Stack>

                                            <Divider my="xs" />

                                            {/* Password Section */}
                                            <Stack gap="md">
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
                                            <Stack gap="md">
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
                                            <Stack gap="md">
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
                                        <Flex wrap="wrap" align-content="baseline" justify="center" align="flex-start" gap="md" p="xxl" className={classes.supportTiles}>
                                            <Tile
                                                icon={<CircleInfoFarFAIcon />}
                                                variant="secondary"
                                                onClick={() => console.log("Documentation clicked")}
                                                size="lg"
                                                w="100%"
                                            >
                                                Documentation
                                            </Tile>
                                            <Tile
                                                icon={<CircleInfoFarFAIcon />}
                                                variant="secondary"
                                                onClick={() => console.log("Live chat clicked")}
                                                size="lg"
                                                w="100%"
                                            >
                                                Live chat
                                            </Tile>
                                            <Tile
                                                icon={<CogFarFAIcon />}
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
                                    </Tabs.Panel>
                                </Tabs>
                                <ActionBar
                                    visible={true}
                                    onSave={handleSave}
                                    onCancel={handleCancel}
                                />
                            </Stack>
                        </Paper>
                    </Stack>
                </Container>
            </Flex>
            <div>
                <Notification
                    message="Changes saved successfully"
                    variant="success"
                    visible={showNotification}
                    onClose={() => setShowNotification(false)}
                />
            </div>
        </MantineProvider>
    )
}
