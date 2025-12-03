import { ReactNode } from 'react';
import { Header } from './Header';
import { SafetyBanner } from './SafetyBanner';

interface LayoutProps {
  children: ReactNode;
  showSafetyBanner?: boolean;
}

export function Layout({ children, showSafetyBanner = false }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      {showSafetyBanner && <SafetyBanner />}
      <main className="flex-1">
        {children}
      </main>
      <footer className="border-t border-border bg-surface-cool py-6">
        <div className="container text-center text-sm text-muted-foreground">
          <p>© 2024 CareNav HK. For informational purposes only.</p>
        </div>
      </footer>
    </div>
  );
}
