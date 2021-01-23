import React, { useState } from 'react'
import ContactCard from './ContactCard'
import './ContactList.css'

function ContactList(props) {
    console.log("props in contactlist="+props.contacts)
    const [contacts, setContacts] = useState(props.contacts)
    console.log("Contactslist in list after set = " + contacts)

    return (
        <div className="contact-list">
            {contacts.map((item)=>{
                console.log("item in map=" + item.name)
                return <ContactCard contact={item}/>
           })}
        </div>
    )
}

export default ContactList
