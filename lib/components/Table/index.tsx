import { Table as MantineTable } from "@mantine/core"
import { Pagination } from "@/components/Pagination"
import { Stack } from "@mantine/core"
import { useState } from "react"
import classes from "./Table.module.css"

export interface Column<T> {
    key: string
    header: string
    render?: (value: T) => React.ReactNode
    width?: string | number
}

export interface EnhancedTableProps<T> {
    /** Set a static selector for engagement tracking with third party tools (ie: Pendo) */
    "data-plum-id"?: string
    /** Data to be displayed in the table */
    data: T[]
    /** Column definitions */
    columns: Column<T>[]
    /** Optional loading state */
    loading?: boolean
    /** Optional empty state message */
    emptyMessage?: string
    /** Items per page, defaults to 10 */
    itemsPerPage?: number
}

const EnhancedTable = <T extends Record<string, any>>({
    data,
    columns,
    loading,
    emptyMessage = "No data available",
    itemsPerPage = 11,
    ...rest
}: EnhancedTableProps<T>) => {
    const [currentPage, setCurrentPage] = useState(1)

    // Calculate total pages
    const totalPages = Math.ceil(data.length / itemsPerPage)

    // Get current page data
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const currentData = data.slice(startIndex, endIndex)

    return (
        <Stack gap="md">
            <MantineTable classNames={classes} {...rest}>
                <MantineTable.Thead>
                    <MantineTable.Tr>
                        {columns.map((column) => (
                            <MantineTable.Th
                                key={column.key}
                                style={column.width ? { width: column.width } : undefined}
                            >
                                {column.header}
                            </MantineTable.Th>
                        ))}
                    </MantineTable.Tr>
                </MantineTable.Thead>
                <MantineTable.Tbody>
                    {loading
                        ? (
                            <MantineTable.Tr>
                                <MantineTable.Td colSpan={columns.length} align="center">
                                    Loading...
                                </MantineTable.Td>
                            </MantineTable.Tr>
                        )
                        : currentData.length === 0
                            ? (
                                <MantineTable.Tr>
                                    <MantineTable.Td colSpan={columns.length} align="center">
                                        {emptyMessage}
                                    </MantineTable.Td>
                                </MantineTable.Tr>
                            )
                            : (
                                currentData.map((row, rowIndex) => (
                                    <MantineTable.Tr key={rowIndex}>
                                        {columns.map((column, cellIndex) => (
                                            <MantineTable.Td
                                                key={`${rowIndex}-${column.key}`}
                                                data-cell-index={cellIndex}
                                            >
                                                {column.render
                                                    ? column.render(row)
                                                    : row[column.key]}
                                            </MantineTable.Td>
                                        ))}
                                    </MantineTable.Tr>
                                ))
                            )}
                </MantineTable.Tbody>
            </MantineTable>

            {totalPages > 1 && (
                <Pagination
                    total={totalPages}
                    value={currentPage}
                    onChange={setCurrentPage}
                />
            )}
        </Stack>
    )
}

export { EnhancedTable as Table }
export { TableActions } from "./TableActions"
