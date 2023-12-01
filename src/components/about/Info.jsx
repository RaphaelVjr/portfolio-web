import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">

        <div className="about__box">
            <i class="bx bx-award about__icon"></i>
            <h2 className="about__title">Work Experience</h2>
                <span className="about__subtitle">1 Year</span>
        </div>

        <div className="about__box">
            <i class='bx bx-briefcase-alt about__icon'></i>
            <h2 className="about__title">Complete</h2>
                <span className="about__subtitle">9 Projects</span>
        </div>

        <div className="about__box">
        <i class='bx bxs-book-alt about__icon'></i>
            <h2 className="about__title">Now studying</h2>
                <span className="about__subtitle">Vue framework</span>
        </div>
    </div>
  )
}

export default Info