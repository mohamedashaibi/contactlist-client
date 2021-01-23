import React, { useState } from 'react'
import './ContactCard.css'
import robot from '../../images/robot.png'
function ContactCard(props) {
    const[contact, setContacts] = useState(props.contact)
    return (
        <div className="contact-card">
            <img src={robot} alt="contact pic"/>
            <div className="contact-info">
            <h1>{contact.name}</h1>
            <h2>{contact.email}</h2>
            </div>
        </div>
    )
}

export default ContactCard
