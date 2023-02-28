import React, { useState } from "react";

function ChangeNameAge() {
  const [name, setName] = useState("Kemal");
  const [age, setAge] = useState(25);
  const [friends,setFriends] = useState(["Ömer","Tarik"]);
  const [address,setAddress] = useState({title:"Istanbul",zip:34020});
  return (
    <div>
      
      <h1> Hello {name} </h1>
      <h2> {age} </h2>
      
      <div>
        <button onClick={(() => setName("Ahmet"))}>Change Name</button>
        <button onClick={(() => setAge(21))}>Change Age</button>
      </div>
      <br/>
      <hr/>
      <br/>
      <div>
        <h2>FRIENDS</h2>
        {
          friends.map((friend,index) => (
            <div key={index}> {friend} </div>
          ))
        }
        <br/>
        <button onClick={(() => setFriends([...friends,"Furkan"]))}>Add new friend</button>
      </div>
      <br/>
      <div>
        <hr/>
        <br/>
        <h2>Address</h2>
        <div> {address.title}/{address.zip} </div>
        <button onClick={() => setAddress({...address,title:"Ankara"})}>Change the Address</button>
        <button onClick={() => setAddress({...address,zip:12345})}>Change the zip </button>
      </div>
    </div>
  );
}

export default ChangeNameAge;
