'use client';

import { Unit } from '@/data/categories';
import { convert, formatOutput } from '@/lib/convert';

interface ConversionTableProps {
  fromUnit: Unit;
  toUnit: Unit;
  categorySlug: string;
  className?: string;
}

export default function ConversionTable({ 
  fromUnit, 
  toUnit, 
  categorySlug,
  className = ''
}: ConversionTableProps) {
  // Generate table values
  const generateValues = () => {
    const values = [0.1, 0.5, 1, 2, 5, 10, 20, 50, 100, 500, 1000];
    const rows: Array<{ from: number; to: string }> = [];
    
    for (const fromValue of values) {
      const result = convert(fromValue, fromUnit.id, toUnit.id, categorySlug);
      if (result !== null) {
        rows.push({
          from: fromValue,
          to: formatOutput(result, 4),
        });
      }
    }
    return rows;
  };

  const tableRows = generateValues();

  return (
    <div className={`bg-card border rounded-lg overflow-hidden ${className}`}>
      <div className="p-4 border-b bg-muted/30">
        <h3 className="font-semibold">Umrechnungstabelle</h3>
        <p className="text-sm text-muted-foreground">
          {fromUnit.name} in {toUnit.name}
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b bg-muted/20">
              <th className="px-4 py-3 text-left text-sm font-medium">
                {fromUnit.symbol}
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium">
                {toUnit.symbol}
              </th>
            </tr>
          </thead>
          <tbody>
            {tableRows.map((row, index) => (
              <tr 
                key={index} 
                className="border-b last:border-b-0 hover:bg-muted/20 transition-colors"
              >
                <td className="px-4 py-3 text-sm">
                  {row.from} {fromUnit.symbol}
                </td>
                <td className="px-4 py-3 text-sm font-medium text-emerald-700 dark:text-emerald-400">
                  {row.to} {toUnit.symbol}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
