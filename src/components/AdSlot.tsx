'use client';

interface AdSlotProps {
  slot: string;
  format?: 'horizontal' | 'vertical' | 'rectangle' | 'auto';
  className?: string;
}

export default function AdSlot({ 
  slot, 
  format = 'auto',
  className = '' 
}: AdSlotProps) {
  const getDimensions = () => {
    switch (format) {
      case 'horizontal':
        return 'min-h-[90px] md:min-h-[100px]';
      case 'vertical':
        return 'min-h-[250px] md:min-h-[300px]';
      case 'rectangle':
        return 'min-h-[250px] md:min-h-[280px]';
      default:
        return 'min-h-[90px] md:min-h-[250px]';
    }
  };

  return (
    <div 
      className={`bg-muted/30 border border-dashed rounded-lg flex items-center justify-center ${getDimensions()} ${className}`}
      data-ad-slot={slot}
      data-ad-format={format}
    >
      <div className="text-center text-muted-foreground text-sm">
        <div className="opacity-50">Anzeigenplatzhalter</div>
        <div className="text-xs opacity-30">Slot: {slot}</div>
      </div>
    </div>
  );
}

// Leaderboard ad (728x90)
export function AdLeaderboard({ className = '' }: { className?: string }) {
  return (
    <AdSlot 
      slot="leaderboard" 
      format="horizontal" 
      className={className} 
    />
  );
}

// Sidebar ad (300x250)
export function AdSidebar({ className = '' }: { className?: string }) {
  return (
    <AdSlot 
      slot="sidebar" 
      format="rectangle" 
      className={className} 
    />
  );
}

// In-content ad (responsive)
export function AdInContent({ className = '' }: { className?: string }) {
  return (
    <AdSlot 
      slot="in-content" 
      format="auto" 
      className={className} 
    />
  );
}
