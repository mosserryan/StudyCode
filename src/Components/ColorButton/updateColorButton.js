import React from 'react'
import styles from './colorButtonStyles.module.css'

function ColorButton(props) {

    

    return (
    <div className={styles.centerContent}>
        <button type="button" className="btn p-2" style={{backgroundColor: `${props.color}`}} onMouseEnter={props.randomized}>
            rbg({props.number})
        </button>
    </div>
    )   
}

export default ColorButton