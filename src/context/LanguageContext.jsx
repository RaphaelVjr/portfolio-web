import React, { createContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const { i18n } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  const handleChangeLanguage = async (language) => {
    if (language === currentLanguage) {
      return;
    }
    
    setLoading(true)
    await i18n.changeLanguage(language);
    setCurrentLanguage(language);
    setLoading(false)
    if (language === 'en') {
        toast.success('Language changed to English');
      } else if (language === 'pt') {
        toast.success('Idioma trocado para Português');
      }
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, handleChangeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
