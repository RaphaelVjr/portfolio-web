import React, { useContext, useState } from 'react'
import "./home.css";
import Social from './Social';
import Data from './Data';
import Scrolldown from './Scrolldown';
import { LanguageContext } from './../../context/LanguageContext';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();


  const { handleChangeLanguage } = useContext(LanguageContext);
  return (
    <section className="home section" id="home">
      <div className='home__background'>
        <div className="home__container container grid">
          <div className="home__content grid">
            <Social />

            <div className="home__img"></div>
            


            <Data />
          </div>

          <Scrolldown />
        </div>
      </div>
    </section>
  )
}

export default Home