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
                        <span className="qualification__subtitle"> UNICESUMAR - Bacharelado
                        </span>
                        <div className="qualification__calender">
                            <i className="uil uil-calendar-alt"></i> 01/2022 - Atualmente
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
                        <h3 className="qualification__title">Curso Dev Fullstack</h3>
                        <span className="qualification__subtitle"> 
                        ProgramadorBR
                        </span>
                        <div className="qualification__calender">
                            <i className="uil uil-calendar-alt"></i>50 Horas - Completo / 2022
                        </div>
                    </div>
                </div>

                <div className="qualification__data">
                    <div>
                        <h3 className="qualification__title">Segurança na Nuvem</h3>
                        <span className="qualification__subtitle"> IBSEC - Certificado
                        </span>
                        <div className="qualification__calender">
                            <i className="uil uil-calendar-alt"></i> 04/2024 - 04/2027
                        </div>
                    </div>

                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>
                </div>
            </div>

            <div className={
                toggleState === 2 
                ? "qualification__content qualification__content-active" 
                : "qualification__content"}>
                <div className="qualification__data">
                    <div>
                        <h3 className="qualification__title">Web Design</h3>
                        <span className="qualification__subtitle"> Adobe Illustrator - Photoshop
                        </span>
                        <div className="qualification__calender">
                            <i className="uil uil-calendar-alt"></i> 140 Horas - Completo / 2021 

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
                        <h3 className="qualification__title">Freelancer</h3>
                        <span className="qualification__subtitle"> 
                          Desenvolvedor Fullstack
                        </span>
                        <div className="qualification__calender">
                            <i className="uil uil-calendar-alt"></i> 06/2021 - 
                            Atualmente            
                        </div>
                    </div>
                </div>

                <div className="qualification__data">
                    <div>
                        <h3 className="qualification__title">Desenvolvedor Fullstack</h3>
                        <span className="qualification__subtitle"> Angular e Java
                        </span>
                        <div className="qualification__calender">
                            <i className="uil uil-calendar-alt"></i> Ford Motor Company <br></br>01/2023 - Atualmente
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