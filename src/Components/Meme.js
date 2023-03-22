import React from "react"

import memeData from "../memeData.js"



export default function Meme(){
const [memeImage, setMemeImage] = React.useState("")
    function meme(){
       
        const memesArray = memeData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
    }
    return(
        <main>
          <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button onClick={meme}
                    className="form--button"
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <img src={memeImage} alt="img" className="meme--image"/>

        </main>
        
    )
}