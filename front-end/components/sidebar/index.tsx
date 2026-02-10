// Sidebar.tsx
"use client"

import { useState } from "react"
import { DesktopSidebar } from "./DesktopSidebar"
import { MobileSidebar } from "./MobileSidebar"
import { ItemsSidebar } from "./ItemsSidebar"
import { Navbar } from "../navbar"

export function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="flex w-full flex-col bg-muted/40">
      <DesktopSidebar items={ItemsSidebar} />
      <Navbar onOpenMobileSidebar={() => setMobileOpen(true)} />
      <MobileSidebar
        items={ItemsSidebar}
        open={mobileOpen}
        onOpenChange={setMobileOpen}
      />
    </div>
  )
}
