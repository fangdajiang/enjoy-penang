import { commonTranslations } from './common';
import { homeTranslations } from './home';
import { travelTranslations } from './travel';
import { accommodationTranslations } from './accommodation';
import { transportTranslations } from './transport';
import { educationTranslations } from './education';
import { healthcareTranslations } from './healthcare';
import { culturalTranslations } from './cultural';
import { uiTranslations } from './ui';
import { lifeTranslations } from './life';
import { faqTranslations } from './faq';
import { faqContentTranslations } from './faq-content';

// 合并所有翻译
export const translations = {
  ...commonTranslations,
  ...homeTranslations,
  ...travelTranslations,
  ...accommodationTranslations,
  ...transportTranslations,
  ...educationTranslations,
  ...healthcareTranslations,
  ...culturalTranslations,
  ...uiTranslations,
  ...lifeTranslations,
  ...faqTranslations,
  ...faqContentTranslations,
};

export default translations;
