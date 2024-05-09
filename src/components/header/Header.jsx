import React, { useState } from 'react';
import "./header.css";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import 'react-toastify/dist/ReactToastify.css';
import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';

const Header = () => {
    const [loading, setLoading] = useState(false);
    const { t } = useTranslation();


    const { handleChangeLanguage } = useContext(LanguageContext);

    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header");
        if (this.scrollY >= 80) header.classList.add("scroll-header");
        else header.classList.remove("scroll-header");
    });
    const [Toggle, showMenu] = useState(false);
    const [activeNav, setActiveNav] = useState("#home");

    return (
        <header className="header" style={{ cursor: loading ? 'wait' : 'default' }}>
            <nav className="nav container">
                <a href="index.html" className="nav__logo">Raphael Vitorio</a>

                <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === "#home" ? "nav__link active__link" : "nav__link"}>
                                <i className="uil uil-estate nav__icon"></i>{t('Inicio')}
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === "#about" ? "nav__link active__link" : "nav__link"}>
                                <i className="uil uil-user nav__icon"></i>{t('About me')}
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#skills" onClick={() => setActiveNav('#skills')} className={activeNav === "#skills" ? "nav__link active__link" : "nav__link"}>
                                <i className="uil uil-file-alt nav__icon"></i>{t('Skills')}
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === "#services" ? "nav__link active__link" : "nav__link"}>
                                <i className="uil uil-briefcase-alt nav__icon"></i>{t('Services')}
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === "#portfolio" ? "nav__link active__link" : "nav__link"}>
                                <i className="uil uil-scenery nav__icon"></i> Portfolio
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === "#contact" ? "nav__link active__link" : "nav__link"}>
                                <i className="uil uil-message nav__icon"></i>{t('Contato')}
                            </a>
                        </li>

                        <li className="nav__item">
                            <button onClick={() => handleChangeLanguage('en')}>
                                <span className='fi fi-um'></span>
                            </button>

                        </li>

                        <li className="nav__flag">
                            <button onClick={() => handleChangeLanguage('pt')}>
                                <span className='fi fi-br'></span>
                            </button>
                        </li>
                    </ul>


                    <i className="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
                </div>

                <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                    <i className="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    )
}

export default Header