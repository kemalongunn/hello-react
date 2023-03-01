import React, { useEffect, useState } from 'react'
import Form from './Form'
import List from './List'
import '../styles.css'
function Contacts() {
  
  const [addContacts,setAddContacts] = useState([
    {
      fullname:"Kemal",
      phone_number:"12345"
    },

    {
      fullname:"Ahmet",
      phone_number:"123456"
    },
    {
      fullname:"Kemal",
      phone_number:"123457"
    },

  ]);

  useEffect(() => {
    console.log(addContacts)
  },[addContacts])

  return (
    <div id='content'>
      <h1>Contacts App</h1>
        <List addContacts = {addContacts}/>
        <Form setAddContacts = {setAddContacts} addContacts = {addContacts}  />
    </div>
  )
}

export default Contacts