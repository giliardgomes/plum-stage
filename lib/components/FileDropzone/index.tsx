import { Group, Text, Flex } from "@mantine/core"
import { Dropzone, type DropzoneProps } from "@mantine/dropzone"
import { ArrowFromBottomFarFAIcon } from "../Icons"
import classes from "./FileDropzone.module.css"

export interface FileDropzoneProps extends Partial<DropzoneProps> {
    /** Set a static selector for engagement tracking with third party tools (ie: Pendo) */
    "data-plum-id"?: string
    /** Optional className for custom styling */
    className?: string
    /** File types to accept */
    accept?: DropzoneProps["accept"]
    /** Maximum file size in bytes */
    maxSize?: number
}

export function FileDropzone({
    className,
    accept,
    maxSize = 5 * 1024 ** 2, // 5MB default
    ...props
}: FileDropzoneProps) {
    return (
        <Dropzone
            className={className}
            accept={accept}
            maxSize={maxSize}
            classNames={classes}
            onDrop={() => {}}
            {...props}
        >
            <Group justify="center" gap="xl">
                <Flex>
                    <Dropzone.Accept>
                        <ArrowFromBottomFarFAIcon />
                    </Dropzone.Accept>
                    <Dropzone.Reject>
                        <ArrowFromBottomFarFAIcon />
                    </Dropzone.Reject>
                    <Dropzone.Idle>
                        <ArrowFromBottomFarFAIcon />
                    </Dropzone.Idle>
                </Flex>

                <div>
                    <Text size="md" fw={500} c="gray.9" inline>
                        Drag files here or click to select files
                    </Text>
                    <Text size="xs" c="gray.7" mt={7}>
                        Files should not exceed
                        {" "}
                        {Math.round(maxSize / 1024 / 1024)}
                        MB
                    </Text>
                </div>
            </Group>
        </Dropzone>
    )
}

FileDropzone.displayName = "FileDropzone"
