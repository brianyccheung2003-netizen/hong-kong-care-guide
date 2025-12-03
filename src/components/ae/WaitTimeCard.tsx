import { Clock, MapPin, Phone, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Hospital } from '@/data/hospitals';
import { cn } from '@/lib/utils';

interface WaitTimeCardProps {
  hospital: Hospital;
  waitTime?: string;
  topWait?: string;
}

function getWaitStatus(waitTime?: string): {
  status: 'low' | 'moderate' | 'high' | 'critical';
  colorClass: string;
  borderClass: string;
} {
  if (!waitTime) return { status: 'moderate', colorClass: 'text-status-moderate', borderClass: 'border-l-status-moderate' };
  
  const hours = parseInt(waitTime);
  if (isNaN(hours) || waitTime.includes('Under')) {
    return { status: 'low', colorClass: 'text-status-low', borderClass: 'border-l-status-low' };
  }
  if (hours <= 2) return { status: 'low', colorClass: 'text-status-low', borderClass: 'border-l-status-low' };
  if (hours <= 4) return { status: 'moderate', colorClass: 'text-status-moderate', borderClass: 'border-l-status-moderate' };
  if (hours <= 6) return { status: 'high', colorClass: 'text-status-high', borderClass: 'border-l-status-high' };
  return { status: 'critical', colorClass: 'text-status-critical', borderClass: 'border-l-status-critical' };
}

export function WaitTimeCard({ hospital, waitTime, topWait }: WaitTimeCardProps) {
  const { language, t } = useLanguage();
  const { colorClass, borderClass } = getWaitStatus(waitTime);

  return (
    <Card variant="status" className={cn('overflow-hidden', borderClass)}>
      <CardContent className="p-4 sm:p-5">
        <div className="flex flex-col sm:flex-row sm:items-start gap-4">
          {/* Hospital Info */}
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-base sm:text-lg truncate">
              {hospital.name[language]}
            </h3>
            <p className="text-sm text-muted-foreground mt-1 flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 flex-shrink-0" />
              <span className="truncate">{hospital.address[language]}</span>
            </p>
          </div>

          {/* Wait Time Display */}
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="text-center">
              <div className={cn('text-2xl sm:text-3xl font-bold', colorClass)}>
                {waitTime || '--'}
              </div>
              <div className="text-xs text-muted-foreground mt-0.5">
                {t.ae.waitTime}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="iconSm"
                className="h-9 w-9"
                asChild
              >
                <a href={`tel:${hospital.phone}`} aria-label={t.callNow}>
                  <Phone className="h-4 w-4" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="iconSm"
                className="h-9 w-9"
                asChild
              >
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${hospital.lat},${hospital.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t.getDirections}
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
