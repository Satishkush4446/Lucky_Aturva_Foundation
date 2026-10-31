import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  darkVariant?: boolean;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, darkVariant = true }) => {
  return (
    <nav aria-label="Breadcrumb" className="py-2.5 px-0">
      <ol className={`flex items-center flex-wrap gap-1.5 text-[14px] sm:text-[15px] ${darkVariant ? 'text-white/80' : 'text-stone-600'}`}>
        <li className="flex items-center">
          <Link 
            to="/" 
            className={`flex items-center gap-1.5 transition-colors font-medium ${darkVariant ? 'text-white/85 hover:text-brand-gold-300' : 'text-stone-700 hover:text-brand-green-700'}`}
          >
            <Home className="w-4 h-4 text-brand-gold-400" />
            <span>होम (Home)</span>
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center">
              <ChevronRight className={`w-4 h-4 mx-1 shrink-0 ${darkVariant ? 'text-white/40' : 'text-stone-400'}`} />
              {isLast || !item.path ? (
                <span className={`font-bold max-w-[240px] sm:max-w-none truncate ${darkVariant ? 'text-brand-gold-300' : 'text-brand-green-800'}`} aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.path}
                  className={`transition-colors font-medium ${darkVariant ? 'text-white/85 hover:text-brand-gold-300' : 'text-stone-700 hover:text-brand-green-700'}`}
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
