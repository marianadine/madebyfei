import React, { useEffect, useState, useRef } from 'react';
import '../styles/Designs.css';
import '../styles/CommonStyles.css';
import ScrollIndicator from './ScrollIndicator';

import toggle from '../imgs/toggle.png';
import halfcircle from '../imgs/halfcircle.png';
import cxc from '../imgs/cxc.png';
import circle from '../imgs/circle.png';
import mouse from '../imgs/mouse.png';
import sketch from '../imgs/sketch.png';

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Designs = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState(0);

  const sectionRefs = [useRef(), useRef(), useRef(), useRef()];
  const worksContainerRef = useRef();
  const scrollLeft = () => {
    worksContainerRef.current.scrollBy({
      left: -400,
      behavior: 'smooth'
    });
  };

  const scrollRight = () => {
    worksContainerRef.current.scrollBy({
      left: 400,
      behavior: 'smooth'
    });
  };

  const designs = [
    {
      name: "Portfolio Website",
      technologies: "HTML, CSS, React",
      type: "Individual",
      duration: "2 months"
    },
    {
      name: "Team Project App",
      technologies: "React, Node.js, MongoDB",
      type: "Group",
      duration: "4 months"
    },
    {
      name: "E-commerce UI",
      technologies: "Figma, Tailwind CSS",
      type: "Individual",
      duration: "1 month"
    },
    {
      name: "Mobile Planner",
      technologies: "React Native, Expo",
      type: "Individual",
      duration: "3 months"
    },
    {
      name: "Mobile Planner",
      technologies: "React Native, Expo",
      type: "Individual",
      duration: "3 months"
    }
  ];

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

  const handleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="scroll-container">
      <ScrollIndicator sections={4} activeSection={activeSection} />

      <section style={{ alignItems: 'flex-start' }} className='container' ref={sectionRefs[0]} data-index={0}>
        <div style={{ marginLeft: '100px' }}>
          <button style={{ marginBottom: '40px' }} className='button-style'>Why I love frontend development?</button>
          <p className='works-heading'>HER WORKS</p>
          <div className="works-scroll-wrapper">

            <div className='works-container' ref={worksContainerRef}>
              {designs.map((design, index) => (
                <div
                  key={index}
                  className={`work ${expandedIndex === index ? 'expanded' : ''}`}
                  onClick={() => handleExpand(index)}
                >
                  <p className="work-duration">{design.duration}</p>
                  <div className='work-bottominfo'>
                    <h4 className="work-name">{design.name} | {design.type}</h4>
                    <p className="work-tech">{design.technologies}</p>
                  </div>

                </div>
              ))}
            </div>

          </div><button className="scroll-icon left" onClick={scrollLeft}>
            <FaChevronLeft size={30} />
          </button>
          <button className="scroll-icon right" onClick={scrollRight}>
            <FaChevronRight size={30} />
          </button>
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
        <p>h4</p>
      </section>

      <section className='container' ref={sectionRefs[3]} data-index={3}>
        <div style={{ marginTop: '160px' }}>
          <div className='workflow-container'>
            <div style={{ marginBottom: '50px' }} className='workflow-oneline'>
              <img src={circle} alt="circle" />
              <button className='workflow-heading'>Sketch.</button>
              <img src={sketch} alt="sketch" />
              <button className='workflow-heading'>Inspire.</button>
              <img src={cxc} alt="cxc" />
            </div>
            <div className='workflow-oneline'>
              <button className='workflow-heading'>Layout.</button>
              <img src={halfcircle} alt="halfcircle" />
              <button className='workflow-heading'>Code.</button>
              <img src={mouse} alt="mouse" />
              <img src={toggle} alt="toggle" />
            </div>
          </div>
          <div style={{ width: '1600px' }} className='workflow-oneline'>
            <p className='workflow-explanation'>I start by sketching ideas, seek inspiration to refine concepts, create a thoughtful layout, and finally bring designs to life through code.</p>
            <h3 className='workflow-title'>WORKFLOW</h3>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Designs;
