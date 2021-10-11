import React from 'react'
import {useParams,Link} from "react-router-dom"
import {useState,useEffect} from  "react"
import axios from 'axios';


function User() {
const[isLoading,setIsLoading]=useState(true)
const {id} = useParams();
const [user,setUser] = useState({})


useEffect(()=>{

axios(`https://jsonplaceholder.typicode.com/users/${id}`)
.then((res)=>setUser(res.data))
.finally(()=>setIsLoading(false))

},[id])

    return (
        <div>
            <h1>User Detail</h1>
            {isLoading && <div>Loading...</div> }
            <p>{!isLoading && JSON.stringify(user)}</p>
            <br/>
            <br/>
        <Link  to={`/users/${parseInt(id) + 1}`} >
            Next User({parseInt(id)+1})
            </Link>
           
        </div>
    )
}

export default User
