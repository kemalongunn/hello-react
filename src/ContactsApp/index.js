import React, { useEffect, useState } from 'react'
import Form from './Form'
import List from './List'

function Contacts() {
  
  const [addContacts,setAddContacts] = useState([]);

  useEffect(() => {
    console.log(addContacts)
  },[addContacts])

  return (
    <div>
        <List/>
        <Form setAddContacts = {setAddContacts} addContacts = {addContacts}  />
    </div>
  )
}

export default Contacts