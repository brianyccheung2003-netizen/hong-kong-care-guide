import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, AlertTriangle, CheckCircle2, Clock, Stethoscope } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';

type Step = 'basicInfo' | 'bodyRegion' | 'details' | 'redFlags' | 'result';
type ResultType = 'aeNow' | 'clinicToday' | 'clinicSoon';

interface FormData {
  ageGroup: string;
  gender: string;
  pregnant: string;
  bodyRegion: string;
  onset: string;
  severity: string;
  redFlags: string[];
  conditions: string[];
}

const initialFormData: FormData = {
  ageGroup: '',
  gender: '',
  pregnant: '',
  bodyRegion: '',
  onset: '',
  severity: '',
  redFlags: [],
  conditions: [],
};

export default function SymptomChecker() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [step, setStep] = useState<Step>('basicInfo');
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [result, setResult] = useState<ResultType | null>(null);

  const steps: Step[] = ['basicInfo', 'bodyRegion', 'details', 'redFlags', 'result'];
  const currentStepIndex = steps.indexOf(step);
  const progress = ((currentStepIndex + 1) / steps.length) * 100;

  const updateFormData = (key: keyof FormData, value: string | string[]) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const toggleArrayValue = (key: 'redFlags' | 'conditions', value: string) => {
    setFormData(prev => {
      const arr = prev[key];
      if (arr.includes(value)) {
        return { ...prev, [key]: arr.filter(v => v !== value) };
      }
      // If selecting 'none', clear other selections
      if (value === 'none') {
        return { ...prev, [key]: ['none'] };
      }
      // If selecting something else, remove 'none'
      return { ...prev, [key]: [...arr.filter(v => v !== 'none'), value] };
    });
  };

  const calculateResult = (): ResultType => {
    // Red flags -> A&E immediately
    if (formData.redFlags.length > 0 && !formData.redFlags.includes('none')) {
      return 'aeNow';
    }
    
    // Severe symptoms + vulnerable groups -> A&E
    if (formData.severity === 'extreme' || formData.severity === 'severe') {
      if (formData.ageGroup === 'infant' || formData.ageGroup === 'senior' || formData.pregnant === 'yes') {
        return 'aeNow';
      }
      return 'clinicToday';
    }
    
    // Moderate symptoms
    if (formData.severity === 'moderate') {
      return 'clinicToday';
    }
    
    // Mild symptoms
    return 'clinicSoon';
  };

  const handleNext = () => {
    const stepIndex = steps.indexOf(step);
    if (stepIndex < steps.length - 2) {
      setStep(steps[stepIndex + 1]);
    } else if (step === 'redFlags') {
      const res = calculateResult();
      setResult(res);
      setStep('result');
    }
  };

  const handleBack = () => {
    const stepIndex = steps.indexOf(step);
    if (stepIndex > 0) {
      setStep(steps[stepIndex - 1]);
    }
  };

  const canProceed = () => {
    switch (step) {
      case 'basicInfo':
        return formData.ageGroup && formData.gender;
      case 'bodyRegion':
        return formData.bodyRegion;
      case 'details':
        return formData.onset && formData.severity;
      case 'redFlags':
        return formData.redFlags.length > 0;
      default:
        return true;
    }
  };

  const SelectOption = ({ 
    selected, 
    onClick, 
    children 
  }: { 
    selected: boolean; 
    onClick: () => void; 
    children: React.ReactNode;
  }) => (
    <button
      onClick={onClick}
      className={cn(
        'w-full p-4 rounded-lg border text-left transition-all',
        selected
          ? 'border-primary bg-primary/5 ring-2 ring-primary/20'
          : 'border-border hover:border-primary/30 hover:bg-muted/50'
      )}
    >
      {children}
    </button>
  );

  const renderStep = () => {
    switch (step) {
      case 'basicInfo':
        return (
          <div className="space-y-6">
            {/* Age */}
            <div>
              <h3 className="font-medium mb-3">{t.symptoms.age}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {Object.entries(t.symptoms.ageGroups).map(([key, label]) => (
                  <SelectOption
                    key={key}
                    selected={formData.ageGroup === key}
                    onClick={() => updateFormData('ageGroup', key)}
                  >
                    {label}
                  </SelectOption>
                ))}
              </div>
            </div>

            {/* Gender */}
            <div>
              <h3 className="font-medium mb-3">{t.symptoms.gender}</h3>
              <div className="grid grid-cols-3 gap-3">
                {Object.entries(t.symptoms.genderOptions).map(([key, label]) => (
                  <SelectOption
                    key={key}
                    selected={formData.gender === key}
                    onClick={() => updateFormData('gender', key)}
                  >
                    {label}
                  </SelectOption>
                ))}
              </div>
            </div>

            {/* Pregnancy (show for female) */}
            {formData.gender === 'female' && (
              <div>
                <h3 className="font-medium mb-3">{t.symptoms.pregnant}</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {Object.entries(t.symptoms.pregnantOptions).map(([key, label]) => (
                    <SelectOption
                      key={key}
                      selected={formData.pregnant === key}
                      onClick={() => updateFormData('pregnant', key)}
                    >
                      {label}
                    </SelectOption>
                  ))}
                </div>
              </div>
            )}
          </div>
        );

      case 'bodyRegion':
        return (
          <div>
            <h3 className="font-medium mb-3">{t.symptoms.bodyRegion}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {Object.entries(t.symptoms.regions).map(([key, label]) => (
                <SelectOption
                  key={key}
                  selected={formData.bodyRegion === key}
                  onClick={() => updateFormData('bodyRegion', key)}
                >
                  {label}
                </SelectOption>
              ))}
            </div>
          </div>
        );

      case 'details':
        return (
          <div className="space-y-6">
            {/* Onset */}
            <div>
              <h3 className="font-medium mb-3">{t.symptoms.onset}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {Object.entries(t.symptoms.onsetOptions).map(([key, label]) => (
                  <SelectOption
                    key={key}
                    selected={formData.onset === key}
                    onClick={() => updateFormData('onset', key)}
                  >
                    {label}
                  </SelectOption>
                ))}
              </div>
            </div>

            {/* Severity */}
            <div>
              <h3 className="font-medium mb-3">{t.symptoms.severity}</h3>
              <div className="space-y-3">
                {Object.entries(t.symptoms.severityLevels).map(([key, label]) => (
                  <SelectOption
                    key={key}
                    selected={formData.severity === key}
                    onClick={() => updateFormData('severity', key)}
                  >
                    {label}
                  </SelectOption>
                ))}
              </div>
            </div>
          </div>
        );

      case 'redFlags':
        return (
          <div>
            <div className="flex items-center gap-2 mb-4 p-3 bg-destructive/10 rounded-lg">
              <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0" />
              <p className="text-sm text-destructive">{t.symptoms.redFlags}</p>
            </div>
            <div className="space-y-3">
              {Object.entries(t.symptoms.redFlagsList).map(([key, label]) => (
                <SelectOption
                  key={key}
                  selected={formData.redFlags.includes(key)}
                  onClick={() => toggleArrayValue('redFlags', key)}
                >
                  <div className="flex items-center gap-3">
                    <div className={cn(
                      'w-5 h-5 rounded border-2 flex items-center justify-center',
                      formData.redFlags.includes(key)
                        ? 'border-primary bg-primary'
                        : 'border-muted-foreground'
                    )}>
                      {formData.redFlags.includes(key) && (
                        <CheckCircle2 className="h-3 w-3 text-primary-foreground" />
                      )}
                    </div>
                    {label}
                  </div>
                </SelectOption>
              ))}
            </div>
          </div>
        );

      case 'result':
        if (!result) return null;
        
        const resultConfig = {
          aeNow: {
            icon: AlertTriangle,
            color: 'text-destructive',
            bg: 'bg-destructive/10',
            border: 'border-destructive/30',
          },
          clinicToday: {
            icon: Clock,
            color: 'text-status-high',
            bg: 'bg-status-high/10',
            border: 'border-status-high/30',
          },
          clinicSoon: {
            icon: Stethoscope,
            color: 'text-status-low',
            bg: 'bg-status-low/10',
            border: 'border-status-low/30',
          },
        };
        
        const config = resultConfig[result];
        const Icon = config.icon;
        
        return (
          <div className="space-y-6">
            <Card className={cn('border-2', config.border, config.bg)}>
              <CardContent className="p-6 text-center">
                <div className={cn('mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4', config.bg)}>
                  <Icon className={cn('h-8 w-8', config.color)} />
                </div>
                <h2 className="text-2xl font-bold mb-2">{t.results[result].title}</h2>
                <p className="text-muted-foreground">{t.results[result].description}</p>
              </CardContent>
            </Card>

            <Button 
              variant="hero" 
              className="w-full" 
              onClick={() => navigate(result === 'aeNow' ? '/ae-wait-times' : '/clinics')}
            >
              {t.results[result].action}
            </Button>

            <Card variant="safety">
              <CardContent className="p-4">
                <p className="text-sm text-center">{t.results.safetyNote}</p>
              </CardContent>
            </Card>

            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => {
                setFormData(initialFormData);
                setResult(null);
                setStep('basicInfo');
              }}
            >
              Start Over
            </Button>
          </div>
        );
    }
  };

  const stepTitles: Record<Step, string> = {
    basicInfo: t.symptoms.basicInfo,
    bodyRegion: t.symptoms.mainSymptom,
    details: t.symptoms.details,
    redFlags: t.symptoms.additionalInfo,
    result: t.symptoms.result,
  };

  return (
    <Layout showSafetyBanner>
      <div className="container py-8 sm:py-12 max-w-2xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold">{t.symptoms.title}</h1>
          <p className="text-muted-foreground mt-1">{t.symptoms.subtitle}</p>
        </div>

        {/* Progress */}
        {step !== 'result' && (
          <div className="mb-8">
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="font-medium">{stepTitles[step]}</span>
              <span className="text-muted-foreground">
                {t.symptoms.step} {currentStepIndex + 1} {t.symptoms.of} {steps.length - 1}
              </span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        )}

        {/* Step Content */}
        <Card>
          <CardContent className="p-6">
            {renderStep()}
          </CardContent>
        </Card>

        {/* Navigation */}
        {step !== 'result' && (
          <div className="flex gap-4 mt-6">
            <Button
              variant="outline"
              onClick={handleBack}
              disabled={currentStepIndex === 0}
              className="flex-1"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              {t.back}
            </Button>
            <Button
              onClick={handleNext}
              disabled={!canProceed()}
              className="flex-1"
            >
              {step === 'redFlags' ? t.submit : t.next}
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        )}
      </div>
    </Layout>
  );
}
