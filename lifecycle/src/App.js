import Counter from "./components/Counter.js"
import {useState} from "react";

function App() {
const [isVisible,setIsvisible] = useState(true)


  return <div>
   {isVisible && < Counter/>} 
    <button onClick={()=>{setIsvisible(!isVisible)}} >Toggle</button>
  </div>;
}

export default App;
