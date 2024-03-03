import React ,{useContext} from "react";
import { CartProvider } from "../context/Cart";
import { CartContext } from "../context/Cart";
const Item=(props)=>{
    const {items,setItems} = useContext(CartContext);
    console.log(items)
    return(
        <div className="item-card">
         <h4>Item: {props.name}</h4>
         <p>price: {props.price}</p>
         <button onClick={()=>setItems([...items,{name:props.name,price:props.price}])}>add to cart</button>
        </div>
    )
}
export default Item;