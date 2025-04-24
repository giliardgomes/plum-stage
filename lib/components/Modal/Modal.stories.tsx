import type { Meta, StoryObj } from "@storybook/react"
import { Modal } from "@/components/Modal"
import { Flex, Text, Stack } from "@mantine/core"
import classes from "@/components/Modal/Modal.stories.module.css"
import { Select } from "@/components/Select"
import { TextField } from "@/components/TextField"
import { Switch } from "@/components/Switch"
import { MultiSelect } from "@/components/MultiSelect"
import { Radio } from "@/components/Radio"
import { Checkbox } from "@/components/Checkbox"
import { SelectableTag } from "@/components/SelectableTag"

const meta = {
    title: "Components/Modal",
    component: Modal,
    parameters: {
        docs: {
            description: {
                component: (
                    "<a href='https://www.figma.com/file/mjUSsYy7JxOtylceOQgr3r/Design-System' target='_blank' rel='noopener noreferrer'><i class='fa-brands fa-figma'></i>  Figma</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;"
                    + "<a href='https://plum.quorum.us' target='_blank' rel='noopener noreferrer'><i class='fa-regular fa-folder'></i>  Documentation</a>"
                ),
            },
            story: {
                height: "550px",
                inline: false,
            },
        },
        layout: "fullscreen",
    },
    tags: ["autodocs"],
    argTypes: {
        opened: { control: "boolean" },
        title: { control: "text" },
        variant: {
            control: "select",
            options: ["default", "confirmation", "warning", "danger"],
        },
        size: { control: "text" },
        message: { control: "text" },
        primaryActionLabel: { control: "text" },
    },
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof Modal>

const defaultProps = {
    opened: true,
    onClose: () => {},
}

export const Default: Story = {
    args: {
        ...defaultProps,
        title: "Edit profile",
        variant: "default",
        size: "560px",
        actions: [
            {
                label: "Cancel",
                onClick: () => {},
                variant: "tertiary",
            },
            {
                label: "Save",
                onClick: () => {},
            },
        ],
        children: (
            <div style={{ color: "var(--mantine-color-gray-7)" }}>
                Update your profile information and preferences.
            </div>
        ),
    },
}

export const LongContent: Story = {
    args: {
        ...defaultProps,
        className: classes.body,
        size: "720px",
        title: "Complex modal",
        actions: [
            {
                label: "Cancel",
                onClick: () => {},
                variant: "tertiary",
            },
            {
                label: "Save",
                onClick: () => {},
            },
        ],
        children: (
            <Stack gap="lg">
                <TextField
                    label="Full name"
                    defaultValue="Sarah Thompson"
                />
                <TextField
                    label="Email"
                    defaultValue="sarah.thompson@example.com"
                    type="email"
                />
                <Select
                    label="Role"
                    defaultValue="editor"
                    data={[
                        { value: "admin", label: "Administrator" },
                        { value: "editor", label: "Editor" },
                        { value: "viewer", label: "Viewer" },
                    ]}
                />
                <TextField
                    label="Phone"
                    defaultValue="(555) 123-4567"
                />
                <MultiSelect
                    label="Skills"
                    defaultValue={["js", "react"]}
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
                    onChange={() => {}}
                    label="Work location"
                    defaultValue="remote"
                    horizontal
                >
                    <Radio label="Remote" value="remote" />
                    <Radio label="Hybrid" value="hybrid" />
                    <Radio label="Office" value="office" />
                </Radio.Group>
                <Checkbox.Group
                    label="Tools"
                    orientation="horizontal"
                >
                    <Checkbox value="vscode" label="VS Code" defaultChecked />
                    <Checkbox value="github" label="GitHub" defaultChecked />
                    <Checkbox value="jira" label="Jira" />
                    <Checkbox value="slack" label="Slack" />
                    <Checkbox value="figma" label="Figma" />
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
                    label="Email notifications"
                    defaultChecked
                />
                <Switch
                    label="Two-factor authentication"
                    description="Enhance your account security"
                />
            </Stack>
        ),
    },
}

export const Confirmation: Story = {
    args: {
        ...defaultProps,
        variant: "confirmation",
        title: "Ready to send?",
        message: "The message will be sent to the recipients.",
        primaryActionLabel: "Send",
        onPrimaryAction: () => {},
        onSecondaryAction: () => {},
    },
}

export const Warning: Story = {
    args: {
        ...defaultProps,
        variant: "warning",
        title: "Leave page",
        message: "You have unsaved changes that will be discarded",
        primaryActionLabel: "Leave",
        onPrimaryAction: () => {},
        onSecondaryAction: () => {},
    },
}

export const Danger: Story = {
    args: {
        ...defaultProps,
        variant: "danger",
        title: "Delete message",
        message: "This action cannot be undone",
        primaryActionLabel: "Delete",
        onPrimaryAction: () => {},
        onSecondaryAction: () => {},
    },
}

export const WithLeftAction: Story = {
    args: {
        ...defaultProps,
        title: "Edit profile",
        variant: "default",
        size: "560px",
        actions: [
            {
                label: "Skip",
                onClick: () => {},
                variant: "tertiary",
                position: "left",
            },
            {
                label: "Cancel",
                onClick: () => {},
                variant: "secondary",
            },
            {
                label: "Save",
                onClick: () => {},
            },
        ],
        children: (
            <Stack gap="lg">
                <TextField
                    label="Full name"
                    defaultValue="Sarah Thompson"
                />
                <TextField
                    label="Email"
                    defaultValue="sarah.thompson@example.com"
                    type="email"
                />
                <Select
                    label="Role"
                    defaultValue="editor"
                    data={[
                        { value: "admin", label: "Administrator" },
                        { value: "editor", label: "Editor" },
                        { value: "viewer", label: "Viewer" },
                    ]}
                />
            </Stack>
        ),
    },
}
