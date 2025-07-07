import React from 'react'
import '../styles/Contact.css';

const Contact = () => {
    return (
        <div className='contact-container'>
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
                        .catch((error) => alert('Error sending message.'));
                }}
            >
                <input name="name" placeholder="Your name" required />
                <input type="email" name="email" placeholder="Your email" required />
                <textarea name="message" placeholder="Your message" required />
                <button type="submit">Send Message</button>
            </form>

        </div>
    )
}

export default Contact
