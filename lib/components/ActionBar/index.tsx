import { Button } from "@/components/Button"
import { Flex } from "@mantine/core"
import classes from "./ActionBar.module.css"

interface ActionBarProps {
    /** Function to call when Save button is clicked */
    onSave: () => void
    /** Function to call when Cancel button is clicked */
    onCancel: () => void
    /** Controls visibility of the action bar */
    visible: boolean
}

export function ActionBar({ onSave, onCancel, visible }: ActionBarProps) {
    if (!visible) return null

    return (
        <div className={classes.root}>
            <Flex justify="center" gap="xs">
                <Button
                    variant="secondary"
                    onClick={onCancel}
                    data-plum-id="action-bar-cancel"
                >
                    Cancel
                </Button>
                <Button
                    variant="accent"
                    onClick={onSave}
                    data-plum-id="action-bar-save"
                >
                    Save
                </Button>
            </Flex>
        </div>
    )
}
