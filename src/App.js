import React from "react";
import User from "./Components/User";
function App() {
  const name = "Kemal";
  const surname = "Ongun";
  const age = 25;
  const isLoggedIn = false;
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
      <User name={"kemal"} surname={"ongun"} age={age} isLoggedIn={true}
      friends={friends}
      />
    </>
  );
}

export default App;
