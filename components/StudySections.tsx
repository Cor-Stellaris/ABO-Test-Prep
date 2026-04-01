'use client';

import { useState } from 'react';
import type { StudyMaterial } from '@/lib/types';

export default function StudySections({ sections }: { sections: StudyMaterial[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {sections.map((section, index) => (
        <div key={section.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full px-5 py-4 text-left font-semibold flex justify-between items-center hover:bg-gray-50 transition"
          >
            <span>{section.section_title}</span>
            <span className="text-[var(--color-text-light)] text-lg">
              {openIndex === index ? '−' : '+'}
            </span>
          </button>
          {openIndex === index && (
            <div className="px-5 pb-5 text-sm leading-relaxed text-[var(--color-text)] whitespace-pre-wrap">
              {section.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
