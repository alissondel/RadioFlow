"use client";

import { useState } from "react";
import { Customers } from "./mock";

import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { ButtonGroup } from "@/components/ui/button-group";
import type { CustomersData } from "@/interfaces/customers-types";

import { Plus, Funnel, Search } from "lucide-react";

// PAGES CUSTOM
import { CustomersList } from "@/components/dashboard/customers/list";
import { CustomersForm } from "@/components/dashboard/customers/form";
import { CustomBreadcrumb } from "@/components/breadcrumb";
import { CustomPagination } from "@/components/pagination";

import {
  Card,
  CardTitle,
  CardFooter,
  CardContent,
  CardHeader,
  CardDescription,
} from "@/components/ui/card";
import CustomersDelete from "@/components/dashboard/customers/delete";

export default function CustomersPage() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpenDelete, setModalOpenDelete] = useState(false);
  const [selectedItem, setSelectedItem] = useState<CustomersData | null>(null);

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

  // OPEN E CLOSE MODAL CREATE OR EDIT
  function handleOpenFormModal(customer: CustomersData | null) {
    if (customer === null) {
      setSelectedItem(null);
      setModalOpen(true);
    } else {
      setModalOpen(true);
      setSelectedItem(customer);
    }
  }

  function handleCloseModal() {
    setModalOpen(false);
    setSelectedItem(null);
  }

  // OPEN E CLOSE MODAL DELETE
  function handleOpenDeleteModal(customer: CustomersData) {
    setSelectedItem(customer);
    setModalOpenDelete(true);
  }

  function handleDeleteModalClose() {
    setModalOpenDelete(false);
    setSelectedItem(null);
  }

  return (
    <main className="flex flex-col gap-4 lg:ml-64 p-4 min-h-screen">
      <CustomBreadcrumb
        href="/"
        menu="Administração"
        title="Cadastro de Clientes"
      />
      <Card className="flex flex-col flex-1 w-full">
        <CardHeader>
          <div className="flex justify-between items-center">
            <div className="flex flex-row items-center gap-4 justify-center sm:justify-start">
              <Plus
                className="cursor-pointer"
                onClick={() => handleOpenFormModal(null)}
              />
              <CardTitle className="font-semibold text-2xl">
                Cadastro de Clientes
              </CardTitle>
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
          <CustomersList
            perPage={perPage}
            setPerPage={setPerPage}
            setPage={setPage}
            currentItems={currentItems}
            onEdit={handleOpenFormModal}
            onDelete={handleOpenDeleteModal} // NOVO
          />
        </CardContent>
        <CardFooter className="flex justify-center">
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground whitespace-nowrap">
              Página {currentPage} de {totalPages}
            </span>
            <CustomPagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setPage}
            />
          </div>
        </CardFooter>
      </Card>
      <CustomersForm
        modalOpen={modalOpen}
        setModalOpen={handleCloseModal}
        selectedItem={selectedItem}
      />
      <CustomersDelete
        modalOpenDelete={modalOpenDelete}
        setModalOpenDelete={handleDeleteModalClose}
        selectedItem={selectedItem}
      />
    </main>
  );
}
