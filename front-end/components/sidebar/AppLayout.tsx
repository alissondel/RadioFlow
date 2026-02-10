'use client';

import { usePathname } from 'next/navigation';
import { Sidebar } from '@/components/sidebar';
import { ThemeProvider } from '@/components/theme/theme-provider';

interface AppLayoutProps {
  children: React.ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  const pathname = usePathname();
  const hideSidebar = pathname === '/login' || pathname === '/register';

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {hideSidebar ? (
        <>{children}</>
      ) : (
        <>
          <Sidebar />
          {children}
        </>
      )}
    </ThemeProvider>
  );
}
