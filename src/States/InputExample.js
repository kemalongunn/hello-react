import React, { useState } from "react";
import buttonStyle from './CounterApp';
function InputExample() {
  const [form, setForm] = useState({ name: "", surname: "" });
  const [isClick, setIsClick] = useState(false);

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleForm = () => {
    setIsClick(true);
  };

  const layout = {
    marginTop: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

    
  const buttonStyle = {
    fontSize:30,
    marginLeft:10,
    borderRadius:10,
    color:"#efb304",
    backgroundColor:"#fdf3e0",
    borderColor: "#fdf3e0"
    
}; 

  return (
    <>
      <div style={layout}>
        <h3>Name:</h3>
        <input name="name" value={form.name} onChange={onChangeInput}></input>
      </div>

      <div style={layout}>
        <h3>Surname:</h3>
        <input
          name="surname"
          value={form.surname}
          onChange={onChangeInput}
        ></input>
      </div>
      <div style={layout}>
        <button  style={buttonStyle} onClick={handleForm}>SHOW</button>
      </div>
      <div>
        {
            isClick === true ? <h1> {form.name} {form.surname} </h1> : "Butona tiklayiniz..."
        }
      </div>
    </>
  );
}

export default InputExample;
