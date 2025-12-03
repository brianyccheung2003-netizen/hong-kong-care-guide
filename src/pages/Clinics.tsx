import { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ClinicCard } from '@/components/clinics/ClinicCard';
import { useLanguage } from '@/contexts/LanguageContext';
import { clinics } from '@/data/clinics';

type FilterType = 'all' | 'public' | 'private' | 'gp' | 'specialist';

export default function Clinics() {
  const { language, t } = useLanguage();
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<FilterType>('all');

  const filteredClinics = useMemo(() => {
    return clinics.filter(clinic => {
      // Search filter
      const searchLower = search.toLowerCase();
      const matchesSearch = 
        clinic.name[language].toLowerCase().includes(searchLower) ||
        clinic.name.en.toLowerCase().includes(searchLower) ||
        clinic.address[language].toLowerCase().includes(searchLower) ||
        clinic.district.toLowerCase().includes(searchLower);
      
      if (!matchesSearch) return false;

      // Type/specialty filter
      if (filter === 'all') return true;
      if (filter === 'public' || filter === 'private') return clinic.type === filter;
      if (filter === 'gp' || filter === 'specialist') return clinic.specialty === filter;
      
      return true;
    });
  }, [search, filter, language]);

  const filters: { key: FilterType; label: string }[] = [
    { key: 'all', label: t.clinics.filters.all },
    { key: 'public', label: t.clinics.filters.public },
    { key: 'private', label: t.clinics.filters.private },
    { key: 'gp', label: t.clinics.filters.gp },
    { key: 'specialist', label: t.clinics.filters.specialist },
  ];

  return (
    <Layout>
      <div className="container py-8 sm:py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold">{t.clinics.title}</h1>
          <p className="text-muted-foreground mt-1">{t.clinics.subtitle}</p>
        </div>

        {/* Search and Filters */}
        <div className="space-y-4 mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder={t.clinics.searchPlaceholder}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {filters.map(({ key, label }) => (
              <Button
                key={key}
                variant={filter === key ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilter(key)}
              >
                {label}
              </Button>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredClinics.map(clinic => (
            <ClinicCard key={clinic.id} clinic={clinic} />
          ))}
        </div>

        {filteredClinics.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No clinics found matching your search.</p>
          </div>
        )}

        {/* Note */}
        <div className="mt-8 p-4 bg-muted/50 rounded-lg">
          <p className="text-sm text-muted-foreground text-center">
            {t.clinics.callToConfirm}
          </p>
        </div>
      </div>
    </Layout>
  );
}
