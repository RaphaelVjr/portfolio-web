import React, { useState } from 'react'
import { LanguageContext } from './../../context/LanguageContext';
import { useTranslation } from 'react-i18next';
import { useContext } from 'react';

const Info = () => {

  
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();


  const { handleChangeLanguage } = useContext(LanguageContext);
  
  return (
    <div className="about__info grid">

        <div className="about__box">
            <i className="bx bx-award about__icon"></i>
            <h2 className="about__title">{t('Experiência')}</h2>
                <span className="about__subtitle">{t('2 Anos')}</span>
        </div>

        <div className="about__box">
            <i className='bx bx-briefcase-alt about__icon'></i>
            <h2 className="about__title">{t('Completo')}</h2>
                <span className="about__subtitle">{t('20+ Projetos')}</span>
        </div>

        <div className="about__box">
        <i className='bx bxs-book-alt about__icon'></i>
            <h2 className="about__title">{t('Estudando')}</h2>
                <span className="about__subtitle">React Native</span>
        </div>
    </div>
  )
}

export default Info