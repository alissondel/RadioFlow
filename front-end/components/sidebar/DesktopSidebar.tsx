"use client"

import Link from "next/link"

import { useState } from "react"
import { useTheme } from "next-themes"
import type { SidebarProps } from "../../interfaces/sidebar-types"
import { Button } from "@/components/ui/button"

import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip"

import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
  Sun,
  Moon,
  Package,
  LogOut,
  ChevronDown,
  ChevronUp,
} from "lucide-react"

export function DesktopSidebar({ items }: SidebarProps) {
  const { setTheme } = useTheme()
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const toggleExpand = (index: number) => setExpandedIndex(prev => (prev === index ? null : index))

  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden border-r bg-background md:flex flex-col transition-all duration-200 w-64">
      <nav className="flex flex-col gap-2 px-2 py-5">
        <TooltipProvider>
          <div className="flex items-center justify-center mb-4">
            <img
              src="/images/inforadio-logo.svg"
              alt="InfoRadio"
              className="h-10 w-auto object-contain"
            />
          </div>
          {items.map((item, index) => {
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
                        open ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />
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

      <nav className="mt-auto">
        <div className="space-x-4 flex flex-row justify-center items-center w-full px-2 py-5">
          <TooltipProvider>
            <DropdownMenu>
              <Tooltip>
                <TooltipTrigger asChild>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="icon" className="cursor-pointer">
                      <Sun className="h-[1.2rem] w-[1.2rem]" />
                      <Moon className="absolute h-[1.2rem] w-[1.2rem]" />
                    </Button>
                  </DropdownMenuTrigger>
                </TooltipTrigger>
                <TooltipContent side="left">Tema</TooltipContent>
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
              <TooltipContent side="right">Sair</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </nav>
    </aside>
  )
}
