import React, { useEffect, useState, useRef } from 'react';
import '../styles/Designs.css';
import '../styles/CommonStyles.css';
import ScrollIndicator from './ScrollIndicator';
import logo from '../imgs/logoblue.png';

import toggle from '../imgs/toggle.png';
import halfcircle from '../imgs/halfcircle.png';
import cxc from '../imgs/cxc.png';
import circle from '../imgs/circle.png';
import mouse from '../imgs/mouse.png';
import sketch from '../imgs/sketch.png';

import bestdressed from '../imgs/bestdressed.png';
import cupid404 from '../imgs/cupid404.png';
import ars from '../imgs/ars.png';
import uniqlo from '../imgs/uniqlo.png';
import madebyfei from '../imgs/madebyfei.png';
import solarsphere from '../imgs/solarsphere.png';
import esphere from '../imgs/esphere.png';
import cocofw from '../imgs/cocofw.png';
import numoabe from '../imgs/numoabe.png';
import pcare from '../imgs/pcare.png';
import atm from '../imgs/atm.png';
import jpcs from '../imgs/jpcs.png';

import bestdressed2 from '../imgs/bestdressed2.png';
import cupid4042 from '../imgs/1cupid404.png';
import ars2 from '../imgs/ars2.png';
import uniqlo2 from '../imgs/uniqlo2.png';
import madebyfei2 from '../imgs/madebyfei2.png';
import solarsphere2 from '../imgs/solarsphere2.png';
import esphere2 from '../imgs/esphere2.png';
import cocofw2 from '../imgs/cocofw2.png';
import numoabe2 from '../imgs/numoabe2.png';
import pcare2 from '../imgs/pcare2.png';
import atm2 from '../imgs/atm2.png';
import jpcs2 from '../imgs/jpcs2.png';

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Designs = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const sectionRefs = [useRef(), useRef(), useRef()];
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
      name: "SolarSphere",
      technologies: "ReactJS, React Native, Node.js, MongoDB",
      type: "Capstone Project",
      mode: "Groupings",
      expandedImage: solarsphere,
      defaultImage: solarsphere2,
    },
    {
      name: "Made By Fei",
      technologies: "HTML, CSS, ReactJS",
      type: "Full Stack Development",
      mode: "Individual",
      expandedImage: madebyfei,
      defaultImage: madebyfei2,
    },
    {
      name: "ExploreSphere",
      technologies: "ReactJS, Figma",
      type: "Front-end Development",
      mode: "Groupings",
      expandedImage: esphere,
      defaultImage: esphere2,
    },
    {
      name: "Pawsitive Care",
      technologies: "Java, Figma, Android Studio",
      type: "Full Stack Development",
      mode: "Individual",
      expandedImage: pcare,
      defaultImage: pcare2,
    },
    {
      name: "NU MOA Bulldogs Exchange",
      technologies: "Figma, ReactJS, MongoDB",
      type: "Full Stack Development",
      mode: "Groupings",
      expandedImage: numoabe,
      defaultImage: numoabe2,
    },
    {
      name: "EcoAir",
      technologies: "Java, Netbeans, Canva",
      type: "Full Stack Development",
      mode: "Groupings",
      expandedImage: ars,
      defaultImage: ars2,
    },
    {
      name: "Uniqlo Inventory System",
      technologies: "Java, Netbeans, Canva",
      type: "Full Stack Development",
      mode: "Individual",
      expandedImage: uniqlo,
      defaultImage: uniqlo2,
    },
    {
      name: "COCO Fashion Week 2025",
      technologies: "Figma",
      type: "UI/UX Design",
      mode: "Individual",
      expandedImage: cocofw,
      defaultImage: cocofw2,
    },
    {
      name: "JPCS NU MOA",
      technologies: "Figma",
      type: "UI/UX Design",
      mode: "Individual",
      expandedImage: jpcs,
      defaultImage: jpcs2,
    },
    {
      name: "Cupid 404",
      technologies: "Figma",
      type: "UI/UX Design",
      mode: "Individual",
      expandedImage: cupid404,
      defaultImage: cupid4042,
    },
    {
      name: "Best Dressed Voting System",
      technologies: "Figma",
      type: "UI/UX Design",
      mode: "Individual",
      expandedImage: bestdressed,
      defaultImage: bestdressed2,
    },
    {
      name: "Money Mauve",
      technologies: "Java, Figma",
      type: "Full Stack & 1st Project",
      mode: "Groupings",
      expandedImage: atm,
      defaultImage: atm2,
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

  const [showModal, setShowModal] = useState(false);

  return (
    <div className="scroll-container">
      <ScrollIndicator sections={3} activeSection={activeSection} />

      <section style={{ alignItems: 'flex-start' }} className='container' ref={sectionRefs[0]} data-index={0}>
        <div style={{ marginLeft: '100px' }}>
          <button style={{ marginBottom: '40px' }} className='button-style' onClick={() => setShowModal(true)}>Why I love frontend development?</button>
          <div className='section1-oneline' style={{ alignItems: 'center' }}>
            <p className='works-heading' style={{ marginRight: 40 }}>HER WORKS</p>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button className="scroll-icon left" onClick={scrollLeft} aria-label="Scroll left">
                <FaChevronLeft size={30} />
              </button>
              <button className="scroll-icon right" onClick={scrollRight} aria-label="Scroll right">
                <FaChevronRight size={30} />
              </button>
            </div>
          </div>
          <div className="works-scroll-wrapper" style={{ maxWidth: '2000px', overflowX: 'auto' }}>
            <div className='works-container' ref={worksContainerRef}>
              {designs.map((design, index) => (
                <div
                  key={index}
                  className={`work ${expandedIndex === index ? 'expanded' : ''}`}
                  onClick={() => handleExpand(index)}
                  style={{
                    backgroundImage: `url(${expandedIndex === index ? design.expandedImage : design.defaultImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: expandedIndex === index ? 'top' : 'center',
                    backgroundRepeat: 'no-repeat',
                  }}

                >
                  <p className="work-duration">{design.type}</p>
                  <div
                    className={`work-bottominfo ${expandedIndex === index ? 'hidden' : ''}`}
                  >
                    <h4 className="work-name">{design.name} | {design.mode}</h4>
                    <p className="work-tech">{design.technologies}</p>
                  </div>

                </div>

              ))}
            </div>
          </div>
        </div>
      </section>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className='modal-border'>
              <img className='modal-logo' src={logo} alt="Logo" />
              <h2 className='modal-question'>Why I love frontend development?</h2>
              <p className='modal-answer'>
                Frontend development lets me turn creative ideas into real, interactive experiences that people can see and use. I love crafting interfaces that are not just beautiful, but also intuitive and enjoyable for users. It’s rewarding to solve design challenges and see my work come alive on the screen, blending art and code to make something meaningful.
              </p>
            </div>
          </div>
        </div>
      )}

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
            <p className='workflow-explanation'>
              My process begins with sketching raw ideas, from there — I seek inspiration to refine concepts and add unique flair. I then craft thoughtful layouts that balance form and function. Finally, I bring designs to life through code — transforming vision into an interactive reality.
            </p>
            <h3 className='workflow-title'>WORKFLOW</h3>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Designs;
