import React from 'react'

function ColorButton(props) {
    return (
    <div style={{display: "flex", justifyContent: "center", marginTop: "10px"}}>
        <button style={{backgroundColor: `${props.color}`, padding: "5px"}} onMouseEnter={props.randomized}>
            rbg({props.number})
        </button>
    </div>
    )   
}

export default ColorButton