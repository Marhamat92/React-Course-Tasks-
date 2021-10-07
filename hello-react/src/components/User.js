import React from 'react'

 function User({name,surname,age,isLoggedIn,friends}) {
    return (
        <>
           <h1>{isLoggedIn ? `${name} ${surname} (${age}) `: `Login Failed`} </h1> 


           {friends.map((friend)=>
           
           <div key={friend.id}>{friend.name}</div>

           )}

        </>
    )

    


}

export default User;