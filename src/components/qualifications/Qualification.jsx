import React, { useState } from 'react'
import "./qualification.css"

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

  return (
    <section className="qualification section">
        <h2 className="section__title">Qualificações</h2>
      <span className="section__subtitle">Minha Jornada</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
            <div className={
                toggleState === 1 
                ? "qualification__button qualification__active button--flex" 
                : "qualification__button button--flex"}
                onClick={() => toggleTab(1)}
                >
                <i className="uil uil-graduation-cap qualification__icon"></i>
                Educação
            </div>

            <div 
            className={
                toggleState === 2 
                ? "qualification__button qualification__active button--flex" 
                : "qualification__button button--flex"}
                onClick={() => toggleTab(2)}
                >
                <i className="uil uil-briefcase-alt qualification__icon"></i>
                Experiência
            </div>
        </div>

        <div className="qualification__sections">
            <div className={
                toggleState === 1 
                ? "qualification__content qualification__content-active" 
                : "qualification__content"}>
                <div className="qualification__data">
                    <div>
                        <h3 className="qualification__title">Engenharia de Software</h3>
                        <span className="qualification__subtitle"> UNICESUMAR
                        </span>
                        <div className="qualification__calender">
                            <i className="uil uil-calendar-alt"></i> 02/2022 - Atual
                        </div>
                    </div>

                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>
                </div>

                <div className="qualification__data">
                    <div></div>
                    
                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>

                    <div>
                        <h3 className="qualification__title">Curso Fullstack Dev</h3>
                        <span className="qualification__subtitle"> 
                        ProgramadorBR
                        </span>
                        <div className="qualification__calender">
                            <i className="uil uil-calendar-alt"></i>50 Horas - Completo / 2022
                        </div>
                    </div>
                </div>
            </div>

            <div className={
                toggleState === 2 
                ? "qualification__content qualification__content-active" 
                : "qualification__content"}>
                <div className="qualification__data">
                    <div>
                        <h3 className="qualification__title">Design Web</h3>
                        <span className="qualification__subtitle"> Adobe Illustrator - Photoshop
                        </span>
                        <div className="qualification__calender">
                            <i className="uil uil-calendar-alt"></i> 2021 - 
                            Presente
                        </div>
                    </div>

                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>
                </div>

                <div className="qualification__data">
                    <div></div>
                    
                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>

                    <div>
                        <h3 className="qualification__title">UX/UI Design</h3>
                        <span className="qualification__subtitle"> 
                        Figma 2022 - Presente
                        </span>
                        <div className="qualification__calender">
                            <i className="uil uil-calendar-alt"></i> 2020 - 
                            2021
                        </div>
                    </div>
                </div>

                <div className="qualification__data">
                    <div>
                        <h3 className="qualification__title">Desenvolvimento Web</h3>
                        <span className="qualification__subtitle"> React Mainframework
                        </span>
                        <div className="qualification__calender">
                            <i className="uil uil-calendar-alt"></i> 2021 - Presente
                        </div>
                    </div>

                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;