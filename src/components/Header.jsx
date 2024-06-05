import React from "react"

export default function Header(props) {
    const [displayMode, bg] = props.displayMode;
    const textColor = displayMode === 1 ? "#050506":"#e7e7eb"
    const buttonColor = "#050506"
    return (
        <header className="header" style={{ background:bg }}>
            <img 
                src="./images/troll-face.png" 
                className="header--image"
            />
            <h2 
                className="header--title" 
                style={{color: textColor}}>
                Meme Generator
            </h2>
            <button 
                className="header--project" 
                onClick={props.toggleMode} 
                style={{color: buttonColor}}>
                Change Display Mode
            </button>
        </header>
    )
}