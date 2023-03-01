import React, { useEffect, useState } from 'react'

const initialFormValues = {fullname:"", phone_number:""};

function Form({setAddContacts,addContacts}) {

  const [formInput,setFormInput] = useState( initialFormValues );

  useEffect(() => {
    setFormInput(initialFormValues);
  },[addContacts])

  const onChangeInput = (e) => {
    setFormInput({...formInput,[e.target.name]: e.target.value});
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if(formInput.fullname === "" || formInput.phone_number === "") {
      return false;
    }

    setAddContacts([...addContacts,formInput]);


  }

  return (

    <form onSubmit={onSubmit} >
      
      <div>
        <input name='fullname' placeholder='Full name' value={formInput.fullname} onChange={onChangeInput}></input>
      </div>
      
      <div>
        <input name='phone_number' placeholder='phone number' value={formInput.phone_number} onChange={onChangeInput}></input>     
      </div>

      <div className='btn'>
        <button>Add</button>
      </div>

    </form>
    

    )
}

export default Form