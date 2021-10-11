import React from 'react'
import {useState,useEffect} from "react"
import Axios from "axios";

function Users() {

    const [users,setUsers] = useState([])
    const [isLoading,setIsloading] = useState(true)


//useEffect mount yapmak ıcın kullandık ve mount yaparken fetch yap dedik
useEffect(()=>{


//Axios yontemi kullanarak    
Axios("https://jsonplaceholder.typicode.com/users")
.then((res)=>setUsers(res.data))
.catch((e)=>console.log(e))  //yalnısları olursa
.finally(()=>setIsloading(false))  // false yaptık yukleme olduktan sonra loading gitsinkayb olsun

},[])


//fetch yontemi kullanarak
// fetch("https://jsonplaceholder.typicode.com/users")
// .then((res)=>res.json())
// .then((data)=>setUsers(data))
// .catch((e)=>console.log(e))  //yalnısları olursa
// .finally(()=>setIsloading(false))  // false yaptık yukleme olduktan sonra loading gitsin

// },[])





return (
        <div>
            <h1>Users</h1>
      {isLoading && <div>Loading...</div>}      
{users.map((user)=>(
    <div key={user.id} > {user.name} </div>
))
}



        </div>
    )
}

export default Users
