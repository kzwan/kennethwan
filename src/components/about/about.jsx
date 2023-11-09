import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import SectionHeader from '../sectionheader';
import './about.css';
import Stats from '../about/stats';

const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className="about">
        <div>
            <p className="aboutText">
              Howdy! I'm Kenny, a junior studying computer science at UCLA!  
              I'm passionate about creating platforms and products for social good (you can see some of my projects below). 
            </p>
            <p className="aboutText">
                Last summer, I helped thousands of people get health insurance through my software engineering internship at eHealth, Inc.
            </p>
            <p className="aboutText">
                I'm currently looking for Winter/Spring/Summer internship opporunites in software engineering, fullstack web/mobile development, and product management.
            </p>
            <p className="aboutText">
              When I'm not coding, I enjoy various outdoor activites like hiking, getting swole at the gym, and watching pretty sunsets!
            </p>
        </div>
        <Stats />
      </div>
    </section>
  );
};

export default About;
