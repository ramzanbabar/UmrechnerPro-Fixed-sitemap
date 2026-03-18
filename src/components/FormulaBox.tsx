import { Unit } from '@/data/categories';
import { getFormula } from '@/lib/convert';

interface FormulaBoxProps {
  fromUnit: Unit;
  toUnit: Unit;
  categorySlug: string;
  className?: string;
}

export default function FormulaBox({ 
  fromUnit, 
  toUnit, 
  categorySlug,
  className = '' 
}: FormulaBoxProps) {
  const formula = getFormula(fromUnit, toUnit, categorySlug);
  
  return (
    <div className={`bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 border border-emerald-200 dark:border-emerald-800 rounded-lg p-6 ${className}`}>
      <h3 className="font-semibold mb-3 flex items-center gap-2">
        <span className="text-emerald-600">📐</span>
        Umrechnungsformel
      </h3>
      <div className="bg-white dark:bg-card border rounded-lg p-4">
        <code className="text-lg font-mono text-emerald-700 dark:text-emerald-400">
          {formula}
        </code>
      </div>
      <p className="mt-3 text-sm text-muted-foreground">
        Diese Formel wird verwendet, um {fromUnit.name.toLowerCase()} in {toUnit.name.toLowerCase()} umzurechnen.
      </p>
    </div>
  );
}
