import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup } from "@/components/ui/field";
import type { CustomersData } from "@/interfaces/customers-types";

import {
  Dialog,
  DialogTitle,
  DialogClose,
  DialogFooter,
  DialogHeader,
  DialogContent,
  DialogDescription,
} from "@/components/ui/dialog";

interface CustomersFormProps {
  modalOpen: boolean;
  setModalOpen: () => void;           // fecha modal (já faz reset no pai)
  selectedItem: CustomersData | null; // null = cadastrar, objeto = editar
}

export function CustomersForm({
  modalOpen,
  setModalOpen,
  selectedItem,
}: CustomersFormProps) {
  const handleClose = () => setModalOpen();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    handleClose();
  };

  return (
    <Dialog open={modalOpen} onOpenChange={handleClose}>
      <form onSubmit={handleSubmit}>
        <DialogContent className="sm:min-w-max">
          <DialogHeader>
            <DialogTitle>
              {!!selectedItem ? "Editar Cliente" : "Cadastrar Cliente"}
            </DialogTitle>
            <DialogDescription>
              Preencha os dados do cliente e clique em salvar.
            </DialogDescription>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor="tradeName">Nome Fantasia</Label>
              <Input
                id="tradeName"
                name="tradeName"
                defaultValue={selectedItem?.tradeName || ""}
              />
            </Field>
            <Field>
              <Label htmlFor="cnpjCpf">CNPJ/CPF</Label>
              <Input
                id="cnpjCpf"
                name="cnpjCpf"
                defaultValue={selectedItem?.cnpjCpf || ""}
              />
            </Field>
            <Field>
              <Label htmlFor="ie">IE</Label>
              <Input
                id="ie"
                name="ie"
                defaultValue={selectedItem?.ie || ""}
              />
            </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose asChild>
              <Button
                type="button"
                variant="outline"
                onClick={handleClose}
              >
                Cancelar
              </Button>
            </DialogClose>
            <Button type="submit">Salvar</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
