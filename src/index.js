import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';





// function App() {
   
//         const [contact, setContact] = React.useState({
//             firstName: "Jane",
//             lastName: "Doe",
//             phone: "+1 (719) 555-1212",
//             email: "itsmyrealname@example.com",
//             isFavorite: false
//         })

    
    // function toggleFavorite() {
    //     console.log("Toggle Favorite")
    // }
    
    // return (
    //     <main>
    //         <article className="card">
    //             <img src="/images/mem-removebg-preview (1).png" className="card--image" alt="pic" />
    //             <div className="card--info">
    //                 <img 
    //                     src={`../images/star-empty.png`} 
    //                     className="card--favorite"
    //                     onClick={toggleFavorite} alt="pic"
    //                 /> 
    //                 <h2 className="card--name">
    //                    {contact.firstName} {contact.lastName}
    //                 </h2>
    //                 <p className="card--contact">{contact.phone}</p>
    //                 <p className="card--contact">{contact.email}</p>
    //             </div>
                
    //         </article>
    //     </main>
    // )
    // const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"])
    
    // function addItem() {
        // We'll work on this next
    //     setThingsArray(prevThingsArray => {
    //         return [...prevThingsArray, `Thing ${prevThingsArray.length + 1}`]
    //     })
    // }
    
    // const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)
    
    // return (
    //     <div>
    //         <button onClick={addItem}>Add Item</button>
    //         {thingsElements}
    //     </div>
    // )
// }



ReactDOM.createRoot(document.getElementById("root")).render(<App  />)
