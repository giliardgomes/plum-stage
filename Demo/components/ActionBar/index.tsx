import { Button } from "@/components/Button"
import { Group } from "@mantine/core"
import classes from "./ActionBar.module.css"

interface ActionBarProps {
    onSave: () => void
    onCancel: () => void
    visible: boolean
}

export function ActionBar({ onSave, onCancel, visible }: ActionBarProps) {
    if (!visible) return null

    return (
        <div className={classes.actionBar}>
            <Group mt="xl" justify="flex-end">
                <Button
                    variant="tertiary"
                    onClick={onCancel}
                >
                    Cancel
                </Button>
                <Button
                    variant="primary"
                    onClick={onSave}
                >
                    Save changes
                </Button>
            </Group>
        </div>
    )
}
