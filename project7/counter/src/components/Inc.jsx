import React from "react";
import { useContext } from "react";
import { contextdega } from "../context/CounterContext";
import { CounterProvider } from "../context/CounterContext";
export default function Inc(){
  const { count, setCount } = useContext(contextdega);    return(
        <div>
        <button onClick={()=>setCount(count+1)} value={count}>inc {count}</button>
        <button onClick={()=>setCount(count-1)} value={count}>dec {count}</button>
        <button onClick={()=>setCount(count+1)} value={count}>incnew {count}</button>
      </div>
    )       
}