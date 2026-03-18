'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  faqs: FAQItem[];
  className?: string;
}

export default function FAQ({ faqs, className = '' }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className={`space-y-3 ${className}`}>
      {faqs.map((faq, index) => (
        <div 
          key={index}
          className="border rounded-lg overflow-hidden bg-card"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full px-4 py-4 flex items-center justify-between text-left hover:bg-muted/50 transition-colors"
          >
            <span className="font-medium pr-4">{faq.question}</span>
            <ChevronDown 
              className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform ${
                openIndex === index ? 'rotate-180' : ''
              }`} 
            />
          </button>
          {openIndex === index && (
            <div className="px-4 pb-4 text-muted-foreground border-t">
              <p className="pt-4">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
