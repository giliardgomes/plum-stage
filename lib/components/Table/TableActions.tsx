import { Group } from "@mantine/core"
import { Button } from "../Button"
import { memo } from "react"

interface TableActionsProps {
    onEdit: () => void
    onDelete: () => void
}

export const TableActions = memo(({ onEdit, onDelete }: TableActionsProps) => (
    <Group gap="xs">
        <Button
            variant="tertiary"
            size="sm"
            leftSection={<i className="fa-regular fa-pen-to-square" />}
            onClick={onEdit}
        >
            Edit
        </Button>
        <Button
            variant="tertiary"
            size="sm"
            danger
            leftSection={<i className="fa-regular fa-trash" />}
            onClick={onDelete}
        >
            Delete
        </Button>
    </Group>
))

TableActions.displayName = "TableActions"
