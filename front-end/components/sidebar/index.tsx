import { DesktopSidebar } from './DesktopSidebar'
import { MobileSidebar } from './MobileSidebar'
import { ItemsSidebar } from './ItemsSidebar'

export function Sidebar() {
  return (
    <div className="flex w-full flex-col bg-muted/40">
      <DesktopSidebar items={ItemsSidebar} />
      <MobileSidebar items={ItemsSidebar} />
    </div>
  )
}
