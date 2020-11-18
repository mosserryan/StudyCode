import React from 'react'
import styles from './counterStyles.module.css'

function updateCounter(props) {
    return (
    <div className={`input-group mt-3 ${styles.centerContent}`}>
      <div className="input-group-prepend">
        <button type="button"  className={`btn btn-primary ${styles.buttonWidth}`} onClick={props.counter}>
          {props.isAbove === false ? "Count Up" : "Count Down" }
        </button>
      </div>
      <div className={styles.inputFieldWidth}>
        <input type="text" className={`form-control ${styles.centerContent}`} value={props.buttonText} readOnly/>
      </div>              
    </div>    
    )
}

export default updateCounter