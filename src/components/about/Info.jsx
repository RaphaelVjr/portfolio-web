import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">

        <div className="about__box">
            <i class="bx bx-award about__icon"></i>
            <h3 className="about__title">Experiência De</h3>
                <span className="about__subtitle">1 Ano</span>
        </div>

        <div className="about__box">
            <i class='bx bx-briefcase-alt about__icon'></i>
            <h3 className="about__title">Completos</h3>
                <span className="about__subtitle">+12 Projetos</span>
        </div>

        <div className="about__box">
        <i class='bx bxs-book-alt about__icon'></i>
            <h3 className="about__title">Estudando</h3>
                <span className="about__subtitle">Figma e Webflow</span>
        </div>
    </div>
  )
}

export default Info