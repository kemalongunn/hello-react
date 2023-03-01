import React, { useState } from "react";
import CounterApp from "./States/CounterApp";
import User from "./Props/User";
import ChangeNameAge from "./States/ChangeNameAge";
import InputExample from "./States/InputExample";
import Effect from "./useEffect/Effect";
import CounterEffect from "./useEffect/CounterEffect";
import { isVisible } from "@testing-library/user-event/dist/utils";
import Contacts from "./ContactsApp";
import '../src/styles.css';
function App() {
  const [isVisible,setIsvisible] = useState(true);

  const name = "Kemal";
  const surname = "Ongun";
  const age = 25;
  const isLoggedIn = true;
  const friends = [
    {
      id: 1,
      name: "Kemal",
    },
    {
      id: 2,
      name: "Ahmet",
    },
    {
      id: 3,
      name: "Abdulah",
    },
  ];


  return (
    <div className="container" >
      {/* <User
        name={name}
        surname={surname}
        age={age}
        isLoggedIn={isLoggedIn}
        friends={friends}
      />

      <ChangeNameAge />
      <CounterApp />
      <InputExample />

      <Effect /> */}

      {/* {isVisible &&  <CounterEffect/>}
      <br/>
      <button onClick={(() => setIsvisible(!isVisible))}>Toggle</button>  */}

      <Contacts/>

    </div>
  );
}

export default App;
