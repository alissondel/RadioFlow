import Link from 'next/link'

import { useState } from "react"
import { useTheme } from 'next-themes'

import { Button } from "@/components/ui/button"

import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip"
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle
} from "@/components/ui/sheet"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
  PanelBottom,
  Package,
  Computer,
  Building2,
  CircleCheckBig,
  DollarSign,
  Proportions,
  LogOut,
  ChevronDown,
  ChevronUp,
  Moon,
  Sun
} from "lucide-react"

const itemsSidebar = [
  {
    href: '#',
    label: 'Configurações',
    icon: <Building2 />,
    children: [
      {
        href: '#',
        label: 'Cadastro de Empresa',
        icon: <Building2 />,
      },
      {
        href: '#',
        label: 'Cadastro de Usuários',
        icon: <Building2 />,
      },
      {
        href: '#',
        label: 'Permissões de usuários',
        icon: <Building2 />,
      },
      {
        href: '#',
        label: 'Parametros do sistema',
        icon: <Building2 />,
      },
    ]
  },
  {
    href: '#',
    label: 'Administração',
    icon: <Computer />,
    children: [
      {
        href: '#',
        label: 'Cadastrar Clientes',
        icon: <Building2 />,
      },
      {
        href: '#',
        label: 'Cadastrar Representantes',
        icon: <Building2 />,
      },
      {
        href: '#',
        label: 'Cadastrar Contato comercial',
        icon: <Building2 />,
      },
      {
        href: '#',
        label: 'Cadastrar Portador',
        icon: <Building2 />,
      }
    ],
  },
  {
    href: '#',
    label: 'Comercial',
    icon: <CircleCheckBig />,
    children: [
      {
        href: '#',
        label: 'Cadastrar Contrato',
        icon: <Building2 />,
      },
      {
        href: '#',
        label: 'Visualizar Distribuição',
        icon: <Building2 />,
      },
      {
        href: '#',
        label: 'Emissão de Documentos',
        icon: <Building2 />,
      },
      {
        href: '#',
        label: 'Criar horários operacionais',
        icon: <Building2 />,
      },
    ]
  },
  {
    href: '#',
    label: 'Financeiro',
    icon: <DollarSign />,
    children: [
      {
        href: '#',
        label: 'Contas a Receber',
        icon: <Building2 />,
      },
      {
        href: '#',
        label: 'Contas a Pagar',
        icon: <Building2 />,
      },
      {
        href: '#',
        label: 'Movimentação Bancária',
        icon: <Building2 />,
      }
    ]
  },
  {
    href: '#',
    label: 'Relatórios',
    icon: <Proportions />,
    children: [{
      href: '#',
      label: 'Relatórios Gerenciais',
      icon: <Building2 />,
    }]
  }
]

export function Sidebar() {
  const { setTheme } = useTheme()
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const toggleExpand = (index: number) => {
    setExpandedIndex(prev => (prev === index ? null : index))
  }

  return (
    <div className="flex w-full flex-col bg-muted/40">
      {/* PC */}
      <aside
        className="fixed inset-y-0 left-0 z-10 hidden border-r bg-background md:flex flex-col
        transition-all duration-200 w-64"
      >
        <nav className="flex flex-col gap-2 px-2 py-5">
          <TooltipProvider>
            <div className="flex items-center justify-center mb-4">
              <Link
                href="#"
                prefetch={false}
                className="flex h-9 w-9 shrink-0 items-center justify-center bg-primary text-primary-foreground rounded-full"
              >
                <Package className="h-4 w-4" />
                <span className="sr-only">Logo do Projeto</span>
              </Link>
            </div>
            {itemsSidebar.map((item, index) => {
              const open = expandedIndex === index
              return (
                <div key={index}>
                  <Tooltip disableHoverableContent={expandedIndex !== null}>
                    <TooltipTrigger asChild>
                      <button
                        type="button"
                        onClick={() => toggleExpand(index)}
                        className="flex w-full items-center gap-2 rounded-lg px-2 py-2
                          text-muted-foreground hover:text-foreground hover:bg-muted
                          transition-colors cursor-pointer"
                      >
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg">
                          {item.icon}
                        </span>
                        <span className="flex-1 text-left text-sm">
                          {item.label}
                        </span>
                        {item.children && (
                          open ? (
                            <ChevronUp className="h-4 w-4" />
                          ) : (
                            <ChevronDown className="h-4 w-4" />
                          )
                        )}
                      </button>
                    </TooltipTrigger>
                    {expandedIndex === null && (
                      <TooltipContent side="right">
                        {item.label}
                      </TooltipContent>
                    )}
                  </Tooltip>
                  {open && item.children && (
                    <div className="mt-1 ml-1 flex flex-col gap-1">
                      {item.children.map((child, cIndex) => (
                        <Link
                          key={cIndex}
                          href={child.href}
                          prefetch={false}
                          className="flex w-full items-center gap-2 rounded-lg px-2 py-2
                            text-muted-foreground hover:text-foreground hover:bg-muted
                            transition-colors cursor-pointer"
                        >
                          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg">
                            {child.icon}
                          </span>
                          <span className="flex-1 text-left text-sm">
                            {child.label}
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </TooltipProvider>
        </nav>
        {/* botão sair */}
        <nav className="mt-auto">
          <div className='space-x-4 flex flex-row justify-center items-center w-full px-2 py-5'>
            <TooltipProvider>
              <DropdownMenu>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="icon" className="cursor-pointer">
                        <Sun className="h-[1.2rem] w-[1.2rem] ..." />
                        <Moon className="absolute h-[1.2rem] w-[1.2rem] ..." />
                      </Button>
                    </DropdownMenuTrigger>
                  </TooltipTrigger>
                  <TooltipContent side="left">
                    Tema
                  </TooltipContent>
                </Tooltip>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setTheme("light")}>Claro</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("dark")}>Escuro</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("system")}>Sistema</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="#"
                    prefetch={false}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg
                    text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <LogOut className="h-5 w-5" />
                    <span className="sr-only">Sair</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">
                  Sair
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </nav>
      </aside>
      {/* PC */}

      {/* Mobile */}
      <div className="md:hidden flex flex-col sm:gap-4 sm:py-4 sm:pl-2">
        <header className="sticky top-0 z-30 flex h-14 items-center px-4
          border-b bg-background gap-4 sm:static sm:h-auto sm:border-0
          sm:bg-transparent sm:px-2"
        >
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="sm-hidden">
                <PanelBottom className="w-5 h-5" />
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
      {/* Mobile */}
    </div>
  )
}
