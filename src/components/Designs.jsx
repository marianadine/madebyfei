import React, { useEffect, useState, useRef } from 'react';
import '../styles/Designs.css';
import '../styles/CommonStyles.css';
import ScrollIndicator from './ScrollIndicator';

const Designs = () => {
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
      <ScrollIndicator sections={3} activeSection={activeSection} />

      <section style={{ alignItems: 'flex-start' }} className='container' ref={sectionRefs[0]} data-index={0}>
        <div style={{ marginLeft: '100px' }}>
          <button style={{ marginBottom: '40px' }} className='button-style'>Why I love frontend development?</button>
          <p className='works-heading'>HER WORKS</p>
          <div className='works-container'>
            <div className='work'></div>
            <div className='work'></div>
            <div className='work'></div>
            <div className='work'></div>
          </div>
        </div>
      </section>

      <section className='container' ref={sectionRefs[1]} data-index={1}>
        <div style={{ margin: '150px', marginTop: '-50px', width: '90%' }}>
          <h3 className='section2-headingtypo'>Typography</h3>

          <div className='section2-oneline'>
            <h3 className='section2-fontnamemain'>Poppins</h3>
            <p>it’s <span style={{ fontWeight: '700' }}>bold</span> when it needs to be, <span style={{ fontWeight: '300' }}>light</span> when it should be</p>
          </div>

          <div className='section2-oneline'>
            <p style={{ fontStyle: 'italic' }}>my go-to-font</p>
            <h3 className='section2-fontname'>Regular</h3>
          </div>


        </div>
        <p className='section2-explanation'>for its modern, geometric shapes and clean lines — it gives my designs a fresh, friendly vibe while keeping everything perfectly readable. It’s like the font version of a good handshake: professional, approachable, and confident.</p>
      </section>

      <section className='container' ref={sectionRefs[2]} data-index={2}>

      </section>

      <section className='container' ref={sectionRefs[3]} data-index={3}>

      </section>

    </div>
  )
}

export default Designs
