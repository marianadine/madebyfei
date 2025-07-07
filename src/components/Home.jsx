import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';
import '../styles/CommonStyles.css';
import ScrollIndicator from './ScrollIndicator';

import logo from '../imgs/logoblue.png';
import logo1 from '../imgs/logoblue.png';
import logo2 from '../imgs/logored.png';
import logo3 from '../imgs/logogreen.png';
import me from '../imgs/section2me.png';
import section4bg from '../imgs/section4bg.png';
import linlogo from '../imgs/linlogo.png';
import iglogo from '../imgs/iglogo.png';
import fblogo from '../imgs/fblogo.png';
import ghublogo from '../imgs/ghublogo.png';

import bestdressed2 from '../imgs/bestdressed2.png';
import cupid4042 from '../imgs/1cupid404.png';
import ars2 from '../imgs/ars2.png';
import pcare2 from '../imgs/pcare2.png';
import madebyfei2 from '../imgs/madebyfei2.png';
import solarsphere2 from '../imgs/solarsphere2.png';
import esphere2 from '../imgs/esphere2.png';
import cocofw2 from '../imgs/cocofw2.png';
import numoabe2 from '../imgs/numoabe2.png';

import { FaCheck } from "react-icons/fa";

const Home = () => {
  const navigate = useNavigate();

  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = [useRef(), useRef(), useRef(), useRef()];
  const designImages = [
    solarsphere2,
    madebyfei2,
    esphere2,
    ars2,
    pcare2,
    cocofw2,
    cupid4042,
    numoabe2,
    bestdressed2,
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

  const [selectedBoxes, setSelectedBoxes] = useState([]);

  const toggleBox = (index) => {
    setSelectedBoxes(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index) // deselect
        : [...prev, index]              // select
    );
  };

  const [showModal, setShowModal] = useState(false);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showGradient, setShowGradient] = useState(false);
  const [trail, setTrail] = useState([]);

  return (
    <div className="scroll-container">
      <ScrollIndicator sections={4} activeSection={activeSection} />

      <section
        className='container section1-container'
        ref={sectionRefs[0]}
        data-index={0}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const newPos = { x: e.clientX - rect.left, y: e.clientY - rect.top };
          setMousePosition(newPos);
          setShowGradient(true);
          setTrail((prev) => {
            const updated = [...prev, { ...newPos, color: '#7CA9F9' }];
            return updated.slice(-30);
          });
        }}
        onMouseLeave={() => setShowGradient(false)}
      >
        {showGradient && trail.map((point, idx) => (
          <div
            key={idx}
            className="pointer-gradient"
            style={{
              left: `${point.x}px`,
              top: `${point.y}px`,
              background: `radial-gradient(circle at center, ${point.color} 0%, transparent 70%)`,
              opacity: (idx + 1) / trail.length,
              transform: 'translate(-50%, -50%) scale(1.2)',
              zIndex: -9999,
            }}
          />
        ))}

        <p className='section1-p'>she really said ‘I’m gonna make my portfolio.’</p>
        <img
          className='mainlogo'
          src={logo1}
          alt="Logo"
        />
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
            <button
              className='button-style'
              onClick={() => setShowModal(true)}
            >
              Why Frontend Development?
            </button>
          </div>
        </div>
      </section>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className='modal-border'>
              <img className='modal-logo' src={logo} />
              <h2 className='modal-question'>Why Frontend Development?</h2>
              <p className='modal-answer'>
                I love frontend development because it’s where design meets technology — I get to bring ideas to life with interactive, beautiful user interfaces. Seeing designs turn into functional, engaging experiences for users is incredibly satisfying. It’s a blend of creativity and problem-solving that I find endlessly exciting!
              </p>
            </div>
          </div>
        </div>
      )}

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
              {designImages.map((imgSrc, index) => (
                <div
                  key={index}
                  className={`section3-box ${selectedBoxes.includes(index) ? 'selected' : ''}`}
                  onClick={() => toggleBox(index)}
                  style={{
                    backgroundImage: `url(${imgSrc})`,
                    backgroundSize: 'cover',
                    backgroundPosition: '50% 40%'
                  }}
                >
                  {selectedBoxes.includes(index) && (
                    <div className="checkmark">
                      <FaCheck size={16} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <p className='right-caption'>*she coded, she styled, she deployed</p>
        </div>
        <button
          className='viewall-style'
          onClick={() => navigate('/designs')}
        >
          View All
        </button>

      </section>

      <section className='container' ref={sectionRefs[3]} data-index={3}>
        <div className='section4-container'>
          <img className='section4-bg' src={section4bg} alt="Background" />
          <div className='section4-card'>
            <h2 className='section4-heading'>Say Hello!</h2>
            <div className='section4-icons'>
              <a href="https://github.com/marianadine" target="_blank" rel="noopener noreferrer">
                <img className='contacts-logo' src={ghublogo} alt="GitHub" />
              </a>
              <a href="https://www.facebook.com/mariaafeii" target="_blank" rel="noopener noreferrer">
                <img className='contacts-logo' src={fblogo} alt="Facebook" />
              </a>
              <a href="https://www.instagram.com/ae.feyy/" target="_blank" rel="noopener noreferrer">
                <img className='contacts-logo' src={iglogo} alt="Instagram" />
              </a>
              <a href="https://www.linkedin.com/in/marianadine0912" target="_blank" rel="noopener noreferrer">
                <img className='contacts-logo' src={linlogo} alt="LinkedIn" />
              </a>
            </div>
            <p className='section4-text'>
              I’m always up for a good dev chat, a design collab, or just geeking<br />
              out over frontend tools. Let’s talk! Have something creative in<br />
              mind? Hit me up at: nadinerufo7@gmail.com
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
