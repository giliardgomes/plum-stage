import { Container, Stack, Text, Paper, Title, Flex, Grid } from "@mantine/core"
import { MantineProvider } from "@mantine/core"
import React, { useState } from "react"
import classes from './LandingPage.module.css'

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

// Import Plum components
import { Button } from "../lib/components/Button"
import { Switch } from "../lib/components/Switch"
import { Label } from "../lib/components/Label"
import { Tooltip } from "../lib/components/Tooltip"
import { TextField } from "../lib/components/TextField"
import { Alert } from "../lib/components/Alert"
import { Dialog } from "../lib/components/Dialog"
import { Tabs } from "../lib/components/Tabs"
import { Tile } from "../lib/components/Tile"
import {
    CircleInfoFarFAIcon,
    TriangleExclamationFarFAIcon,
    CircleExclamationFarFAIcon,
    UserFarFAIcon,
    CogFarFAIcon,
} from "../lib/components/Icons"

export const LandingPage = () => {
    const [dialogOpen, setDialogOpen] = useState(false)
    const [currentTab, setCurrentTab] = useState("profile")

    return (
        <MantineProvider
            theme={plumTheme}
            cssVariablesResolver={plumVariables}
        >
            <Container size="lg" py="xl">
                <Stack gap="xl">
                    {/* Header */}
                    <Stack ta="center" gap="md">
                        <Title order={1}>Plum components demo</Title>
                        <Text size="lg" c="dimmed" maw={600} mx="auto">
                            Interactive demonstration of plum Design System components
                        </Text>
                    </Stack>

                    {/* Alert Section */}
                    <Alert
                        variant="info"
                        title="Welcome to the demo"
                        action={() => console.log("Alert action clicked")}
                        actionLabel="Get started"
                    >
                        This demo showcases various plum components working together in a realistic context.
                    </Alert>

                    {/* Main Content */}
                    <Grid>
                        <Grid.Col span={8}>
                            {/* Tabs Section */}
                            <Paper p="xl" radius="md" withBorder>
                                <Tabs value={currentTab} onChange={(value) => setCurrentTab(value as string)}>
                                    <Tabs.List>
                                        <Tabs.Tab value="profile" leftSection={<UserFarFAIcon />}>
                                            Profile
                                        </Tabs.Tab>
                                        <Tabs.Tab value="settings" leftSection={<CogFarFAIcon />}>
                                            Settings
                                        </Tabs.Tab>
                                        <Tabs.Tab value="notifications" leftSection={<TriangleExclamationFarFAIcon />}>
                                            Notifications
                                        </Tabs.Tab>
                                    </Tabs.List>

                                    <Tabs.Panel value="profile" pt="md">
                                        <Stack gap="md">
                                            <TextField label="Full name" placeholder="Enter your full name" />
                                            <TextField
                                                label="Email"
                                                placeholder="Enter your email"
                                                error="Please enter a valid email"
                                            />
                                            <Switch label="Make profile public" defaultChecked data-plum-id="make-profile-public-switch" />
                                            <Flex gap="xs" className={classes['action-buttons']}>
                                                <Button variant="accent">Save changes</Button>
                                                <Button variant="secondary">Cancel</Button>
                                            </Flex>
                                        </Stack>
                                    </Tabs.Panel>

                                    <Tabs.Panel value="settings" pt="md">
                                        <Stack gap="md">
                                            <Switch label="Email notifications" data-plum-id="email-notifications-switch" />
                                            <Switch label="Push notifications" data-plum-id="push-notifications-switch" />
                                            <Switch
                                                label="Two-factor authentication"
                                                data-plum-id="two-factor-auth-switch"
                                                classNames={{ root: "custom-switch" }}
                                                error="Please enable two-factor authentication for better security"
                                            />
                                        </Stack>
                                    </Tabs.Panel>

                                    <Tabs.Panel value="notifications" pt="md">
                                        <Stack gap="md">
                                            <Alert variant="warning">
                                                You have 3 unread notifications
                                            </Alert>
                                            <Alert variant="error">
                                                Your subscription will expire soon
                                            </Alert>
                                        </Stack>
                                    </Tabs.Panel>
                                </Tabs>
                            </Paper>
                        </Grid.Col>

                        <Grid.Col span={4}>
                            {/* Quick Actions */}
                            <Stack gap="md">
                                <Tile
                                    icon={<CircleInfoFarFAIcon />}
                                    onClick={() => setDialogOpen(true)}
                                >
                                    Need help?
                                </Tile>
                                <Tile
                                    icon={<TriangleExclamationFarFAIcon />}
                                    variant="secondary"
                                >
                                    System status
                                </Tile>
                            </Stack>
                        </Grid.Col>
                    </Grid>

                    {/* Dialog */}
                    <Dialog
                        opened={dialogOpen}
                        onClose={() => setDialogOpen(false)}
                        title="Get help"
                        icon={<CircleInfoFarFAIcon />}
                        buttonProps={[
                            {
                                children: "Contact support",
                                onClick: () => setDialogOpen(false),
                                variant: "primary",
                            },
                            {
                                children: "Close",
                                onClick: () => setDialogOpen(false),
                                variant: "secondary",
                            },
                        ]}
                    >
                        Need assistance? Our support team is here to help you with any questions or issues you might have.
                    </Dialog>
                </Stack>
            </Container>
        </MantineProvider>
    )
}
