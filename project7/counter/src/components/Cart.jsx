import React ,{useContext}from "react";
import { CartContext } from "../context/Cart";
const Cart=()=>{
    const {items,setItems}=useContext(CartContext);
    const total = items.reduce((a,b)=>a+b.price,0)
    return(
        <div className="cart">
           <h1>cart</h1>
           {
            items && items.map((items)=><li>{items.name}-${items.price} </li>)
           }
           <h5>total bill :{total} </h5>
        </div>
    )
}

export default Cart;