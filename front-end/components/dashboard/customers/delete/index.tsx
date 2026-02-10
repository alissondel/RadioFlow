import type { CustomersData } from "@/interfaces/customers-types";
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogTitle,
  DialogClose,
  DialogFooter,
  DialogHeader,
  DialogContent,
  DialogDescription,
} from "@/components/ui/dialog"

interface CustomersDeleteProps {
  modalOpenDelete: boolean;
  setModalOpenDelete: () => void;           // fecha modal (já faz reset no pai)
  selectedItem: CustomersData | null; // null = cadastrar, objeto = editar
}

export default function CustomersDelete({
  modalOpenDelete,
  setModalOpenDelete,
  selectedItem
}: CustomersDeleteProps) {
  const handleClose = () => setModalOpenDelete();

  function handleSubmit() {
    console.log(selectedItem?.id);
    handleClose();
  };

  return (
    <Dialog open={modalOpenDelete} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>Excluir Cliente</DialogTitle>
          <DialogDescription>
            Certeza que você deseja excluir o cadastro do cliente do sistema.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button
              variant="outline"
              onClick={handleClose}
            >
              Cancelar
            </Button>
          </DialogClose>
          <Button
            type="button"
            onSubmit={handleSubmit}
          >
            Deletar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}