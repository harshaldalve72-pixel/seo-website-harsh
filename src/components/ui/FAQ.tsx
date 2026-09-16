'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Schema } from '@/components/seo/Schema';

export interface FAQItem {
  question: string;
  answer: string | React.ReactNode;
}

interface FAQProps {
  items: FAQItem[];
  title?: string;
  includeSchema?: boolean;
}

export function FAQ({ items, title = "Frequently Asked Questions", includeSchema = true }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Generate FAQ Schema
  const schemaData = includeSchema ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        // Note: For real schema, you'd want to extract raw text if answer is a ReactNode
        text: typeof item.answer === 'string' ? item.answer : 'Refer to the page for detailed answer.',
      }
    }))
  } : null;

  return (
    <section className="py-12" aria-labelledby="faq-heading">
      {schemaData && <Schema data={schemaData} />}
      <div className="max-w-3xl mx-auto">
        <h2 id="faq-heading" className="text-3xl font-bold mb-8 text-center">{title}</h2>
        
        <div className="space-y-4">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div 
                key={index}
                className={`border border-[var(--border)] rounded-lg overflow-hidden transition-colors ${isOpen ? 'bg-[var(--card)] border-[var(--primary)]/30' : 'bg-transparent'}`}
              >
                <button
                  type="button"
                  className="flex items-center justify-between w-full p-4 text-left font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2"
                  onClick={() => toggleItem(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="text-lg">{item.question}</span>
                  <ChevronDown 
                    className={`h-5 w-5 text-[var(--muted-foreground)] transition-transform duration-200 ${isOpen ? 'rotate-180 text-[var(--primary)]' : ''}`}
                    aria-hidden="true"
                  />
                </button>
                
                <div 
                  id={`faq-answer-${index}`}
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                  aria-hidden={!isOpen}
                >
                  <div className="p-4 pt-0 text-[var(--muted-foreground)] prose prose-invert max-w-none">
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
