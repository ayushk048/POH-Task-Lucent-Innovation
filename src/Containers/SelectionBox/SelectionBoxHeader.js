import React from 'react'
import './SelectionBoxHeader.css'

const SelectionBoxHeader = (props) => {
    return (

        <>
            <p>{props.stepSummury}</p>
            <h3 className="headerText">{props.head}</h3>
            <p className="bodyText">{props.body}</p>

        </>
    )
}

export default SelectionBoxHeader

