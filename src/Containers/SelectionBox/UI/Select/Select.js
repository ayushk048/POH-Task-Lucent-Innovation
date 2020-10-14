import React from 'react'

const Select = (props) => {
    return (
        <select onChange={(e) => props.selected(e)}>
            {props.selectOpt.map((ele , index) =>(
                <option key={index} value={ele.value}>{ele.name}</option>
                ))}
        </select>

    );
}

export default Select
