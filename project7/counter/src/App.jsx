import { useContext, useState } from 'react'
import './App.css'
import Inc from './components/Inc';
import { contextdega } from './context/CounterContext';
import { CounterProvider } from './context/CounterContext';
import Incnew from './components/Incnew';
function App() {
  const CounterState = useContext(contextdega);
  console.log(CounterState)
  return (
   <div>
      <Inc/>
      <Incnew/>
   </div>
    
      
  )
}

export default App
