import React from 'react'

function Counter(props) {
    return (
        <div className="m-5"  style={{display: "flex", justifyContent: "center"}}>
      <input readOnly value={props.greeting}/>
       <button onClick={props.counter}>
         {props.isAbove === false ? "Count Up" : "Count Down" }
      </button>       
    </div>
    )
}

export default Counter