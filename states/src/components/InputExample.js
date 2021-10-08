import React from 'react'
import {useState} from 'react';

function InputExample() {
const [form,setForm] = useState({name:"",surname:""})

const onChangeInput = (event)=>{
 
 setForm({...form,  [event.target.name]:event.target.value})

}





    return (
        <div>
            Name <br/>
            <input name="name" value={form.name} onChange={onChangeInput} />

            <br/>

            Surname <br/>
            <input name="surname" value={form.surname} onChange={onChangeInput} />

          <br/>

          <h1>{form.name} {form.surname} </h1>
       
        </div>
    )
}

export default InputExample
