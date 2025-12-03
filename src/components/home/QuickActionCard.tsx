import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface QuickActionCardProps {
  to: string;
  icon: ReactNode;
  title: string;
  description: string;
  variant?: 'default' | 'emergency';
  external?: boolean;
  onClick?: () => void;
}

export function QuickActionCard({
  to,
  icon,
  title,
  description,
  variant = 'default',
  external,
  onClick,
}: QuickActionCardProps) {
  const content = (
    <Card
      variant="interactive"
      className={cn(
        'h-full',
        variant === 'emergency' && 'border-destructive/30 bg-destructive/5 hover:bg-destructive/10 hover:border-destructive/50'
      )}
    >
      <CardContent className="p-6 flex flex-col items-start gap-4">
        <div
          className={cn(
            'flex h-12 w-12 items-center justify-center rounded-xl',
            variant === 'emergency'
              ? 'bg-destructive/10 text-destructive'
              : 'bg-primary/10 text-primary'
          )}
        >
          {icon}
        </div>
        <div className="space-y-1">
          <h3 className="font-semibold text-lg">{title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </CardContent>
    </Card>
  );

  if (onClick) {
    return (
      <button onClick={onClick} className="text-left w-full">
        {content}
      </button>
    );
  }

  if (external) {
    return (
      <a href={to} target="_blank" rel="noopener noreferrer" className="block">
        {content}
      </a>
    );
  }

  return (
    <Link to={to} className="block">
      {content}
    </Link>
  );
}
