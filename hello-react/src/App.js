import './App.css';
import React from "react"
import Header  from "./components/Header"
import User from "./components/User";

const friends=[
  {id:1,
    name:"Elnur"},
  {id:2,
    name:"Ayse"},
  {id:3,
    name:"Ahmet"},
  {id:4,
    name:"Emir"},
]

function App() {
  return (
    <>
    <User 
    name="Marhamat" 
    surname="Baghirov" 
    isLoggedIn={true} 
    age={29} 
    friends={friends}/>
    </>
  );
}

export default App;
