import React, { useState } from 'react';
import '../styles/Contact.css';
import logo from '../imgs/logoblue.png';

const Contact = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [showGradient, setShowGradient] = useState(false);
    const [trail, setTrail] = useState([]);

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

            <img
                className='contactlogo'
                src={logo}
                alt="Logo"
            />
            <form
                className='contact-form'
                onSubmit={(e) => {
                    e.preventDefault();
                    const data = new FormData(e.target);
                    fetch('http://localhost:5000/api/contact', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            name: data.get('name'),
                            email: data.get('email'),
                            message: data.get('message'),
                        }),
                    })
                        .then((res) => res.json())
                        .then((response) => alert(response.message))
                        .catch(() => alert('Error sending message.'));
                }}
            >
                <input className='inputs' name="name" placeholder="e.g. Nadine Rufo" required />
                <input className='inputs' type="email" name="email" placeholder="youremail@gmail.com" required />
                <textarea className='inputs' name="message" rows={8} placeholder="Your message" required />
                <button className='contactbutton-style' type="submit">Send Message</button>
            </form>
        </div>
    )
}

export default Contact
