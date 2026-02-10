"use client"

import Link from "next/link"

import { useState } from "react"
import type { SidebarProps } from "../../interfaces/sidebar-types"
import { ChevronUp, ChevronDown } from "lucide-react"
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip"

export function DesktopSidebar({ items }: SidebarProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const toggleExpand = (index: number) => setExpandedIndex(prev => (prev === index ? null : index))

  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden border-r bg-background lg:flex lg:w-64 lg:flex-col transition-all duration-200">
      <nav className="flex flex-col gap-2 px-2 py-5">
        <TooltipProvider>
          <div className="flex items-center justify-center mb-4">
            <img
              src="/images/radioflow-logo.svg"
              alt="InfoRadio"
              className="w-44 h-auto object-contain"
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
    </aside>
  )
}
