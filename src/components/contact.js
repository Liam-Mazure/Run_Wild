import React from 'react';
import { useState, emailjs } from 'react';

function Contact(){
    const[formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const{name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
    });
};

const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send('service_dhcw70g', 'template_w6tmrpd', formData, 'D1VsjuBqxcqQdk9NO')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
    }, (error) => {
        console.log('FAILED...', error);
        alert('Failed to send the message. Please try again.');
    });
};
    return(
        <div className='contact_page'>
            <h1 className='contactTitle'>Send a Message</h1>
            <form id = "contact_form_container" onSubmit={handleSubmit}>
                <label >Name: </label>
                <input type = "text" name = "name" value={formData.name} onChange={handleChange} required></input>

                <label >Email: </label>
                <input type = "email"  name="email" value={formData.email} onChange={handleChange} required></input>

                <label >Message: </label>
                <textarea  rows={4} name="message" value={formData.message} onChange={handleChange} required></textarea>

                <input type = "submit"></input>
            </form>
        </div>
    )
}

export default Contact;