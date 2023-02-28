import React, { useEffect, useState } from 'react'

function Effect() {
    const [number,setNumber] = useState(1);
    const [name,setName] = useState("Kemal");

    
    useEffect(() => {
        console.log("component mount edildi");
    },[])

    useEffect(() => {
        console.log("number state güncellendi");
    },[number])

    useEffect(() => {
        console.log(" name state güncellendi");
    },[name])


  return (
    <div>
        <h1> {number} </h1>
        <button onClick={(() => setNumber(number + 1))}>Click</button>
        <hr/>
        <h1> {name} </h1>
        <button onClick={(() => setName("Ahmet"))}>Click</button>
    </div>
  )
}

export default Effect