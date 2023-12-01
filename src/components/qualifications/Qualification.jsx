import React, { useState } from 'react'
import "./qualification.css"

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

  return (
    <section className="qualification section">
        <h2 className="section__title">Qualifications</h2>
      <span className="section__subtitle">My journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
            <div className={
                toggleState === 1 
                ? "qualification__button qualification__active button--flex" 
                : "qualification__button button--flex"}
                onClick={() => toggleTab(1)}
                >
                <i className="uil uil-graduation-cap qualification__icon"></i>
                Education
            </div>

            <div 
            className={
                toggleState === 2 
                ? "qualification__button qualification__active button--flex" 
                : "qualification__button button--flex"}
                onClick={() => toggleTab(2)}
                >
                <i className="uil uil-briefcase-alt qualification__icon"></i>
                Experience
            </div>
        </div>

        <div className="qualification__sections">
            <div className={
                toggleState === 1 
                ? "qualification__content qualification__content-active" 
                : "qualification__content"}>
                <div className="qualification__data">
                    <div>
                        <h3 className="qualification__title">Software Engineering</h3>
                        <span className="qualification__subtitle"> UNICESUMAR - Bachelors degree
                        </span>
                        <div className="qualification__calender">
                            <i className="uil uil-calendar-alt"></i> 02/2022 - Now
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
                        <h3 className="qualification__title">Fullstack Dev course</h3>
                        <span className="qualification__subtitle"> 
                        ProgramadorBR
                        </span>
                        <div className="qualification__calender">
                            <i className="uil uil-calendar-alt"></i>50 Hours - Complete / 2022
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
                        <h3 className="qualification__title">Web design</h3>
                        <span className="qualification__subtitle"> Adobe Illustrator - Photoshop
                        </span>
                        <div className="qualification__calender">
                            <i className="uil uil-calendar-alt"></i> 2021 - 
                            Now
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
                        <h3 className="qualification__title">Freelance</h3>
                        <span className="qualification__subtitle"> 
                        Angular and laravel Web developer
                        </span>
                        <div className="qualification__calender">
                            <i className="uil uil-calendar-alt"></i> 11/2022 - 
                            01/2023                
                        </div>
                    </div>
                </div>

                <div className="qualification__data">
                    <div>
                        <h3 className="qualification__title">Web development</h3>
                        <span className="qualification__subtitle"> Angular and Java
                        </span>
                        <div className="qualification__calender">
                            <i className="uil uil-calendar-alt"></i> Ford Motor Company <br></br>01/2023 - Now
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