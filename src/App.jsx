import React from "react"
import Header from "./components/Header"
import Meme from "./components/Meme"

export default function App() {
    const [displayMode, setdisplayMode] = React.useState([1,"linear-gradient(90deg, #fbfbfd 1.18%, #4a4a4c 100%)"]);
    function toggleMode(){
        setdisplayMode(prevDisplayMode =>{
            const [prevMode,prevBackground] = prevDisplayMode
            if(prevMode===1) {
                return [2,"linear-gradient(90deg, #3c3c3c 1.18%, #010102 100%)"]
            }
            else{
                return [1,"linear-gradient(90deg, #fbfbfd 1.18%, #4a4a4c 100%)"]
            }
        })
    }   
    return(
    <div>
        <Header 
            displayMode={displayMode} 
            toggleMode={toggleMode}
        />
        <Meme 
            displayMode={displayMode} 
            toggleMode={toggleMode}
        />
    </div>
    )
}
