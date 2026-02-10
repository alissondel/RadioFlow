import { Menu, Bell, SunMoon, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useTheme } from "next-themes";

type NavbarProps = {
  onOpenMobileSidebar: () => void
}

export function Navbar({ onOpenMobileSidebar }: NavbarProps) {
  const { setTheme } = useTheme();
  return (
    <header className="flex h-14 w-full items-center gap-4 bg-background px-4 lg:px-6 mt-2">
      {/* Esquerda: menu hamburger / logo */}
      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden cursor-pointer"
          onClick={onOpenMobileSidebar}
        >
          <Menu className="h-5 w-5" />
        </Button>
      </div>

      {/* Centro: search bar */}
      <div className="flex flex-1 lg:justify-start lg:ml-64 justify-end">
        <div className="flex w-full max-w-xl items-center gap-2 rounded-md border bg-muted/40 px-3 py-1.5">
          <Search className="h-4 w-4 text-muted-foreground" />
          <Input
            className="border-0 bg-transparent px-0 text-sm shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
            placeholder="Search or type command..."
          />
          <span className="hidden rounded-md bg-background px-2 py-0.5 text-xs font-medium text-muted-foreground md:inline-flex">
            ⌘K
          </span>
        </div>
      </div>

      {/* Direita: ícones + usuário */}
      <div className="flex items-center gap-3">
        <DropdownMenu>
          <Tooltip>
            <TooltipTrigger asChild>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="hidden sm:inline-flex rounded-full cursor-pointer"
                >
                  <SunMoon className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
            </TooltipTrigger>
            <TooltipContent side="left">Tema</TooltipContent>
          </Tooltip>

          <DropdownMenuContent align="end">
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={() => setTheme("light")}
            >
              Claro
            </DropdownMenuItem>
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={() => setTheme("dark")}
            >
              Escuro
            </DropdownMenuItem>
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={() => setTheme("system")}
            >
              Sistema
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        {/* Notificações */}
        <DropdownMenu>
          <Tooltip>
            <TooltipTrigger asChild>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full cursor-pointer"
                >
                  <Bell className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
            </TooltipTrigger>
            <TooltipContent side="right">Notificações</TooltipContent>
          </Tooltip>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuLabel className="text-center">Notificações</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Distribuição não realizada do contrato 1</DropdownMenuItem>
            <DropdownMenuItem>Teste</DropdownMenuItem>
            <DropdownMenuItem>1</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Avatar / menu de usuário */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-2 rounded-full border bg-background px-2 py-1 text-sm hover:bg-accent">
              <Avatar className="h-8 w-8">
                <AvatarImage src="https://github.com/alissondel.png" alt="User" />
                <AvatarFallback>AD</AvatarFallback>
              </Avatar>
              <span className="hidden font-medium md:inline">Alisson Delatim</span>
              <span className="hidden text-xs text-muted-foreground md:inline">
                ▾
              </span>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuLabel className="text-center">Minha conta</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Perfil</DropdownMenuItem>
            <DropdownMenuItem>Configurações</DropdownMenuItem>
            <DropdownMenuItem>Sair</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
