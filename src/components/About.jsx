import React, { useEffect, useState, useRef } from 'react';
import '../styles/About.css';
import '../styles/CommonStyles.css';
import ScrollIndicator from './ScrollIndicator';

const About = () => {
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = [useRef(), useRef(), useRef()];

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

  const StyledE1 = () => (
    <span style={{
      display: 'inline-flex',
      flexDirection: 'column',
      verticalAlign: 'middle',
      marginLeft: '5px',
      transform: 'translateY(-10px)',
    }}>
      <span style={{ height: '30px', width: '100px', backgroundColor: '#FDC02D', marginBottom: '8px' }} />
      <span style={{ height: '30px', width: '100px', backgroundColor: '#FAAAA1', marginBottom: '8px' }} />
      <span style={{ height: '30px', width: '100px', backgroundColor: '#514992' }} />
    </span>
  );

  const StyledE2 = () => (
    <span style={{
      display: 'inline-flex',
      flexDirection: 'column',
      verticalAlign: 'middle',
      marginLeft: '5px',
      transform: 'translateY(-10px)',
    }}>
      <span style={{ height: '30px', width: '100px', backgroundColor: '#4077DE', marginBottom: '8px' }} />
      <span style={{ height: '30px', width: '100px', backgroundColor: '#FD5E1A', marginBottom: '8px' }} />
      <span style={{ height: '30px', width: '100px', backgroundColor: '#1A6C35' }} />
    </span>
  );


  const StyledO = () => (
    <span style={{
      display: 'inline-block',
      width: '120px',
      height: '120px',
      borderRadius: '50%',
      backgroundColor: '#4077DE',
      verticalAlign: 'middle',
      transform: 'translateY(-15px)',
    }} />
  );

  return (
    <div className="scroll-container">
      <ScrollIndicator sections={3} activeSection={activeSection} />

      <section style={{ alignItems: 'flex-start' }} className='container' ref={sectionRefs[0]} data-index={0}>
        <div style={{ marginLeft: '200px' }}>
          <button style={{ marginBottom: '40px' }} className='button-style'>Why take BSIT-MWA?</button>

          <p className='section1-heading'>KNOW</p>
          <p className='section1-heading'>
            MOR<StyledE1 /> AB<StyledO />UT
          </p>
          <p className='section1-heading'>
            M<StyledE2 />? HER?
          </p>
          <p style={{ marginTop: '40px' }} className='section1-p'>see what a girl can do with her 4-year degree</p>
        </div>
      </section>


      <section className='container' ref={sectionRefs[1]} data-index={1}>
        <p className='section1-p'>she really said ‘I’m gonna make my portfolio.’</p>
        <p className='section1-p'>designs that click. literally.</p>
      </section>

      <section className='container' ref={sectionRefs[2]} data-index={2}>
        <p className='section1-p'>she really said ‘I’m gonna make my portfolio.’</p>
        <p className='section1-p'>designs that click. literally.</p>
      </section>

    </div>
  )
}

export default About
