import type { ReactNode } from "react"

export interface SidebarChildItem {
  href: string
  label: string
  icon: ReactNode
}

export interface SidebarItem {
  href: string
  label: string
  icon: ReactNode
  children?: SidebarChildItem[]
}

export interface SidebarProps {
  items: SidebarItem[]
}