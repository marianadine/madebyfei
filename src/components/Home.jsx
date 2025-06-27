import React, { useEffect, useState, useRef } from 'react';
import '../styles/Home.css';
import '../styles/CommonStyles.css';
import logo from '../imgs/logoblue.png';
import me from '../imgs/section2me.png';
import ScrollIndicator from './ScrollIndicator';

const Home = () => {
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = [useRef(), useRef(), useRef(), useRef()];

  useEffect(() => {
    const observerOptions = { root: null, threshold: 0.5 };
    const observerCallback = entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = Number(entry.target.dataset.index);
          setActiveSection(index);
        }
      });
    };
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionRefs.forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="scroll-container">
      <ScrollIndicator sections={4} activeSection={activeSection} />

      <section className='container' ref={sectionRefs[0]} data-index={0}>
        <p className='section1-p'>she really said ‘I’m gonna make my portfolio.’</p>
        <img className='mainlogo' src={logo} />
        <p className='section1-p'>designs that click. literally.</p>
      </section>

      <section className='container' ref={sectionRefs[1]} data-index={1}>
        <div style={{ alignItems: 'flex-start' }}>
          <div className='intro-flex'>
            <img className='me' src={me} alt="Me" />
            <p className='section2-p'>
              Hi, I’m <span className='myname'>Nadine</span>.
            </p>
          </div>

          <p className='section2-p'>
            — an aspiring frontend developer with a <br />
            passion for clean design and smooth <br />
            user experiences.
          </p>

          <div className='section2-footer'>
            <p className='section2-footerp'>*and lowkey willing to learn backend too</p>
            <button className='button-style'>Why Frontend Development?</button>
          </div>
        </div>
      </section>


      <section className='container' ref={sectionRefs[2]} data-index={2}>
        <div className='section3-wrapper'>
          <p className='left-caption'>*serving layouts since 2020</p>

          <div className='section3-row'>
            <div className='section3-boxheader'>
              <p>Select all images with</p>
              <h3>My Designs</h3>
              <p>Click ‘View All’ to explore my full collection of designs.</p>
            </div>
            <div className='section3-grid'>
              <div></div><div></div><div></div>
              <div></div><div></div><div></div>
              <div></div><div></div><div></div>
            </div>
          </div>

          <p className='right-caption'>*she coded, she styled, she deployed</p>
        </div>
        <button className='viewall-style'>View All</button>

      </section>


      <section className='container' ref={sectionRefs[3]} data-index={3}>
        <p>Say Hello!</p>
      </section>
    </div>
  );
};

export default Home;
