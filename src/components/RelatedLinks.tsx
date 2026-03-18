import Link from 'next/link';
import { TopPair, getPairSlug } from '@/data/topPairs';
import { getCategoryBySlug } from '@/data/categories';

interface RelatedLinksProps {
  title: string;
  links: Array<{
    href: string;
    label: string;
    description?: string;
  }>;
  className?: string;
}

export default function RelatedLinks({ title, links, className = '' }: RelatedLinksProps) {
  return (
    <div className={`bg-card border rounded-lg p-6 ${className}`}>
      <h3 className="font-semibold mb-4">{title}</h3>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <Link 
              href={link.href}
              className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 transition-colors group"
            >
              <span className="group-hover:underline">{link.label}</span>
              {link.description && (
                <span className="text-xs text-muted-foreground">
                  — {link.description}
                </span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Component for related conversions
interface RelatedConversionsProps {
  pairs: TopPair[];
  title?: string;
  className?: string;
}

export function RelatedConversions({ 
  pairs, 
  title = 'Ähnliche Umrechnungen',
  className = '' 
}: RelatedConversionsProps) {
  return (
    <div className={`bg-card border rounded-lg p-6 ${className}`}>
      <h3 className="font-semibold mb-4">{title}</h3>
      <ul className="space-y-2">
        {pairs.map((pair, index) => {
          const category = getCategoryBySlug(pair.categorySlug);
          if (!category) return null;
          
          const fromUnit = category.units.find(u => u.id === pair.fromUnit);
          const toUnit = category.units.find(u => u.id === pair.toUnit);
          if (!fromUnit || !toUnit) return null;
          
          const href = `/${pair.categorySlug}/${getPairSlug(pair.fromUnit, pair.toUnit)}`;
          const label = `${fromUnit.name} in ${toUnit.name}`;
          
          return (
            <li key={index}>
              <Link 
                href={href}
                className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 transition-colors group"
              >
                <span className="group-hover:underline">{label}</span>
                <span className="text-xs text-muted-foreground">
                  ({fromUnit.symbol} → {toUnit.symbol})
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

// Component for category links
interface CategoryLinksProps {
  categories: Array<{ slug: string; name: string }>;
  title?: string;
  className?: string;
}

export function CategoryLinks({ 
  categories,
  title = 'Kategorien',
  className = '' 
}: CategoryLinksProps) {
  return (
    <div className={`bg-card border rounded-lg p-6 ${className}`}>
      <h3 className="font-semibold mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <Link 
            key={cat.slug}
            href={`/${cat.slug}`}
            className="px-3 py-1.5 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 rounded-full text-sm hover:bg-emerald-100 dark:hover:bg-emerald-900/30 transition-colors"
          >
            {cat.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
