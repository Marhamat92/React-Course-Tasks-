import './App.css';
import React from "react"

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
    age={"Twenty Seven"} 
    friends={friends}
    address={{
      title:"Kagıthane",
      postal_code:34413
    }}
    />
    </>
  );
}

export default App;
