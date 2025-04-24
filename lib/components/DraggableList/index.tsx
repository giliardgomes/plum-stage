import { forwardRef } from "react"
import {
    DragDropContext,
    Droppable,
    Draggable,
    DropResult,
} from "@hello-pangea/dnd"
import { Flex, Group } from "@mantine/core"
import { GripVerticalFarFAIcon, ArrowUpFarFAIcon, ArrowDownFarFAIcon } from "@/components/Icons"
import { Button } from "@/components/Button"
import classes from "./DraggableList.module.css"

export interface DraggableItem {
    id: string
    content: React.ReactNode
}

export interface DraggableListProps {
    /** Set a static selector for engagement tracking with third party tools (ie: Pendo) */
    "data-plum-id"?: string
    /** Array of items to be rendered in the list */
    items: DraggableItem[]
    /** Callback fired when items are reordered */
    onReorder: (items: DraggableItem[]) => void
    /** Optional className for custom styling */
    className?: string
    /** Display variant - 'default' shows drag handle, 'arrows' shows up/down buttons */
    variant?: "default" | "arrows"
}

export const DraggableList = forwardRef<HTMLDivElement, DraggableListProps>(({
    "data-plum-id": dataPlumId,
    items,
    onReorder,
    className,
    variant = "default",
}, ref) => {
    const handleDragEnd = (result: DropResult) => {
        if (!result.destination) {
            return
        }

        const reorderedItems = Array.from(items)
        const [removed] = reorderedItems.splice(result.source.index, 1)
        reorderedItems.splice(result.destination.index, 0, removed)

        onReorder(reorderedItems)
    }

    const moveItem = (index: number, direction: "up" | "down") => {
        const newIndex = direction === "up" ? index - 1 : index + 1
        if (newIndex < 0 || newIndex >= items.length) return

        const reorderedItems = Array.from(items)
        const [removed] = reorderedItems.splice(index, 1)
        reorderedItems.splice(newIndex, 0, removed)

        onReorder(reorderedItems)
    }

    if (variant === "arrows") {
        return (
            <DragDropContext onDragEnd={handleDragEnd}>
                <Droppable droppableId="droppable">
                    {(provided) => (
                        <div
                            ref={(element) => {
                                provided.innerRef(element)
                                if (ref) {
                                    if (typeof ref === "function") {
                                        ref(element)
                                    } else {
                                        ref.current = element
                                    }
                                }
                            }}
                            className={className}
                            data-plum-id={dataPlumId}
                            {...provided.droppableProps}
                        >
                            {items.map((item, index) => (
                                <Draggable
                                    key={item.id}
                                    draggableId={item.id}
                                    index={index}
                                >
                                    {(provided, snapshot) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            className={classes.item}
                                            data-dragging={snapshot.isDragging}
                                            style={{
                                                ...provided.draggableProps.style,
                                            }}
                                        >
                                            <Flex align="center" gap={0} style={{ width: "100%" }}>
                                                <div
                                                    {...provided.dragHandleProps}
                                                    className={classes.dragHandle}
                                                    style={{
                                                        cursor: snapshot.isDragging ? "grabbing" : "grab",
                                                    }}
                                                >
                                                    <GripVerticalFarFAIcon />
                                                </div>
                                                {item.content}
                                                <Group ml="auto" gap="xs">
                                                    <Button
                                                        variant="tertiary"
                                                        size="sm"
                                                        onClick={() => moveItem(index, "up")}
                                                        disabled={index === 0}
                                                        aria-label="Move up"
                                                    >
                                                        <ArrowUpFarFAIcon />
                                                    </Button>
                                                    <Button
                                                        variant="tertiary"
                                                        size="sm"
                                                        onClick={() => moveItem(index, "down")}
                                                        disabled={index === items.length - 1}
                                                        aria-label="Move down"
                                                    >
                                                        <ArrowDownFarFAIcon />
                                                    </Button>
                                                </Group>
                                            </Flex>
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        )
    }

    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="droppable">
                {(provided) => (
                    <div
                        ref={(element) => {
                            provided.innerRef(element)
                            if (ref) {
                                if (typeof ref === "function") {
                                    ref(element)
                                } else {
                                    ref.current = element
                                }
                            }
                        }}
                        className={className}
                        data-plum-id={dataPlumId}
                        {...provided.droppableProps}
                    >
                        {items.map((item, index) => (
                            <Draggable
                                key={item.id}
                                draggableId={item.id}
                                index={index}
                            >
                                {(provided, snapshot) => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        className={classes.item}
                                        data-dragging={snapshot.isDragging}
                                        style={{
                                            ...provided.draggableProps.style,
                                        }}
                                    >
                                        <Flex align="center" gap={0} style={{ width: "100%" }}>
                                            <div
                                                {...provided.dragHandleProps}
                                                className={classes.dragHandle}
                                                style={{
                                                    cursor: snapshot.isDragging ? "grabbing" : "grab",
                                                }}
                                            >
                                                <GripVerticalFarFAIcon />
                                            </div>
                                            {item.content}
                                        </Flex>
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    )
})

DraggableList.displayName = "DraggableList"
