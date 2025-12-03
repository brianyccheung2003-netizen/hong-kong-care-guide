import { AlertTriangle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function SafetyBanner() {
  const { t } = useLanguage();

  return (
    <div className="bg-safety-banner border-b border-safety-border">
      <div className="container py-3 px-4">
        <div className="flex items-start gap-3">
          <AlertTriangle className="h-5 w-5 text-status-moderate flex-shrink-0 mt-0.5" />
          <p className="text-sm text-foreground/80 leading-relaxed">
            {t.safety.banner}
          </p>
        </div>
      </div>
    </div>
  );
}
