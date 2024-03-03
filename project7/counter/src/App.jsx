import { useContext, useState } from 'react'
import './App.css'
// import Inc from './components/Inc';
// import { contextdega } from './context/CounterContext';
// import { CounterProvider } from './context/CounterContext';
// import Incnew from './components/Incnew';
import Item from './components/Item';
import Cart from './components/Cart';
function App() {
  // const CounterState = useContext(contextdega);
  // console.log(CounterState)
  return (
   <div>
      {/* <Inc/>
      <Incnew/> */}
      <Item name='phone' price={1000}/>
      <Item name='pin' price={1000}/>
      <Item name='hairdrider' price={1000}/>
      <Item name='fridge' price={1000}/>
      <Cart/>
   </div>
    
      
  )
}

export default App
