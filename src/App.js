import React, { useState, useEffect } from 'react'
import axios from 'axios';
import "./index.css"
import "./details.css"
import Popup from "./details"

function ContactList() {
  const  [contact, setContact] = useState ([])
  useEffect(() => {
    axios 
    .get('https://jsonplaceholder.typicode.com/users/')
    .then (res => {
      console.log(res)
      setContact(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  const [buttonPopup, setButtonPopup] = useState (false);
    return (
      <div>
          <Popup trigger={buttonPopup} setTrigger={setButtonPopup}></Popup>
        {contact.map(contact => (
          <div className="card">
            <div class="avatar"><p id="firstChar" key={contact.name}>{contact.name[0]}</p>
            </div>
            <h5 id="name" key={contact.name}>{contact.name}</h5>
            <h6 id="username" key={contact.username}>@{contact.username}</h6>
            <a id="website" key={contact.website} href="https://www.google.com/">htpp://{contact.website}</a>
            <button className="show-btn" onClick={()=> setButtonPopup(true)}>MORE DETAILS
            </button>
            </div>
        ))}
      </div> 
    )
 }
export default ContactList;
