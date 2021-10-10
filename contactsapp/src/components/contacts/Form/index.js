import React from 'react'
import {useState,useEffect} from "react";

const initialFormValues={fullname:"",phone_number:""}




function Form( {addContact,contacts}) {


    const [form, setForm] = useState(initialFormValues)

    useEffect(()=>{
        setForm(initialFormValues)
    },[contacts])

    const onChangeInput=(e)=>{
        setForm({ ...form,[e.target.name]:e.target.value})
    }
    
    const onSubmit=(e)=>{
    
    //to stop process and show what have been sent
     e.preventDefault()
     
     //when empty doesnt send form
     if (form.fullname==="" || form.phone_number==="") {
         return false
     }

     //always when add new one,keeps the previous ones
     addContact([ ...contacts,form ])

       //to show form
        console.log(form)


       
    }



    return (
        <form onSubmit={onSubmit} >
            <div>
                <input 
                name="fullname" 
                placeholder="Full Name" 
                onChange={onChangeInput} 
                value={form.fullname}
                />
            </div>

            <div>
                <input 
                name="phone_number" 
                placeholder="Phone Number" 
                onChange={onChangeInput} 
                value={form.phone_number}
                />
            </div>

            <div className='btn' >
                <button>Add</button>
            </div>

        </form>
    )
}

export default Form
