import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface FAQItemProps {
  questionKey: string;
  answerKey: string | React.ReactNode;
  category: string;
}

const FAQ: React.FC = () => {
  const { t, language } = useLanguage();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  const faqItems: FAQItemProps[] = [
    {
      questionKey: "faq1Question",
      answerKey: (
        <div>
          <p>{t('faq1AnswerIntro')}</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>{t('faq1AnswerItem1')}</li>
            <li>{t('faq1AnswerItem2')}</li>
            <li>{t('faq1AnswerItem3')}</li>
            <li>{t('faq1AnswerItem4')}</li>
          </ul>
          <p className="mt-2">{t('faq1AnswerOutro')}</p>
        </div>
      ),
      category: "Immigration"
    },
    {
      questionKey: "faq2Question",
      answerKey: "faq2Answer",
      category: "Immigration"
    },
    {
      questionKey: "faq3Question",
      answerKey: "faq3Answer",
      category: "StudentServices"
    },
    {
      questionKey: "faq4Question",
      answerKey: (
        <div>
          <p>{t('faq4AnswerIntro')}</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>{t('faq4AnswerItem1')}</li>
            <li>{t('faq4AnswerItem2')}</li>
            <li>{t('faq4AnswerItem3')}</li>
            <li>{t('faq4AnswerItem4')}</li>
            <li>{t('faq4AnswerItem5')}</li>
          </ul>
          <p className="mt-2">{t('faq4AnswerOutro')}</p>
        </div>
      ),
      category: "Accommodation"
    },
    {
      questionKey: "faq5Question",
      answerKey: "faq5Answer",
      category: "Transport"
    },
    {
      questionKey: "faq6Question",
      answerKey: (
        <div>
          <p>{t('faq6AnswerIntro')}</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>{t('faq6AnswerItem1')}</li>
            <li>{t('faq6AnswerItem2')}</li>
            <li>{t('faq6AnswerItem3')}</li>
            <li>{t('faq6AnswerItem4')}</li>
            <li>{t('faq6AnswerItem5')}</li>
            <li>{t('faq6AnswerItem6')}</li>
          </ul>
        </div>
      ),
      category: "Transport"
    },
    {
      questionKey: "faq7Question",
      answerKey: "faq7Answer",
      category: "LifeServices"
    },
    {
      questionKey: "faq8Question",
      answerKey: (
        <div>
          <p>{t('faq8AnswerIntro')}</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>{t('faq8AnswerItem1')}</li>
            <li>{t('faq8AnswerItem2')}</li>
            <li>{t('faq8AnswerItem3')}</li>
            <li>{t('faq8AnswerItem4')}</li>
            <li>{t('faq8AnswerItem5')}</li>
            <li>{t('faq8AnswerItem6')}</li>
            <li>{t('faq8AnswerItem7')}</li>
            <li>{t('faq8AnswerItem8')}</li>
            <li>{t('faq8AnswerItem9')}</li>
            <li>{t('faq8AnswerItem10')}</li>
          </ul>
        </div>
      ),
      category: "TravelGuide"
    },
    {
      questionKey: "faq9Question",
      answerKey: "faq9Answer",
      category: "TravelGuide"
    },
    {
      questionKey: "faq10Question",
      answerKey: "faq10Answer",
      category: "LifeServices"
    },
    {
      questionKey: "faq11Question",
      answerKey: "faq11Answer",
      category: "LifeServices"
    }
  ];
  
  const categories = Array.from(new Set(faqItems.map(item => item.category)));
  
  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  
  const filteredFAQs = faqItems.filter(item => {
    const matchesSearch = t(item.questionKey).toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory ? item.category === activeCategory : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">{t('frequentlyAskedQuestions')}</h1>
          <p className="text-xl max-w-3xl">
            {t('faqDesc')}
          </p>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder={t('searchForQuestions')}
              className="w-full px-4 py-3 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
          </div>
        </div>
        
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                activeCategory === null
                  ? "bg-purple-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
              onClick={() => setActiveCategory(null)}
            >
              {t('allCategories')}
            </button>
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  activeCategory === category
                    ? "bg-purple-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {t(category)}
              </button>
            ))}
          </div>
        </div>
        
        {filteredFAQs.length > 0 ? (
          <div className="space-y-4">
            {filteredFAQs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-medium text-lg">{t(faq.questionKey)}</span>
                  {activeIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-purple-600" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                {activeIndex === index && (
                  <div className="px-6 py-4 bg-gray-50">
                    <div className="text-gray-700">
                      {typeof faq.answerKey === 'string' ? t(faq.answerKey) : faq.answerKey}
                    </div>
                    <div className="mt-3 pt-3 border-t border-gray-200">
                      <span className="inline-block bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">
                        {t(faq.category)}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-500 text-lg">{t('noQuestionsFound')}</p>
            <button
              className="mt-4 text-purple-600 hover:text-purple-800 font-medium"
              onClick={() => {
                setSearchTerm("");
                setActiveCategory(null);
              }}
            >
              {t('clearFilters')}
            </button>
          </div>
        )}
        
        <div className="mt-12 bg-purple-50 rounded-lg p-6">
          <h2 className="text-xl font-bold text-purple-900 mb-4">{t('didntFindWhatYoureLookingFor')}</h2>
          <p className="text-purple-700 mb-6">
            {t('contactUsMessage')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a
              href="#"
              className="bg-purple-600 hover:bg-purple-700 text-white text-center font-medium px-4 py-3 rounded-lg transition-colors"
            >
              {t('contactUs')}
            </a>
            <a
              href="#"
              className="bg-white border border-purple-600 text-purple-600 hover:bg-purple-50 text-center font-medium px-4 py-3 rounded-lg transition-colors"
            >
              {t('liveChatSupport')}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;