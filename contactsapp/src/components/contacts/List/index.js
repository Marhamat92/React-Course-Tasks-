import React from "react";
import {useState} from "react"


function List({ contacts }) { //props kullanarak contacts parametreye ekledık
 
 //filtireme işlemi yaptık
  const [filterText, setFilterText] = useState("")

  //filtireme işlemi yapıp item ı key lere(fullname ve phonenumber yani) ayırıp ve bu ikisinden herhangi biri "some ile yani" 
  //eyer filtertext de gecıyorsa bana getir bunu
  const filtered = contacts.filter((item)=>{
 return Object.keys(item).some((key)=>
 item[key]
 .toString()
 .toLowerCase()
 .includes(filterText.toLocaleLowerCase())
);
  });
  

  
  
  return (
    <div>
 
    <input placeholder="Search" value={filterText} onChange={(e)=>setFilterText(e.target.value)} />

      <ul className="list" >
        {filtered.map((contact, i) => (
          <li key={i}>
            {" "}
            <span>{contact.fullname}</span> <span>{contact.phone_number}</span> 
          </li>
        ))}
      </ul>

      <p>Total contacts ({filtered.length})</p>
    </div>
  );
}

export default List;

