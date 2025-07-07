import React, { useState, useEffect, useRef } from 'react';
import '../styles/Contact.css';
import logo from '../imgs/logoblue.png';

const Contact = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [showGradient, setShowGradient] = useState(false);
    const [trail, setTrail] = useState([]);
    const [modal, setModal] = useState({ visible: false, message: '', isError: false });
    const formRef = useRef(null);

    const handleCloseModal = () => setModal({ visible: false, message: '', isError: false });

    useEffect(() => {
        if (modal.visible) {
            const timer = setTimeout(() => handleCloseModal(), 3000);
            return () => clearTimeout(timer);
        }
    }, [modal.visible]);

    return (
        <div
            className='contact-container'
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
        </div>
    );
};

export default Contact;
