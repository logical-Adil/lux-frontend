"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Select } from "@mantine/core";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function CreateAccountTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="overflow-hidden rounded-md">
      <div>
        <div className="flex text-white flex-col sm:flex-row flex-wrap sm:items-center sm:justify-between my-3 gap-4 lg:gap-2 mb-8">
          <Select
            label={"# Select Rows :"}
            placeholder="Select Row"
            className="placeholder:text-white"
            data={["React", "Angular", "Vue", "Svelte"]}
            styles={{
              input: {
                backgroundColor: "transparent",
                border: "none",
                boxShadow: "none",
              },
            }}
          />
          {/* <h1 className="text-sm sm:text-base">Select Rows</h1> */}
          <input
            type="text"
            className="w-full max-w-sm p-1 px-2 bg-white text-black placeholder:text-gray-600 placeholder:text-xs rounded-[3px]"
            placeholder="Search by transaction No"
          />
        </div>
      </div>
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

export default CreateAccountTable;
