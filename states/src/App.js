import './App.css';
import {useState} from "react";

function App() {

  const [name,setName] = useState("Ahmet");
  const [age,setAge] = useState(24);
  const [friends, setFriends] = useState(["Albino","Amigo"]) //array tanımladım
  const [address,setAddress]=useState({
    title:"Ankara",
    zip:35000
  }) //obje tanımladık
   

  return (
    <div className="App">
     <h1>Hello {name}</h1>
     <h2>Your age {age}</h2>
     <button onClick={()=>setName("Marhamat")} >Click to change name</button>
     <button onClick={()=>setAge(29)} >Click to change age</button>

    <hr />
    <br></br>


    <h1>Friends</h1>
    {friends.map((friend, index)=>
      <div key = {index} >{friend}</div>
    )}
 
 <button onClick={()=>setFriends([...friends,"Mermilo"])} >Click to add a new friend</button>


    <hr />
    <br></br>

   <h1>Address</h1>
   <div>{address.title} {address.zip}</div>
   <button onClick={()=>setAddress({title:"Istanbul",zip:34413})} >Click to change your address</button>



    </div>
  );
}

export default App;
