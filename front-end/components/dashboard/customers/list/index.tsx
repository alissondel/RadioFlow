import React from "react";

import { Badge } from "@/components/ui/badge";
import { Trash, Pencil } from "lucide-react";
import type { CustomersData } from "@/interfaces/customers-types";

import {
  Table,
  TableRow,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
} from "@/components/ui/table";

interface CustomersListProps {
  perPage: number;
  setPerPage: (key: number) => void;
  setPage: (key: number) => void;
  currentItems: CustomersData[];
  onEdit: (customer: CustomersData) => void;
  onDelete: (customer: CustomersData) => void;
}

export function CustomersList({
  perPage,
  setPerPage,
  setPage,
  currentItems,
  onEdit,
  onDelete,
}: CustomersListProps) {
  return (
    <React.Fragment>
      <Table>
        <TableCaption>
          <div className="space-x-2">
            <select
              className="h-8 rounded-md border border-input bg-background px-2 text-sm"
              value={perPage}
              onChange={(e) => {
                setPerPage(+e.target.value);
                setPage(1);
              }}
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
            </select>
            <span className="text-base">Items por páginas</span>
          </div>
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-25">Código</TableHead>
            <TableHead>Nome Fantasia</TableHead>
            <TableHead>CNPJ/CPF</TableHead>
            <TableHead>IE</TableHead>
            <TableHead className="text-center">Situação</TableHead>
            <TableHead className="text-right">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentItems.map((item: CustomersData) => (
            <TableRow key={item.id}>
              <TableCell>{item.id}</TableCell>
              <TableCell>
                {item.tradeName.slice(0, 25) +
                  (item.tradeName.length > 25 ? "..." : "")}
              </TableCell>
              <TableCell>{item.cnpjCpf}</TableCell>
              <TableCell>{item.ie}</TableCell>
              <TableCell className="text-center">
                {item.status ? (
                  <Badge className="bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300">
                    Ativo
                  </Badge>
                ) : (
                  <Badge className="bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300">
                    Inativo
                  </Badge>
                )}
              </TableCell>
              <TableCell className="flex justify-end items-center gap-2">
                <Pencil
                  className="cursor-pointer text-amber-300 hover:text-amber-500"
                  onClick={() => onEdit(item)}
                />
                <Trash
                  className="cursor-pointer text-red-500 hover:text-red-900"
                  onClick={() => onDelete(item)}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
