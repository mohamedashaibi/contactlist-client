import React from 'react'
import './Form.css'
function Form() {
    return (
        <div className="contact-form">
            <input name="name" className="name-input"/>
            <input name="email" className="email-input"/>
            <input type="button" value="Save"/>
        </div>
    )
}
 
export default Form
