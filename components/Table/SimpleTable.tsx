import { Table } from "@mantine/core";
import React from "react";

interface Column {
  title: string;
  filter: boolean;
}

interface TableProps {
  columns: Column[];
  filters?: React.ReactNode;
  children: React.ReactNode;
}

/**
 * Component that renders a Table
 * @param columns Column[] containing columns to render
 * @param filters Filter Component containgin filters to render
 * @returns <SimpleTable columns filters />
 */
const SimpleTable = ({ columns, filters, children }: TableProps) => {
  return (
    <Table data-testid="table" striped highlightOnHover>
      <thead>
        <tr>
          {columns.map((e) => (
            <th key={e.title}>{e.title}</th>
          ))}
        </tr>
        {filters}
      </thead>
      <tbody>{children}</tbody>
    </Table>
  );
};

export default SimpleTable;
