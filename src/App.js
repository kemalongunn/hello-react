import React from "react";
import User from "./Props/User";
import ChangeNameAge from "./States/ChangeNameAge";
function App() {
  const name = "Kemal";
  const surname = "Ongun";
  const age = 25;
  const isLoggedIn = true;
  const friends = [
    {
      id: 1,
      name:"Kemal"
    },
    {
      id: 2,
      name:"Ahmet"
    },
    {
      id: 3,
      name:"Abdulah"
    }
  ];
  return (
    <>

      <User name={name} surname={surname} age={age} isLoggedIn={isLoggedIn}
      friends={friends}
      />

      <ChangeNameAge/>

    </>
  );
}

export default App;
