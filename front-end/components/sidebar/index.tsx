import Link from 'next/link';

import { Button } from "../ui/button";

import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";

import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle
} from "@/components/ui/sheet";

import {
  PanelBottom,
  Package,
  Computer,
  Building2,
  CircleCheckBig,
  DollarSign,
  Proportions,
  LogOut
} from "lucide-react";

const itemsSidebar = [
  {
    href: '#',
    label: 'Empresas',
    icon: <Building2 />,
    Children : [{}]
  },
  {
    href: '#',
    label: 'Administração',
    icon: <Computer />,
    Children : [{}]
  },
  {
    href: '#',
    label: 'Comercial',
    icon: <CircleCheckBig />,
    Children : [{}]
  },
  {
    href: '#',
    label: 'Financeiro',
    icon: <DollarSign />,
    Children : [{}]
  },
  {
    href: '#',
    label: 'Relatórios',
    icon: <Proportions />,
    Children : [{}]
  }
]

export function Sidebar () {
  return (
    <div className="flex w-full flex-col bg-muted/40">

      {/* PC */}
      <aside className='fixed inset-y-0 left-0 z-10 hidden w-14 border-r bg-background sm:flex flex-col'>
        <nav className="flex flex-col items-center gap-4 px-2 py-5">
          <TooltipProvider>
            <Link
              href="#"
              prefetch={false}
              className='flex h-9 w-9 shrink-0 items-center justify-center bg-primary text-primary-foreground rounded-full'
            >
              <Package className="h-4 w-4" />
              <span className="sr-only">Logo do Projeto</span>
            </Link>
            {itemsSidebar.map((item, index) => {
              return (
                <Tooltip key={index}>
                  <TooltipTrigger asChild>
                    <Link
                    href="#"
                    prefetch={false}
                    className='flex h-9 w-9 shrink-0 items-center justify-center rounded-lg
                      text-muted-foreground transition-colors hover:text-foreground'
                    >
                      {item.icon}
                      <span className="sr-only">{item.label}</span>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side='right'>
                    {item.label}
                  </TooltipContent>
                </Tooltip>
              )
            })}
          </TooltipProvider>
        </nav>
        <nav className='mt-auto flex flex-col items-center gap-4 px-2 py-5'>
            <TooltipProvider>
              <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                    href="#"
                    prefetch={false}
                    className='flex h-9 w-9 shrink-0 items-center justify-center rounded-lg
                      text-muted-foreground transition-colors hover:text-foreground'
                    >
                      <LogOut className="h-5 w-5 text-red-500" />
                      <span className="sr-only">Sair</span>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side='right'>
                    Sair
                  </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </nav>
      </aside>

      {/* Mobile */}
      <div className="sm:hidden flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header className="sticky top-0 z-30 flex h-14 items-center px-4
          border-b bg-background gap-4 sm:static sm:h-auto sm:border-0
          sm:bg-transparent sm:px-6"
        >
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="sm-hidden">
                <PanelBottom className="w-5 h-5"/>
                <SheetTitle className="sr-only">Abrir / Fechar Menu</SheetTitle>
              </Button>
            </SheetTrigger>

            <SheetContent side="left" className="sm:max-w-x">
              <nav className="grid gap-6 text-lg font-medium px-6 py-4">
                <Link
                  href="#"
                  prefetch={false}
                  className="flex h-10 w-10 bg-primary rounded-full text-lg
                  items-center justify-center text-primary-foreground md:text-base gap-2"
                >
                  <Package className="h-5 w-5 transition-all" />
                  <span className="sr-only">Logo do Projeto</span>
                </Link>
                {itemsSidebar.map((item, index) => {
                  return (
                    <Link
                    key={index}
                    href={item.href}
                    prefetch={false}
                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  >
                    {item.icon}
                    {item.label}
                  </Link>
                  )
                })}
              </nav>
            </SheetContent>
          </Sheet>
          <h2>Menu</h2>
        </header>
      </div>
    </div>
  )
}