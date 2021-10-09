import React from 'react'
import {useState,useEffect} from "react"

function Counter() {

    const [number,setNumber] = useState(0)
    
    useEffect(()=>{
      console.log("Component did mount ")

     
     const interval = setInterval(()=>{

     setNumber((n)=>n + 1)},1000)
        

     return ()=>clearInterval(interval) //unmount yapmak ıcın en sonda return function yapyoruz

    },[] )
    
  
    
    useEffect(()=>{
      console.log("number was increased")
    },[number] )
    
    


    return (
        <div>

         <h1>{number}</h1>
         <button onClick={(()=>{setNumber(number+1)})} >Click to increase number</button>


        </div>
    )
}

export default Counter
