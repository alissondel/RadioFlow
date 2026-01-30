"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import type { SidebarProps } from "../../interfaces/sidebar-types"

import {
  Menu,
  ChevronUp,
  ChevronDown,
} from "lucide-react"

import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/components/ui/avatar"

import {
  Sheet,
  SheetTitle,
  SheetTrigger,
  SheetContent,
} from "@/components/ui/sheet"

export function MobileSidebar({ items }: SidebarProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const toggleExpand = (index: number) => setExpandedIndex(prev => (prev === index ? null : index))
  return (
    <div className="md:hidden flex flex-col sm:gap-4 sm:py-4 sm:pl-2">
      <header className="sticky top-0 z-30 flex h-14 items-center px-4
        border-b bg-background gap-4 sm:static sm:h-auto sm:border-0
        sm:bg-transparent sm:px-2"
      >
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline" className="sm-hidden cursor-pointer">
              <Menu className="w-5 h-5" />
              <SheetTitle className="sr-only">Abrir / Fechar Menu</SheetTitle>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="sm:max-w-x">
            <nav className="grid gap-6 text-lg font-medium px-6 py-4">
              <header className="flex items-center justify-center h-20">
                <img
                  src="/images/inforadio-logo.svg"
                  alt="InfoRadio"
                  className="h-12 w-auto object-contain"
                />
              </header>
              {items.map((item, index) => {
                const open = expandedIndex === index

                return (
                  <div key={index} className="flex flex-col">
                    <button
                      type="button"
                      onClick={() => toggleExpand(index)}
                      className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
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
                    {open && item.children && (
                      <div className="mt-1 ml-8 flex flex-col gap-1">
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
            </nav>
          </SheetContent>
        </Sheet>
        {/* <h2>Menu</h2> */}
      </header>
    </div>
  )
}
