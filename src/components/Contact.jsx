import React, { useState, useEffect, useRef } from 'react';
import '../styles/Contact.css';
import logo from '../imgs/logoblue.png';
import rufocv from '../imgs/rufocv.png';
import ScrollIndicator from './ScrollIndicator';

import { FaDownload } from "react-icons/fa";

const Contact = () => {
    const [modal, setModal] = useState({ visible: false, message: '', isError: false });
    const formRef = useRef(null);

    const handleCloseModal = () => setModal({ visible: false, message: '', isError: false });

    useEffect(() => {
        if (modal.visible) {
            const timer = setTimeout(() => handleCloseModal(), 3000);
            return () => clearTimeout(timer);
        }
    }, [modal.visible]);

    const [activeSection, setActiveSection] = useState(0);
    const sectionRefs = [useRef(), useRef()];

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
        <div className='scroll-container'>
            <ScrollIndicator sections={1} activeSection={activeSection} />

            <section className='container' ref={sectionRefs[0]} data-index={0}>
                <img className='contactlogo' src={logo} alt="Logo" />
                <form
                    ref={formRef}
                    className='contact-form'
                    onSubmit={(e) => {
                        e.preventDefault();
                        const data = new FormData(e.target);
                        fetch('/api/contact', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({
                                name: data.get('name'),
                                email: data.get('email'),
                                message: data.get('message'),
                            }),
                        })
                            .then((res) => res.json())
                            .then((response) => {
                                setModal({
                                    visible: true,
                                    message: response.message,
                                    isError: !response.success,
                                });
                                if (response.success && formRef.current) {
                                    formRef.current.reset();
                                }
                            })
                            .catch(() => {
                                setModal({
                                    visible: true,
                                    message: 'An unexpected error occurred while sending your message.',
                                    isError: true,
                                });
                            });
                    }}
                >
                    <input className='inputs' name="name" placeholder="e.g. Nadine Rufo" required />
                    <input className='inputs' type="email" name="email" placeholder="youremail@gmail.com" required />
                    <textarea className='inputs' name="message" rows={8} placeholder="Your message" required />
                    <button className='contactbutton-style' type="submit">Send Message</button>
                </form>

                {modal.visible && (
                    <div className="modal-overlay" onClick={handleCloseModal}>
                        <div style={{ padding: '1rem' }} className="modal-content modal-border">
                            <p
                                className="modal-question"
                                style={{ color: modal.isError ? '#d9534f' : '#4077DE' }}
                            >
                                {modal.message}
                            </p>
                            {!modal.isError ? (
                                <p style={{ textAlign: 'center' }} className="modal-answer">
                                    Thank you for reaching out! I’ll get back to you as soon as possible.
                                </p>
                            ) : (
                                <p style={{ textAlign: 'center' }} className="modal-answer">
                                    Please try again later or email me directly at <strong>nadinerufo7@gmail.com</strong>.
                                </p>
                            )}
                        </div>
                    </div>
                )}
            </section>
            {/* <section className='container' ref={sectionRefs[1]} data-index={1}>
                <div className='cv-section'>
                    <img className='cv' src={rufocv} alt="Logo" />

                    <div className='container cv'>
                        <h1 className='contact-title'>Download my CV</h1>
                        <p className='contact-subtitle'>Interested? You can download my CV. I appreciate you taking the time to check out my portfolio.</p>

                        <div className='contact-cv-border'>
                            <a
                                href="/NadineFayeRufo_CV.pdf"
                                download="NadineFayeRufo_CV.pdf"
                            >
                                <button className='cv-download-btn'><FaDownload size={20} /> Download</button>

                            </a>
                        </div>
                    </div>
                </div>
            </section> */}
        </div>
    );
};

export default Contact;
