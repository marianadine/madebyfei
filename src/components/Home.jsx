import React, { useEffect, useState, useRef } from 'react';
import '../styles/Home.css';
import '../styles/CommonStyles.css';
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
        <p>she really said ‘I’m gonna make my portfolio.’</p>
        <img alt="" />
        <p>designs that click. literally.</p>
      </section>

      <section className='container' ref={sectionRefs[1]} data-index={1}>
        <img alt="" />
        <p>Hi, I’m <span>Nadine</span>.</p>
        <p>— an aspiring frontend developer with a
          passion for clean design and smooth
          user experiences.</p>
      </section>

      <section className='container' ref={sectionRefs[2]} data-index={2}>
        <p>*serving layouts since 2020</p>
      </section>

      <section className='container' ref={sectionRefs[3]} data-index={3}>
        <p>Say Hello!</p>
      </section>
    </div>
  );
};

export default Home;
