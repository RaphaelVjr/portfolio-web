import React from 'react';
import "./skills.css";
import Frontend from './Frontend';
import Backend from './Backend';
import CloudDB from './CloudDB';
import OtherSkills from './OtherSkills';

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">Tech's</h2>
        <span className="section__subtitle">Stacks that i've worked:</span>

        <div className="skills__container container grid">
            <Frontend />
            <Backend />
        </div>

        <div className="cloud__skills container grid">
        <CloudDB />
        <OtherSkills />
        </div>
    </section>
  );
};

export default Skills