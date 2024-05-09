import './App.css';
import React from 'react';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Qualification from './components/qualifications/Qualification';
import Work from './components/work/Work';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import 'react-toastify/dist/ReactToastify.css';
import ScrollUp from './components/scrollup/ScrollUp';
import { useTranslation } from 'react-i18next';
import { LanguageProvider } from './context/LanguageContext';
import { ToastContainer } from 'react-toastify';

const App = () => {

  return (
    <>
      <LanguageProvider>
        <Header />
        <ToastContainer />

        <main className="main">
          <Home />
          <About />
          <Skills />
          <Services />
          <Qualification />
          <Work />
          <Contact />
        </main>

        <Footer />
        <ScrollUp />
      </LanguageProvider>
    </>
  );
};

export default App;
