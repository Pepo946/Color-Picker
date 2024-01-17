// eslint-disable-next-line no-unused-vars
import React , {useState} from "react";
import "./color.css"

function ColorPeck() {

 const [color,setcolor]=useState("#FFFFFF")

function handlcolor(event){
    setcolor(event.target.value);
}
    return(
    <div className="color-picker-container">
        <h1>Color Picker</h1>
        <div className="color-display" style={{ background: color }}>
        <p> your Color :{color}</p>
        </div>
        <label>Select a Color:</label>
        <input type="color" value={color} onChange={handlcolor}/>
    
    
    </div>);
}

export default ColorPeck;
