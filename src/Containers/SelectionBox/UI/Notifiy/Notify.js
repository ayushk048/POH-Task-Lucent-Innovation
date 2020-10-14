import React from 'react'
import './Notify.css'

const Notify = (props) => {
    return (
        <div className="notify-container">
            <p>{props.name} is added</p>
        </div>
    )
}

export default Notify
