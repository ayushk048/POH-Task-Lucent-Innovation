import React from 'react'
import './ImageSelect.css'

const ImageSelect = (props) => {
    return (
        <div className={props.classes}>
            <img src={props.src} className="imageSelect" style={{ width: props.width }} alt={props.name} onClick={() => props.selected(props.id)} />
            <p onClick={() => props.selected(props.id)}>{props.name}</p>
        </div>
    )
}

export default ImageSelect
