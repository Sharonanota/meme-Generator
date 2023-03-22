import React from "react"
import Headers  from "./Components/Header"
import Meme from "./Components/Meme"

/**
 * Challenge: Build the Header component
 */
export default function App() {
  // destructuring
  const [count, setcount] = React.useState(0)

  function add(){
        setcount(count +1)
  }

  function minus(){
    setcount(prevCount => prevCount - 1)
}
  return(
    <div>
    <Headers />

    <Meme />


    
   
    <div className="counter">
            <button className="counter--minus" onClick={minus}>–</button>
            <div className="counter--count">
                <h1>{count}</h1>
            </div>
            <button className="counter--plus" onClick={add}>+</button>
        </div>
    
    </div>
  )
}