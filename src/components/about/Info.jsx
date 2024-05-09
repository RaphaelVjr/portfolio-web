import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">

        <div className="about__box">
            <i class="bx bx-award about__icon"></i>
            <h2 className="about__title">Experiência</h2>
                <span className="about__subtitle">2 Anos</span>
        </div>

        <div className="about__box">
            <i class='bx bx-briefcase-alt about__icon'></i>
            <h2 className="about__title">Completo</h2>
                <span className="about__subtitle">20+ Projetos</span>
        </div>

        <div className="about__box">
        <i class='bx bxs-book-alt about__icon'></i>
            <h2 className="about__title">Estudando</h2>
                <span className="about__subtitle">React Native</span>
        </div>
    </div>
  )
}

export default Info