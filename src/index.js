import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';





// function App() {
//   const thingsArray = ["Thing 1", "Thing 2"]
//   const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)
  
//   function addItem() {
//       const newThingText = `Thing ${thingsArray.length + 1}`
//       thingsArray.push(newThingText)
//       console.log(thingsArray)
//   }
  
//   return (
//       <div>
//           <button onClick={addItem}>Add Item</button>
//           {thingsElements}
//       </div>
//   )
// }



ReactDOM.createRoot(document.getElementById("root")).render(<App  />)
