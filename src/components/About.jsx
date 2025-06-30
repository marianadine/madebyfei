import React, { useEffect, useState, useRef } from 'react';
import '../styles/About.css';
import '../styles/CommonStyles.css';
import ScrollIndicator from './ScrollIndicator';

import igpfp from '../imgs/igpfp.jpg';
import camera from '../imgs/camera.png';
import albums from '../imgs/albums.png';
import cats from '../imgs/cats.png';
import spotify from '../imgs/spotify.png';
import chakolab from '../imgs/chakolab.png';
import laptop from '../imgs/laptop.png';
import book from '../imgs/book.png';
import glasses from '../imgs/glasses.png';

const About = () => {
  const photoArray = [albums, cats, spotify, chakolab, laptop, book, glasses];
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

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
            <img src={photoArray[currentPhotoIndex]} alt="IG post" className="ig-photo-img" />
          </div>
          <button className="ig-next-button" onClick={() => setCurrentPhotoIndex((prev) => (prev + 1) % photoArray.length)}>
          </button>
          <button className="ig-previous-button" onClick={() => setCurrentPhotoIndex((prev) => (prev - 1) % photoArray.length)}></button>

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

    </div>
  )
}

export default About
