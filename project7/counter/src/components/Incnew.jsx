import React,{useContext} from "react";
import { contextdega } from "../context/CounterContext";

export default function Incnew(){
    const{count,setCount}=useContext(contextdega);
    return(
        <div>
        <button onClick={()=>setCount(count+1)} value={count}>inccc{count}</button>
        <button onClick={()=>setCount(count-1)} value={count}>deccc {count}</button>
        <button onClick={()=>setCount(count+1)} value={count}>incnew {count}</button>
      </div>
    )
}

