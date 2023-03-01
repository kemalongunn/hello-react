import React, { useState } from 'react'

function List({addContacts}) {
  const [filterText,setFilterText] = useState("");

  const filtered = addContacts.filter((item) => {
    return Object.keys(item).some((key) =>
    item[key]
    .toString()
    .toLowerCase()
    .includes(filterText.toLocaleLowerCase())
    );
  });

  return (
    <div>

      <input placeholder='Filter Contact' value={filterText} onChange={(e) => setFilterText(e.target.value)}></input>

      <ul className='list'>
        {
          filtered.map((addContact,i) => 
          <li key={i}> 
            <span> {addContact.fullname} </span>
            <span> {addContact.phone_number} </span>
          </li> )
        }
      </ul>
      <p id='result'>Total Contacts ({filtered.length})</p>
    </div>
  )
}

export default List