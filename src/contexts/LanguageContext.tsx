import React, { createContext, useState, useContext, ReactNode } from 'react';
import translations from '../translations';

// 定义语言类型
export type Language = 'en' | 'zh';

// 语言上下文的接口
interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

// 创建上下文
const LanguageContext = createContext<LanguageContextType>({
  language: 'zh', // 默认语言设置为中文
  setLanguage: () => {},
  t: (key: string) => '',
});

// 提供语言上下文的组件
export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('zh'); // 默认语言设置为中文
  
  // 翻译函数
  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// 使用语言上下文的Hook
export const useLanguage = (): LanguageContextType => {
  return useContext(LanguageContext);
};
