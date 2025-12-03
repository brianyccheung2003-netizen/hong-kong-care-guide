import { MapPin, Phone, Clock, Globe, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { Clinic } from '@/data/clinics';

interface ClinicCardProps {
  clinic: Clinic;
}

export function ClinicCard({ clinic }: ClinicCardProps) {
  const { language, t } = useLanguage();

  return (
    <Card variant="elevated" className="overflow-hidden">
      <CardContent className="p-5">
        <div className="flex flex-col gap-4">
          {/* Header */}
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <Badge variant={clinic.type === 'public' ? 'secondary' : 'outline'} className="text-xs">
                  {t.clinics.filters[clinic.type]}
                </Badge>
                <Badge variant="outline" className="text-xs">
                  {t.clinics.filters[clinic.specialty]}
                </Badge>
              </div>
              <h3 className="font-semibold text-base leading-tight">
                {clinic.name[language]}
              </h3>
            </div>
          </div>

          {/* Details */}
          <div className="space-y-2 text-sm">
            <p className="text-muted-foreground flex items-start gap-2">
              <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
              <span>{clinic.address[language]}</span>
            </p>
            
            {clinic.hours && (
              <p className="text-muted-foreground flex items-start gap-2">
                <Clock className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <span>{clinic.hours.weekday}</span>
              </p>
            )}
            
            {clinic.languages && clinic.languages.length > 0 && (
              <p className="text-muted-foreground flex items-start gap-2">
                <Globe className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <span>{clinic.languages.join(', ')}</span>
              </p>
            )}
          </div>

          {/* Actions */}
          <div className="flex gap-2 pt-2">
            <Button variant="default" size="sm" className="flex-1" asChild>
              <a href={`tel:${clinic.phone}`}>
                <Phone className="h-4 w-4 mr-1.5" />
                {t.callNow}
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${clinic.lat},${clinic.lng}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
