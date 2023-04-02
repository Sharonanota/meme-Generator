import React from "react"
import Headers  from "./Components/Header"
import Meme from "./Components/Meme"
import Count from "./Components/Count"
import Form  from "./Form"


export default function App() {

//   const [formData, setFormData] = React.useState({
//     email: "",
//     password: "",
//     passwordConfirm: "",
//     joinedNewsletter: true
// })







  // const [count, setCount] = React.useState(0)
    
  // function add() {
  //     setCount(prevCount => prevCount + 1)
  // }
  
  // function subtract() {
  //     setCount(prevCount => prevCount - 1)
  // }
  // console.log("App component rendered")
  // const[isGoingOut, setisGoingOut]=React.useState(true)
  // destructuring

  // const isGoingOut = true
  // let answer = isGoingOut ? "Yes" : "No"

//   function changeMind() {
//     setisGoingOut(prevState => !prevState)
// }
  //   function handleChange(event) {
  //     const {name, value, type, checked} = event.target
  //     setFormData(prevFormData => ({
  //         ...prevFormData,
  //         [name]: type === "checkbox" ? checked : value
  //     }))
  //   }

  //   function handleSubmit(event) {
  //     event.preventDefault()
  //     if(formData.password === formData.passwordConfirm) {
  //         console.log("Successfully signed up")
  //     } else {
  //         console.log("Passwords do not match")
  //         return
  //     }
      
  //     if(formData.joinedNewsletter) {
  //         console.log("Thanks for signing up for our newsletter!")
  //     }
  // }
  return(

    



//     <div className="counter">
//     <button className="counter--minus" onClick={subtract}>–</button>
//     <Count number={count} />
//     <button className="counter--plus" onClick={add}>+</button>
// </div>
    <>
      {/* //     <div className="counter">
      //     <button className="counter--minus" onClick={subtract}>–</button>
      //     <Count number={count} />
      //     <button className="counter--plus" onClick={add}>+</button>
      // </div>
      <div> */}
        <Headers />

    <Meme /> 
        {/* <Form/>
// 
      {/* </div>
      //     <div className="state">
      //       <h1 className="state--title">Do I feel like going out tonight?</h1>
      //             <div onClick={changeMind} className="state--value">
      //                 <h1>{isGoingOut ? "Yes" : "No"}</h1>
      //             </div>
      // </div> */}
    {/* <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    placeholder="Email address"
                    className="form--input"
                    name="email"
                    onChange={handleChange}
                    value={formData.email}
                />
                <input 
                    type="password" 
                    placeholder="Password"
                    className="form--input"
                    name="password"
                    onChange={handleChange}
                    value={formData.password}
                />
                <input 
                    type="password" 
                    placeholder="Confirm password"
                    className="form--input"
                    name="passwordConfirm"
                    onChange={handleChange}
                    value={formData.passwordConfirm}
                />
                
                <div className="form--marketing">
                    <input
                        id="okayToEmail"
                        type="checkbox"
                        name="joinedNewsletter"
                        onChange={handleChange}
                        checked={formData.joinedNewsletter}
                    />
                    <label htmlFor="okayToEmail">I want to join the newsletter</label>
                </div>
                <button 
                    className="form--submit"
                >
                    Sign up
                </button>
            </form>
        </div> */}
        </>
  )
}