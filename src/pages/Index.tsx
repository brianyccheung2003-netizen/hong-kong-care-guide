import { Link } from 'react-router-dom';
import { Phone, Stethoscope, Clock, MapPin, ArrowRight, Shield } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { QuickActionCard } from '@/components/home/QuickActionCard';
import { useLanguage } from '@/contexts/LanguageContext';

const Index = () => {
  const { t } = useLanguage();

  return (
    <Layout showSafetyBanner>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-surface-cool py-12 sm:py-20">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        </div>

        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium animate-fade-in">
              <Shield className="h-4 w-4" />
              <span>Trusted healthcare guidance</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight animate-slide-up">
              {t.home.hero.title}
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.1s' }}>
              {t.home.hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <Button variant="hero" size="xl" asChild>
                <Link to="/symptoms">
                  <Stethoscope className="h-5 w-5 mr-2" />
                  {t.home.quickActions.symptomCheck}
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/ae-wait-times">
                  <Clock className="h-5 w-5 mr-2" />
                  {t.home.quickActions.aeWait}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-12 sm:py-16">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <QuickActionCard
              to="tel:999"
              icon={<Phone className="h-6 w-6" />}
              title={t.home.quickActions.emergency}
              description={t.home.quickActions.emergencyDesc}
              variant="emergency"
              external
            />
            <QuickActionCard
              to="/symptoms"
              icon={<Stethoscope className="h-6 w-6" />}
              title={t.home.quickActions.symptomCheck}
              description={t.home.quickActions.symptomCheckDesc}
            />
            <QuickActionCard
              to="/ae-wait-times"
              icon={<Clock className="h-6 w-6" />}
              title={t.home.quickActions.aeWait}
              description={t.home.quickActions.aeWaitDesc}
            />
            <QuickActionCard
              to="/clinics"
              icon={<MapPin className="h-6 w-6" />}
              title={t.home.quickActions.findClinic}
              description={t.home.quickActions.findClinicDesc}
            />
          </div>
        </div>
      </section>

      {/* Live A&E Preview */}
      <section className="py-12 sm:py-16 bg-surface-cool">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold">{t.ae.title}</h2>
              <p className="text-muted-foreground mt-1">{t.ae.subtitle}</p>
            </div>
            <Button variant="ghost" asChild className="hidden sm:flex">
              <Link to="/ae-wait-times">
                View all
                <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </Button>
          </div>

          {/* Status Legend */}
          <div className="flex flex-wrap items-center gap-4 mb-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-status-low" />
              <span className="text-muted-foreground">{t.ae.statusLow}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-status-moderate" />
              <span className="text-muted-foreground">{t.ae.statusModerate}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-status-high" />
              <span className="text-muted-foreground">{t.ae.statusHigh}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-status-critical" />
              <span className="text-muted-foreground">{t.ae.statusCritical}</span>
            </div>
          </div>

          {/* Preview Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {[
              { name: { en: 'Queen Elizabeth Hospital', 'zh-TW': '伊利沙伯醫院', 'zh-CN': '伊利沙伯医院' }, wait: '3', status: 'moderate' },
              { name: { en: 'Prince of Wales Hospital', 'zh-TW': '威爾斯親王醫院', 'zh-CN': '威尔斯亲王医院' }, wait: '5', status: 'high' },
              { name: { en: 'Queen Mary Hospital', 'zh-TW': '瑪麗醫院', 'zh-CN': '玛丽医院' }, wait: '2', status: 'low' },
              { name: { en: 'Tuen Mun Hospital', 'zh-TW': '屯門醫院', 'zh-CN': '屯门医院' }, wait: '7', status: 'critical' },
            ].map((hospital, i) => (
              <Card key={i} variant="default" className="overflow-hidden">
                <CardContent className="p-4">
                  <p className="text-sm font-medium truncate mb-2">{hospital.name.en}</p>
                  <div className="flex items-center gap-2">
                    <div className={`w-2.5 h-2.5 rounded-full ${
                      hospital.status === 'low' ? 'bg-status-low' :
                      hospital.status === 'moderate' ? 'bg-status-moderate' :
                      hospital.status === 'high' ? 'bg-status-high' :
                      'bg-status-critical'
                    }`} />
                    <span className="text-xl font-bold">{hospital.wait}</span>
                    <span className="text-sm text-muted-foreground">{t.ae.hours}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-6 sm:hidden">
            <Button variant="outline" className="w-full" asChild>
              <Link to="/ae-wait-times">
                View all A&E wait times
                <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 border-t border-border">
        <div className="container">
          <p className="text-sm text-muted-foreground text-center max-w-3xl mx-auto">
            {t.disclaimer}
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
