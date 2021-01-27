import React from 'react'
import {Link} from 'react-router-dom'
import './App.css'


function Nav() {
return (
    <nav>
        <h3>Logo</h3>
        <ul className="nav-links">
            <Link to="/counter">
            <li>Counter</li>
            </Link>
            <Link to="/colorbutton">
            <li>Color Button</li>
            </Link>
            <Link to="/codingnotes">
            <li>Coding Notes</li>
            </Link>           
            <Link to="/infotechnotes">
            <li>Information Technology Notes</li>
            </Link>           
            <Link to="/infotechquiz">
            <li>Information Technology Quiz</li>
            </Link>           
        </ul>
    </nav>
)
}

export default Nav