import React from 'react'
import List from "./List"
import Form from "./Form"
import {useState,useEffect} from "react"
import "./styles.css"




function Contacts() {

const [contacts,setContacts] = useState([{
fullname:"Mehmet",
phone_number:"21212"
},
{fullname:"Ahmet",
phone_number:"5345466"}


])

useEffect(()=>{

   console.log(contacts) 
},[contacts])


    return (
        <div id="container" >
            <h1>Contact List</h1>
            <List contacts={contacts} />
            <Form addContact={setContacts} contacts={contacts} />
        </div>
    )
}

export default Contacts
