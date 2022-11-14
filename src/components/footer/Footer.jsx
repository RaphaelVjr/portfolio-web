import React from 'react';
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container"></div>
        <h1 className="footer__title">Raphael Vitório</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">Sobre</a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">Projetos</a>
          </li>

          <li>
            <a href="#testimonials" className="footer__link">Testemunhas</a>
          </li>
        </ul>

        <div className="footer__social">
        <a href="https://www.instagram.com/raphaelvjr/" className="footer__social-link" target="_blank" rel="noreferrer">
            <i class="bx bxl-facebook"></i>
        </a>

        <a href="https://www.linkedin.com/in/raphaelvitorio/" className="footer__social-link" target="_blank" rel="noreferrer">
            <i class="bx bxl-instagram"></i>
        </a>

        <a href="github.com/RaphaelVjr" className="footer__social-link" target="_blank">
            <i class="uil uil-github-alt"></i>
        </a>
        </div>

        <span className="footer__copy">&#169; Raphael Júnior. All rights reserved</span>
    </footer>
  )
}

export default Footer