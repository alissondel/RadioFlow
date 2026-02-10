"use client"

import Link from "next/link"

import { useState } from "react"
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet"
import { ChevronUp, ChevronDown } from "lucide-react"
import type { SidebarProps } from "../../interfaces/sidebar-types"

type MobileSidebarProps = SidebarProps & {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function MobileSidebar({ items, open, onOpenChange }: MobileSidebarProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const toggleExpand = (index: number) => setExpandedIndex(prev => (prev === index ? null : index))
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="left" className="sm:max-w-x">
        <SheetTitle className="sr-only">
          Menu lateral
        </SheetTitle>
        <nav className="grid gap-6 text-lg font-medium px-6 py-4">
          <header className="flex items-center justify-center h-20">
            <img
              src="/images/radioflow-logo.svg"
              alt="InfoRadio"
              className="w-80 h-auto object-contain"
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
  )
}
