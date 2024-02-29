
import { useState } from "react";
function App() {

  // var counter = 0;

  const [counter,setCounter]=useState(0);

  const addValue=()=>{
    if(counter<20){
      setCounter(counter+1);
    }
  }

  const removeVal=()=>{
    if(counter>0){
      setCounter(counter-1);
    }
  }
    return (
    <>
    <h1>hello chai aur code</h1>
    <h2>counter value:{counter}</h2>
    <button onClick={addValue}>add value</button>
    <br />
    <button onClick={removeVal}>remove value</button>
    </>
   
  )
}

export default App
