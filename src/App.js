import React from "react";
function App() {
  const name = "Kemal"
  const surname = "Ongun"
  const age = 25
  const isLoggedIn = false;

  return (
    <>

      <h1> {isLoggedIn ?`Adım ${name}, soyadım ${surname} yasım ${age}`: "giriş yapmadınız"} </h1>

    </>
  );
}

export default App;
