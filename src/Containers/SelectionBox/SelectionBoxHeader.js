import React from 'react'
import './SelectionBoxHeader.css'

const SelectionBoxHeader = (props) => {
    return (

        <div className="header">
            <p>{props.stepSummury}</p>
            <h3 className="headerText">{props.head}</h3>
            <p className="bodyText">{props.body}</p>

        </div>
    )
}

export default SelectionBoxHeader

