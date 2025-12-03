import { useState, useEffect } from 'react';
import { RefreshCw } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { WaitTimeCard } from '@/components/ae/WaitTimeCard';
import { useLanguage } from '@/contexts/LanguageContext';
import { hospitals, getSimulatedWaitTimes } from '@/data/hospitals';

export default function AEWaitTimes() {
  const { t } = useLanguage();
  const [waitTimes, setWaitTimes] = useState<Record<string, { waitTime: string; topWait: string; timestamp: Date }>>({});
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const loadWaitTimes = async () => {
    setIsRefreshing(true);
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 800));
    const times = getSimulatedWaitTimes();
    setWaitTimes(times);
    setLastUpdated(new Date());
    setIsRefreshing(false);
  };

  useEffect(() => {
    loadWaitTimes();
    // Refresh every 15 minutes
    const interval = setInterval(loadWaitTimes, 15 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const publicHospitals = hospitals.filter(h => h.type === 'public' && h.hasAE);

  return (
    <Layout showSafetyBanner>
      <div className="container py-8 sm:py-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold">{t.ae.title}</h1>
            <p className="text-muted-foreground mt-1">{t.ae.subtitle}</p>
          </div>
          
          <div className="flex items-center gap-4">
            {lastUpdated && (
              <p className="text-sm text-muted-foreground">
                {t.lastUpdated}: {lastUpdated.toLocaleTimeString()}
              </p>
            )}
            <Button
              variant="outline"
              size="sm"
              onClick={loadWaitTimes}
              disabled={isRefreshing}
            >
              <RefreshCw className={`h-4 w-4 mr-2 ${isRefreshing ? 'animate-spin' : ''}`} />
              {isRefreshing ? t.ae.refreshing : 'Refresh'}
            </Button>
          </div>
        </div>

        {/* Status Legend */}
        <div className="flex flex-wrap items-center gap-4 mb-6 p-4 bg-muted/50 rounded-lg">
          <span className="text-sm font-medium">Status:</span>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-status-low" />
            <span className="text-sm text-muted-foreground">{t.ae.statusLow}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-status-moderate" />
            <span className="text-sm text-muted-foreground">{t.ae.statusModerate}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-status-high" />
            <span className="text-sm text-muted-foreground">{t.ae.statusHigh}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-status-critical" />
            <span className="text-sm text-muted-foreground">{t.ae.statusCritical}</span>
          </div>
        </div>

        {/* Hospital List */}
        <div className="space-y-3">
          {publicHospitals.map(hospital => (
            <WaitTimeCard
              key={hospital.id}
              hospital={hospital}
              waitTime={waitTimes[hospital.id]?.waitTime}
              topWait={waitTimes[hospital.id]?.topWait}
            />
          ))}
        </div>

        {/* Data Source */}
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            {t.ae.source} •{' '}
            <a
              href="https://www.ha.org.hk/visitor/ha_visitor_index.asp?Content_ID=235504&Lang=ENG"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              ha.org.hk
            </a>
          </p>
        </div>
      </div>
    </Layout>
  );
}
