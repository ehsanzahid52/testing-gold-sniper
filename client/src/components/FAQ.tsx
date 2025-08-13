import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { t } = useTranslation();

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: t('faq.questions.whatIs.q'),
      answer: t('faq.questions.whatIs.a')
    },
    {
      question: t('faq.questions.accuracy.q'),
      answer: t('faq.questions.accuracy.a')
    },
    {
      question: t('faq.questions.free.q'),
      answer: t('faq.questions.free.a')
    },
    {
      question: t('faq.questions.platforms.q'),
      answer: t('faq.questions.platforms.a')
    },
    {
      question: t('faq.questions.receive.q'),
      answer: t('faq.questions.receive.a')
    },
    {
      question: t('faq.questions.experience.q'),
      answer: t('faq.questions.experience.a')
    },
    {
      question: t('faq.questions.timeframes.q'),
      answer: t('faq.questions.timeframes.a')
    },
    {
      question: t('faq.questions.broker.q'),
      answer: t('faq.questions.broker.a')
    }
  ];

  return (
    <section className="bg-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white mb-3">{t('faq.title')}</h2>
          <p className="text-lg text-gray-400">
            {t('faq.subtitle')}
          </p>
        </div>
        
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div 
              key={index} 
              className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-750 transition-colors"
              >
                <h3 className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-[color:var(--brand-orange)]" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[color:var(--brand-orange)]" />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}