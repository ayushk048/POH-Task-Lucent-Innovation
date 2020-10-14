import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavStepItem.css'

const NavStepItem = (props) => {
    return (
        <NavLink className="navLink" to={props.route} exact >
            <h4>{props.stepNo}</h4>
            <p>{props.stepName}</p>
        </NavLink>
    )
}

export default NavStepItem
