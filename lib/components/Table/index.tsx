import { forwardRef } from "react"
import { Table as MantineTable, TableProps as MantineTableProps } from "@mantine/core"

import classes from "./Table.module.css"

export interface TableProps extends Omit<MantineTableProps, "classNames"> {
    /** Set a static selector for engagement tracking with third party tools (ie: Pendo) */
    "data-plum-id"?: string
}

type TableComponent = React.ForwardRefExoticComponent<TableProps & React.RefAttributes<HTMLTableElement>> & {
    Thead: typeof MantineTable.Thead
    Tbody: typeof MantineTable.Tbody
    Tr: typeof MantineTable.Tr
    Th: typeof MantineTable.Th
    Td: typeof MantineTable.Td
    Caption: typeof MantineTable.Caption
}

const Table = forwardRef<HTMLTableElement, TableProps>(({ className, ...rest }, ref) => {
    return (
        <MantineTable
            ref={ref}
            classNames={classes}
            {...rest}
        />
    )
}) as TableComponent

Table.displayName = "Table"

// Assign sub-components
Table.Thead = MantineTable.Thead
Table.Tbody = MantineTable.Tbody
Table.Tr = MantineTable.Tr
Table.Th = MantineTable.Th
Table.Td = MantineTable.Td
Table.Caption = MantineTable.Caption

export { Table }
