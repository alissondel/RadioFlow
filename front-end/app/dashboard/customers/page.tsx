"use client";

import { useState } from "react";
import { Customers } from "./mock";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Field } from "@/components/ui/field";
import { ButtonGroup } from "@/components/ui/button-group";

// PAGES CUSTOM
import { BreadcrumbCustom } from "@/components/breadcrumb";
import { PaginationCustom } from "@/components/pagination";

import {
  Plus,
  Trash,
  Funnel,
  Pencil,
  Search,
} from "lucide-react";

import {
  Card,
  CardTitle,
  CardFooter,
  CardContent,
  CardHeader,
  CardDescription,
} from "@/components/ui/card";

import {
  Table,
  TableRow,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
} from "@/components/ui/table";

export default function CustomersPage() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // BEGIN PAGINATION
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);

  const totalItems = Customers.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / perPage));
  const currentPage = Math.min(Math.max(page, 1), totalPages);

  const start = (currentPage - 1) * perPage;
  const end = start + perPage;
  const currentItems = Customers.slice(start, end);
  // END PAGINATION

  return (
    <main className="flex flex-col gap-4 md:ml-64 p-4 min-h-screen">
      <BreadcrumbCustom
        href="/" //href="adm"
        menu="Administração"
        title="Cadastro de Clientes"
      />
      <Card className="flex flex-col flex-1 w-full">
        <CardHeader>
          <div className="flex justify-between items-center">
            <div className="flex flex-row items-center gap-4 justify-center sm:justify-start">
              <Plus className="cursor-pointer" />
              <CardTitle className="font-semibold text-2xl">Cadastro de Clientes</CardTitle>
            </div>
            <div className="flex cursor-pointer hover:text-blue-500">
              <button
                type="button"
                className="flex cursor-pointer hover:text-blue-500 items-center gap-2"
                onClick={() => setMobileFiltersOpen((prev) => !prev)}
              >
                <Funnel />
                <span className="text-sm">Filtros</span>
              </button>
            </div>
          </div>
        </CardHeader>
        {mobileFiltersOpen && (
          <CardHeader className="grid md:grid-cols-4 grid-cols-2 gap-4">
            <CardDescription>
              <Field>
                <ButtonGroup>
                  <Input placeholder="NOME FANTASIA" />
                  <Button variant="outline" className="cursor-pointer">
                    <Search />
                  </Button>
                </ButtonGroup>
              </Field>
            </CardDescription>
            <CardDescription>
              <Field>
                <ButtonGroup>
                  <Input placeholder="CPF" />
                  <Button variant="outline" className="cursor-pointer">
                    <Search />
                  </Button>
                </ButtonGroup>
              </Field>
            </CardDescription>
            <CardDescription>
              <Field>
                <ButtonGroup>
                  <Input placeholder="IE" />
                  <Button variant="outline" className="cursor-pointer">
                    <Search />
                  </Button>
                </ButtonGroup>
              </Field>
            </CardDescription>
            <CardDescription>
              <Field>
                <ButtonGroup>
                  <Input placeholder="SITUAÇÃO" />
                  <Button variant="outline" className="cursor-pointer">
                    <Search />
                  </Button>
                </ButtonGroup>
              </Field>
            </CardDescription>
          </CardHeader>
        )}
        <CardContent>
          <Table>
            <TableCaption>
              <div className="space-x-2">
                <select
                  className="h-8 rounded-md border border-input bg-background px-2 text-sm"
                  value={perPage}
                  onChange={(e) => {
                    const value = Number(e.target.value);
                    setPerPage(value);
                    setPage(1); // volta para a primeira página ao mudar quantidade
                  }}
                >
                  <option value={5}>5</option>
                  <option value={10}>10</option>
                  <option value={25}>25</option>
                  <option value={50}>50</option>
                </select>
                <span className="text-base">Items por paginas</span>
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
              {currentItems.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>
                    {item.tradeName.slice(0, 25) + (item.tradeName.length > 25 ? "..." : "")}
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
                    <Pencil className="cursor-pointer text-amber-300 hover:text-amber-500" />
                    <Trash className="cursor-pointer text-red-500 hover:text-red-900" />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter className="flex justify-center">
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground whitespace-nowrap">
              Página {currentPage} de {totalPages}
            </span>
            <PaginationCustom
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setPage}
            />
          </div>
        </CardFooter>
      </Card>
    </main>
  );
}
