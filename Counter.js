import React,{useState} from 'react'

const Counter = () => {
    const [num,setNum]=useState(0);

    const decrement = () =>{
        setNum(num-1);
    }

    const increment = () => {
        setNum(num+1);
    }

    const reset = () =>{
        setNum(0)
    }
  return (
    <>
    <h3>{num}</h3>
    <button onClick={decrement}>Decrement</button>
    <button onClick={reset}>Reset</button>
    <button onClick={increment}>Increment</button>

    </>
  )
}

export default Counter