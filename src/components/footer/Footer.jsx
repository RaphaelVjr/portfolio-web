import React from 'react';
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container"></div>
        <h1 className="footer__title">Raphael Vitório</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">Sobre mim</a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">Projetos</a>
          </li>

          <li>
            <a href="#home" className="footer__link">Inicio</a>
          </li>
        </ul>

        <div className="footer__social">
        <a href="https://www.instagram.com/raphaelvjr/" className="footer__social-link" target="_blank" rel="noreferrer">
            <i className="bx bxl-facebook"></i>
        </a>

        <a href="https://www.linkedin.com/in/raphaelvitorio/" className="footer__social-link" target="_blank" rel="noreferrer">
            <i className="bx bxl-instagram"></i>
        </a>

        <a href="github.com/RaphaelVjr" className="footer__social-link" target="_blank">
            <i className="uil uil-github-alt"></i>
        </a>
        </div>

        <span className="footer__copy">&#169; Raphael Júnior. Todos direitos reservados</span>
    </footer>
  )
}

export default Footer