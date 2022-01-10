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

const SimpleTable = ({ columns, filters, children }: TableProps) => {
  return (
    <Table striped highlightOnHover>
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
