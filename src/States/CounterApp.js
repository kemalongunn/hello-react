import React, { useState } from 'react'

function CounterApp() {
    const [count,setCount] = useState(0);

    const handleIncrease = () => {
        setCount(count + 1);
    }

    const handleDecrease = () => {
        setCount(count - 1);
    }

    const titleStyle = {
        fontSize:150,
        marginTop:100,
        display:"flex",
        justifyContent:"center",
        alignItems: "center",
    };

    const numberStyle = {
        marginTop:100,
        display:"flex",
        justifyContent:"center",
        alignItems: "center",
        fontSize:100,
        color:"red"
    };

    const buttonLayout = {
        marginTop:15,
        display:"flex",
        justifyContent:"center",
        alignItems: "center",
    };
    
    
    const buttonStyle = {
        fontSize:50,
        marginLeft:10,
        borderRadius:10,
        
    };    

  return (
    <div >
        <h1 style={titleStyle}>Counter App</h1>
        <div style={numberStyle}> {count} </div>
        <div style={buttonLayout} >
            <button style={buttonStyle} onClick={handleIncrease}>INCREASE</button>
            <button style={buttonStyle} onClick={handleDecrease}>DECREASE</button>
        </div>
    </div>
)
}

export default CounterApp