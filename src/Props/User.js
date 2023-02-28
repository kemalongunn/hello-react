import React from "react";

function User({ name, surname, isLoggedIn, age,friends }) {
  return (
    <div>

      <h2>
        {isLoggedIn ? `${name} ${surname} (${age}) ` : "Giriş yapmadiniz..."}
      </h2>

     {
        friends.map((friend) => <div key={friend.id}> {friend.id}-{friend.name} </div>)
    }

    </div>
  );
}


export default User;
