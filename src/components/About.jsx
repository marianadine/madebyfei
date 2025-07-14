import React, { useEffect, useState, useRef } from 'react';
import '../styles/About.css';
import '../styles/CommonStyles.css';
import ScrollIndicator from './ScrollIndicator';
import logo from '../imgs/logoblue.png';

import igpfp from '../imgs/igpfp.jpg';
import camera from '../imgs/camera.png';
import albums from '../imgs/albums.png';
import cats from '../imgs/cats.png';
import spotify from '../imgs/spotify.png';
import chakolab from '../imgs/chakolab.png';
import laptop from '../imgs/laptop.png';
import book from '../imgs/book.png';
import glasses from '../imgs/glasses.png';

import a from '../imgs/1.png';
import b from '../imgs/2.png';
import c from '../imgs/3.png';
import d from '../imgs/4.png';
import e from '../imgs/5.png';
import f from '../imgs/6.png';
import g from '../imgs/7.png';
import h from '../imgs/8.png';
import i from '../imgs/9.png';
import j from '../imgs/10.png';
import k from '../imgs/11.png';
import l from '../imgs/12.png';

const About = () => {
  const photoArray = [a, b, c, d, e, f, g, h, i, j, k, l];
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [swipeDirection, setSwipeDirection] = useState('');

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

  const [showModal, setShowModal] = useState(false);

  return (
    <div className="scroll-container">
      <ScrollIndicator sections={3} activeSection={activeSection} />

      <section style={{ alignItems: 'flex-start' }} className='container' ref={sectionRefs[0]} data-index={0}>
        <div style={{ marginLeft: '200px' }}>
          <button style={{ marginBottom: '30px' }} className='button-style' onClick={() => setShowModal(true)}>Why take BSIT-MWA?</button>

          <p className='section1-heading'>KNOW</p>
          <p className='section1-heading'>
            MOR<StyledE1 /> AB<StyledO />UT
          </p>
          <p className='section1-heading'>
            M<StyledE2 />? HER?
          </p>
          <p style={{ marginTop: '-20px' }} className='section1-p'>see what a girl can do with her 4-year degree</p>
        </div>
      </section>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className='modal-border'>
              <img className='modal-logo' src={logo} alt="Logo" />
              <h2 className='modal-question'>Why take BSIT-MWA?</h2>
              <p className='modal-answer'>
                Choosing BSIT-MWA was a no-brainer for me — it’s the perfect program to deepen my skills in both design and web technologies. I wanted to gain hands-on experience with modern web applications while exploring how to build engaging, user-centered digital experiences. This track lets me combine my passion for creative interfaces with solid technical foundations, preparing me for a future in frontend development and beyond.
              </p>
            </div>
          </div>
        </div>
      )}

      <section className='container' ref={sectionRefs[1]} data-index={1}>
        <div className='igpost-box'>
          <div className='igpost-header'>
            <img className='igpfp' src={igpfp} />
            <div>
              <p className='ig-uname'>ae.feyy</p>
              <p className='id-location'>NU MOA, Pasay City, Philippines</p>
            </div>
          </div>

          <img className='ig-camera' src={camera} />
          <div className='ig-photo'>
            <img
              src={photoArray[currentPhotoIndex]}
              alt="IG post"
              className={`ig-photo-img ${swipeDirection}`}
              onAnimationEnd={() => setSwipeDirection('')} // reset animation
            />
          </div>

          <button
            className="ig-next-button"
            onClick={() => {
              setSwipeDirection('left');
              setCurrentPhotoIndex((prev) => (prev + 1) % photoArray.length);
            }}
          ></button>

          <button
            className="ig-previous-button"
            onClick={() => {
              setSwipeDirection('right');
              setCurrentPhotoIndex((prev) => (prev - 1 + photoArray.length) % photoArray.length);
            }}
          ></button>

          <p style={{ marginBottom: '-10px' }} className='igpost-p'>Liked by <span style={{ fontWeight: 600 }}>yes.you</span> and <span style={{ fontWeight: 600 }}>others</span></p>
          <p className='igpost-p'><span style={{ fontWeight: 600, marginRight: 15 }}>ae.feyy</span>what its like being an IT student at NU MOA - click the camera buttons to see!</p>
        </div>
      </section>

      <section className='container' ref={sectionRefs[2]} data-index={2}>
        <button style={{ marginBottom: '40px' }} className='button-style'>starter pack</button>
        <p className='section3-albumtitle'>fei as an IT Student</p>

        <div className="starterpack-container">
          <div className="starterpack-wrapper">
            <img className='starterpack' src={glasses} />
            <span className="starterpack-number">04</span>
          </div>
          <div className="starterpack-wrapper">
            <img className='starterpack' src={spotify} />
            <span className="starterpack-number">02</span>
          </div>
          <div className="starterpack-wrapper">
            <img className='starterpack' src={cats} />
            <span className="starterpack-number">01</span>
          </div>
          <div className="starterpack-wrapper">
            <img className='starterpack' src={book} />
            <span className="starterpack-number">05</span>
          </div>
          <div className="starterpack-wrapper">
            <img className='starterpack' src={laptop} />
            <span className="starterpack-number">03</span>
          </div>
          <div className="starterpack-wrapper">
            <img className='starterpack' src={chakolab} />
            <span className="starterpack-number">06</span>
          </div>
          <div className="starterpack-wrapper">
            <img className='starterpack' src={albums} />
            <span className="starterpack-number">07</span>
          </div>
        </div>

        <p className='section3-albumtracks'>the cats, of course/spotify for the vibes/laptop, obviously/glasses so I can actually see/a book to keep me sane/drink your water/top albums on repeat</p>
      </section>
{/* 
      <section className='container' ref={sectionRefs[3]} data-index={3}>
        <h3>JPCS NU MOA</h3>
      </section> */}

    </div>
  )
}

export default About
