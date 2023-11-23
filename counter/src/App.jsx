import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(5);

  // let counter = 5;
  let addValue = () => {
    // console.log("Value added", Math.random());
    // counter += 1;
    setCounter(counter + 1);
  }
  let descValue = () => {
    setCounter(counter - 1);
  }
  if(counter < 0){
    setCounter(counter == 0);
    // console.log(counter);
  }
  return (
    <>
      <h1>Counter Project | Mohd Ajlal</h1> 
      <h2>Counter Value: {counter}</h2>
      <button
      onClick={addValue}>Add Value</button> 
      <br />
      <button
      onClick={descValue}
      >Desc Value</button>
    </>
  )
}

export default App
